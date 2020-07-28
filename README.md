# is-xid
A unique id checker module for node.js

## Install
```
npm i is-xid
```

## Usage
```js
const isXid = require('is-xid');

const id = 'bs6mkqt4pi406bibv930';
isXid(id); // true
```

## Limitations
/!\ Warning - This package is a beta version which only check the string length and bytes weight for now.

Incoming features:
- Base32 encoding check
- K-ordered string check

## Licence
[MIT License](https://github.com/joffreyverd/is-xid/blob/master/LICENSE)
