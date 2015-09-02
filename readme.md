# sieve-set

[![NPM Version](https://img.shields.io/npm/v/sieve-set.svg)](https://www.npmjs.com/package/sieve-set)

Generate a Sieve of Eratosthenes with constant time lookup. For testing primes in constant time, see [quick-is-prime](https://github.com/dsernst/quick-is-prime).

## Install

```
$ npm install sieve-set
```

```js
var sieveSet = require('sieve-set');
```

## Usage

```js
console.log(sieveSet(100));
```

```js
{ '2': true,
  '3': true,
  '5': true,
  '7': true,
  '11': true,
  '13': true,
  '17': true,
  '19': true,
  '23': true,
  '29': true,
  '31': true,
  '37': true,
  '41': true,
  '43': true,
  '47': true,
  '53': true,
  '59': true,
  '61': true,
  '67': true,
  '71': true,
  '73': true,
  '79': true,
  '83': true,
  '89': true,
  '97': true }
```
