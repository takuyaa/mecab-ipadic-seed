"use strict";

const assert = require('assert');
const IPADic = require('../lib/index');

describe('index.js', () => {
    it('load module', () => {
        assert(IPADic != null);
    });
});
