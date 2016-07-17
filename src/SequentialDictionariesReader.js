"use strict";

export default class SequentialDictionariesReader {
    /**
     * @constructor
     * @param {DictionaryReader[]} readers Dictionary readers in order
     */
    constructor(readers) {
        this.readers = readers;
    }

    /**
     * Read dictionaries sequentially
     * @param {function(line: string)} callback Line-by-line callback function
     * @returns {Promise} Last promise
     */
    read(callback) {
        var promises = this.readers.map(function(reader) {
            return reader.read(function(line) {
                callback(line);
            });
        });
        for (let i = 0; i < promises.length - 2; i++) {
            promises[i].then(promises[i + 1]);
        }
        return promises[promises.length - 1];
    }
}
