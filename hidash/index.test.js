const assert = require('assert');
const { forEach, map } = require('./index');

const test = (desc, fn) => {
    console.log(`---- ${desc} ----`);
    try {
        fn();
    } catch (err) {
        console.error(err);
    }
};

test('The forEach function', () => {
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });

    assert.strictEqual(sum, 6, 'Expected forEach to sum the array...');

    // if (sum !== 6) {
    //     throw new Error('Expected summing array to equal 6');
    // }
});

test('The map function', () => {
    const result = map([1, 2, 3], (item) => item * 3);

    assert.strictEqual(result[0], 3);
    assert.strictEqual(result[1], 6);
    assert.strictEqual(result[2], 9);

    // if (result[0] !== 3) {
    //     throw new Error(`Expected to find 3, but found ${result[0]}`);
    // }
    // if (result[1] !== 6) {
    //     throw new Error(`Expected to find 3, but found ${result[1]}`);
    // }
    // if (result[2] !== 9) {
    //     throw new Error(`Expected to find 3, but found ${result[2]}`);
    // }
});
