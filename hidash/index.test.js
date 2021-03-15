/* eslint-disable no-undef */
const assert = require('assert');
const { forEach, map } = require('./index');

// const test = (desc, fn) => {
//     console.log(`---- ${desc} ----`);
//     try {
//         fn();
//     } catch (err) {
//         console.error(err);
//     }
// };

it('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });

    assert.strictEqual(sum, 6, 'Expected forEach to sum the array...');
});

it('The map function', () => {
    const result = map([1, 2, 3], (item) => item * 3);

    // assert.strictEqual(result[0], 3);
    // assert.strictEqual(result[1], 6);
    // assert.strictEqual(result[2], 9);

    assert.deepStrictEqual(result, [3, 7, 9]);
});
