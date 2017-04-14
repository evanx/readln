
const assert = require('assert');
const lodash = require('lodash');
const split = require('split');

const noopf = () => false;

module.exports = (accumulator, onData, onEnd) => {
    if (typeof onEnd !== 'function') {
        throw new Error('Params: accumulator, onData, onEnd');
    }
    var index = 0;
    process.stdin.pipe(split()).on(
        'data', line => onData(accumulator, line, index)
    ).on(
        'end', () => onEnd(accumulator, index)
    );
}
