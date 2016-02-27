lildash
=======

[![](https://travis-ci.org/EvanHahn/lildash.svg)](https://travis-ci.org/EvanHahn/lildash)

**No longer maintained. Use the better [101.js](https://github.com/tjmehta/101).**

A collection of JavaScript utilities inspired by [Lodash](https://lodash.com/) and [Underscore](http://underscorejs.org/).

Lodash and Underscore are great and they work well in all of the weird cases you can throw at them. But they can be pretty big.

Browserified and Uglified, this file is 2841 bytes gzipped:

```js
var assign = require('lodash/object/assign');

console.log(assign({ foo: 123 }, { bar: 456 }));
```

And this is 481 bytes gzipped:

```js
var assign = require('lildash/object/assign');

console.log(assign({ foo: 123 }, { bar: 456 }));
```

Most of the time, I'd recommend Lodash because it's much more well-tested, better accepts arcane inputs, and is fast in a variety of environments. But if filesize is hugely important to you, Lildash might be for you.

The goals of this project are:

- Make a utility library like Lodash or Underscore
- Small file size is more important than performance
- CommonJS and _only_ CommonJS
- You should be able to `require` only the pieces you need
- Optimize for "normal" cases, not edge cases
- Files should be relatively standalone so you can learn how these methods are written

Documentation is coming soon!
