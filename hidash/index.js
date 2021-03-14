module.exports = {
    forEach(arr, fn) {
        // for (let i = 0; i < arr.length; i += 1) {
        //     const value = arr[i];
        //     fn(value, i);

        // equivalent to above
        for (const index in arr) {
            fn(arr[index], index);
        }
    },
};
