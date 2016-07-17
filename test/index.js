"use strict";

const assert = require('assert');
const IPADic = require('../lib/index');

describe('index', () => {
    it('load module', () => {
        assert(IPADic != null);
    });
});
