define([
    'magewire',
    'magewireEvent',
    'domReady!',
], function (magewire, magewireEvent) {
    'use strict';


    const components = Livewire.components.components();

    components.forEach(function(component) {
        let element = component.el;
        let id = element.getAttribute('wire:id');
        if(id == 'wire-ignore') {
          return;
        }
        const wireElements = element.querySelectorAll('[wire\\:model]');
        wireElements.forEach(function(element) {
            window.magewire_db.get(id + '.' + element.getAttribute('wire:model'), function(err, doc) {
                if(!err) {
                    element.value = doc.data;
                }
            });
        });
    });

    let hasEmits = false

    const canShowLoader = (message, component) => {
        if (Array.isArray(component.effects.loader)) {
            for (const item of message.updateQueue) {
                if (item.type !== 'callMethod') {
                    continue
                }

                return component.effects.loader.includes(item.method)
            }
        }

        return 'loader' in component.effects || hasEmits
    }

    Magewire.hook('message.sent', (message, component) => {
        if (canShowLoader(message, component)) {
            hasEmits = false

            magewireEvent.dispatchMagewireEvent('loader:start', {
                message: message, component: component
            })
        }
    })
    Magewire.hook('message.processed', (message, component) => {

        let element = component.el;
        let id = element.getAttribute('wire:id');
        let responseData = message.response.serverMemo.data;

        for (let key of Object.keys(responseData)) {
            window.magewire_db.get(id + '.' + key, function(err, doc) {
                if(!err) {
                  window.magewire_db.put({'_id': id + '.' + key, data: responseData[key], '_rev': doc._rev}, {force: true});
                } else {
                  window.magewire_db.put({'_id': id + '.' + key, data: responseData[key]});
                }
            });
        }

        hasEmits = 'loader' in component.effects && 'emits' in message.response.effects

        magewireEvent.dispatchMagewireEvent('loader:stop', {
            message: message, component: component
        })
    })
    Magewire.hook('message.failed', (message, component) => {
        magewireEvent.dispatchMagewireEvent('loader:stop', {
            message: message, component: component
        })
    })
});
