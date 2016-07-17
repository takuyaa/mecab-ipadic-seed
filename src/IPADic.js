"use strict";

const fs = require('fs');
import DictionaryReader from './DictionaryReader';
import SequentialDictionariesReader from './SequentialDictionariesReader';

/**
 * IPADic
 */
export default class IPADic {
    /**
     * @constructor
     */
    constructor() {
        this.costMatrixDefinition = new DictionaryReader('matrix.def');
        this.characterDefinition = new DictionaryReader('char.def');
        this.unknownWordDefinition = new DictionaryReader('unk.def');

        const readers = fs.readdirSync('lib/dict/').filter((filename) => {
            return /\.csv$/.test(filename);
        }).map((filename) => {
            return new DictionaryReader(filename);
        });
        this.tokenInfoDictionaries = new SequentialDictionariesReader(readers);
    }

    /**
     * Read cost matrix definition (matrix.def)
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Promise which is resolved when reading completed
     */
    readMatrixDef(callback) {
        return this.costMatrixDefinition.read(callback);
    }

    /**
     * Read character definition (char.def)
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Promise which is resolved when reading completed
     */
    readCharDef(callback) {
        return this.characterDefinition.read(callback);
    }

    /**
     * Read unknown word definition (unk.def)
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Promise which is resolved when reading completed
     */
    readUnkDef(callback) {
        return this.unknownWordDefinition.read(callback);
    }

    /**
     * Read token info dictionaries (*.csv) sequentially by filename
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Promise which is resolved when reading completed
     */
    readTokenInfo(callback) {
        return this.tokenInfoDictionaries.read(callback);
    }
}
