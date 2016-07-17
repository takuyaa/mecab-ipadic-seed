"use strict";

const assert = require('assert');
const IPADic = require('../lib/IPADic').default;

describe('IPADic', () => {
    it('constructor', () => {
        const dic = new IPADic();
        assert(dic != null);
        assert(dic.costMatrixDefinition != null);
        assert(dic.characterDefinition != null);
        assert(dic.unknownWordDefinition != null);
        assert(dic.tokenInfoDictionaries != null);
    });
    it('read cost matrix (matrix.def)', function(done) {
        this.timeout(5 * 60 * 1000); // 5 min
        const dic = new IPADic();
        let lines = 0;
        dic.readMatrixDef((line) => {
            assert(line != null);
            lines++;
        }).then(() => {
            assert(lines === 1731857);
            done();
        });
    });
    it('read character definition (char.def)', (done) => {
        const dic = new IPADic();
        let lines = 0;
        dic.readCharDef((line) => {
            assert(line != null);
            lines++;
        }).then(() => {
            assert(lines === 147);
            done();
        });
    });
    it('read unknown word definition (unk.def)', (done) => {
        const dic = new IPADic();
        let lines = 0;
        dic.readUnkDef((line) => {
            lines++;
            assert(line != null);
        }).then(() => {
            assert(lines === 40);
            done();
        });
    });
    it('read token info dictionaries (*.csv)', function(done) {
        this.timeout(5 * 60 * 1000); // 5 min
        const dic = new IPADic();
        let lines = 0;
        dic.readTokenInfo((line) => {
            assert(line != null);
            lines++;
        }).then(() => {
            assert(lines === 392126);
            done();
        });
    });
});
