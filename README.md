#POC

## Creates a new DB
https://github.com/toonvd/magewire-requirejs/blob/cachepoc/src/view/base/web/js/magewire.js#L19

## Listens for processed messages and adds them to the DB
https://github.com/toonvd/magewire-requirejs/blob/cachepoc/src/view/base/web/js/magewire-loader.js#L54

## Adds DB content to existing elements on page load
https://github.com/toonvd/magewire-requirejs/blob/cachepoc/src/view/base/web/js/magewire-loader.js#L9

## Improvements
- Do loading the Livewire way + support HTML morphing.
  https://livewire.laravel.com/docs/javascript#component-initialization
- Do more than fething only data in processed messages.
- Escape output to prevent XSS.
- Support session based caching (add a timestamp with session expire date + check for it)

## Debugging
Use chrome devtools.
![screenshot](https://ctrlv.link/shots/2024/10/21/0Mvu.png)




# Magewire Require JS
[![Latest Stable Version](http://poser.pugx.org/magewirephp/magewire-requirejs/v)](https://packagist.org/packages/magewirephp/magewire-requirejs)
[![Total Downloads](http://poser.pugx.org/magewirephp/magewire-requirejs/downloads)](https://packagist.org/packages/magewirephp/magewire-requirejs)
[![License](http://poser.pugx.org/magewirephp/magewire-requirejs/license)](https://packagist.org/packages/magewirephp/magewire)

[Magewire](https://github.com/magewirephp/magewire) by default is meant as a Hyva Themes first extension. This means it
will only work on Hyva based themes out of the box and will not work on e.g. Luma or Blank based Magento 2 themes
(RequireJS dependend themes).

Because most developers want to work with a more modern and fun tech-stack doesn't mean I forgot all those die-hards
who still work with the original Magento frontend. **Magewire is made compatible via this so-called compatibility extension**.

## Installation
```
composer require magewirephp/magewire-requirejs
```

## Magewire examples
The ```magewirephp/magewire-examples``` extension will work in some extent but is not fully functional since most of
it's features are written with AlpineJS required.

## Security Vulnerabilities
If you discover a security vulnerability within Magewire, please create a PR or send an e-mail to Willem Poortman via
[magewirephp@wpoortman.nl](mailto:magewirephp@wpoortman.nl). All security vulnerabilities will be promptly addressed.

## License
Copyright © [Willem Poortman](https://github.com/wpoortman)

Magewire is open-sourced software licensed under the [MIT license](LICENSE.md).
