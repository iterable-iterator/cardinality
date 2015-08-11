[js-cardinality](http://aureooms.github.io/js-cardinality)
==

Iterable cardinality code bricks for JavaScript.
Inspired by [this Python library](https://github.com/wbolster/cardinality).
Parent is [js-library](https://github.com/aureooms/js-library).

```js
cardinality.count( "abc"[Symbol.iterator]( ) ) ; // 3
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-cardinality.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-cardinality/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-cardinality.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-cardinality)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-cardinality.svg?style=flat)](http://bower.io/search/?q=aureooms-js-cardinality)
[![Build Status](http://img.shields.io/travis/aureooms/js-cardinality.svg?style=flat)](https://travis-ci.org/aureooms/js-cardinality)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-cardinality.svg?style=flat)](https://coveralls.io/r/aureooms/js-cardinality)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-cardinality.svg?style=flat)](https://david-dm.org/aureooms/js-cardinality#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-cardinality.svg?style=flat)](https://david-dm.org/aureooms/js-cardinality#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-cardinality.svg?style=flat)](https://codeclimate.com/github/aureooms/js-cardinality)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-cardinality.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-cardinality)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-cardinality.svg?style=flat)](https://github.com/aureooms/js-cardinality/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-cardinality.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-cardinality)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-cardinality
# or
jspm install npm:aureooms-js-cardinality
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-cardinality
```

### bower
```terminal
bower install aureooms-js-cardinality
```

### ender
```terminal
ender add aureooms-js-cardinality
```

### jam
```terminal
jam install aureooms-js-cardinality
```

### spm
```terminal
spm install aureooms-js-cardinality --save
```

### npm
```terminal
npm install aureooms-js-cardinality --save
```

## Require
### jspm
```js
let cardinality = require( "github:aureooms/js-cardinality" ) ;
// or
import cardinality from 'aureooms-js-cardinality' ;
```
### duo
```js
let cardinality = require( "aureooms/js-cardinality" ) ;
```

### component, ender, spm, npm
```js
let cardinality = require( "aureooms-js-cardinality" ) ;
```

### bower
The script tag exposes the global variable `cardinality`.
```html
<script src="bower_components/aureooms-js-cardinality/js/dist/cardinality.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-cardinality" ] , function ( cardinality ) { ... } ) ;
```

## Use

```js
let { count , at_least , at_most , between } = cardinality ;

count( "abc" ) ; // 3

let { iter , range , repeat } = require( "aureooms-js-itertools" ) ;

count( iter( "abc" ) ) ; // 3

//  / \   `count( iterable )` will loop forever on an infinite iterable
// / ! \  without a `length` or `size` property.
// -----

at_most( 10 , repeat( "A" ) ) ; // false

between( 0 , 10000 , range( 0 , 2839 , 1 ) ) ; // true

at_least( 10 , repeat( "A" ) ) ; // true

// other available functions
cardinality.len( iterable ) ; // count( iterable )

cardinality.le( n , iterable ) ; // len( iterable ) <= n
cardinality.lt( n , iterable ) ; // len( iterable )  < n
cardinality.ge( n , iterable ) ; // len( iterable ) >= n
cardinality.gt( n , iterable ) ; // len( iterable )  > n

cardinality.gele( m , n , iterable ) ; // m <= len( iterable ) <= n
cardinality.gelt( m , n , iterable ) ; // m <= len( iterable )  < n
cardinality.gtle( m , n , iterable ) ; // m  < len( iterable ) <= n
cardinality.gtlt( m , n , iterable ) ; // m  < len( iterable )  < n

cardinality.eq( n , iterable ) ; // len( iterable ) === n
cardinality.ne( n , iterable ) ; // len( iterable ) !== n
```
