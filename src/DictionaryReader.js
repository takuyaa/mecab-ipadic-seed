"use strict";

const fs = require('fs');
const readline = require('readline');

/**
 * MeCab seed dictionary reader
 */
export default class DictionaryReader {
    /**
     * @constructor
     * @param {string} filename
     */
    constructor(filename) {
        this.filename = filename;
    }

    /**
     * Read dictionary file
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Promise which is resolved when reading completed
     */
    read(callback) {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: fs.createReadStream(`lib/dict/${this.filename}`)
            });
            rl.on('line', (line) => {
                callback(line);
            });
            rl.on('close', () => {
                resolve();
            });
        });
    }
}
