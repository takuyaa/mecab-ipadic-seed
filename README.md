# mecab-ipadic-seed

[![Build Status](https://travis-ci.org/takuyaa/mecab-ipadic-seed.svg?branch=master)](https://travis-ci.org/takuyaa/mecab-ipadic-seed)

File reader for [mecab-ipadic](https://github.com/taku910/mecab/tree/master/mecab-ipadic) seed dictionary.


## Installation

    $ npm install mecab-ipadic-seed


## Usage

Construct object:

```javascript
const IPADic = require('mecab-ipadic-seed');
const dic = new IPADic();
```

This library offers 4 methods: readMatrixDef(), readCharDef(), readUnkDef(), and readTokenInfo() for reading MeCab seed dictionary (They are text files).
For example, if you would like to read `metrix.def`:

```javascript
dic.readMatrixDef((line) => {
    // line is a line of text of matrix.def
    // This function will be called at line-by-line sequentially
}).then(() => {
    // This function will be called at once when all lines have been read
});
```

Usage of other 3 methods are in the same way.
See also under `test` directory.


## License

This project is licensed under the MIT License. See LICENSE.txt for details.
This repository includes files of 3rd party dictionaries. See NOTICE.md for these details.
