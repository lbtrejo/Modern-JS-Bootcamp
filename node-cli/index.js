#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => { // '.' indicates the CWD, only usable
    // on *nix based machines, used process.cwd() instead

    // Either
    // err === an error object, some issue occurred
    // OR
    // err === null, gtg

    // Common pattern in node.js, callback function has 2 args, err and output
    // Handle the error appropriately and then deal with the outupt

    if (err) {
        console.error(err);
    }

    // Bad code here!!!
    const allStats = Array(filenames.length).fill(null);

    for (let filename of filenames) {
        const index = filenames.indexOf(filename);

        fs.lstat(filename, (err, stats) => {
            if (err) {
                console.log(err);
            }
            allStats[index] = stats;
            const ready = allStats.every((stats) => {
                return stats;
            });

            if (ready) {
                allStats.forEach((stats, index) => {
                    console.log(filenames[index], stats.isFile());
                });
            }
        });
    }

    // This code is bad because it can return the results logging in a random order
    // Since the HD takes different lengths of time to return the callback,

    // Bad code complete

    // filenames.map((file) => {
    //     fs.lstat(file);
    // });
});
