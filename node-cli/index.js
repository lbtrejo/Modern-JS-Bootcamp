#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => { // '.' indicates the CWD, only usable
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

    for (let filename of filenames) {
        try { 
            const stats = await lstat(filename);
            console.log(filename, stats.isFile());
        }
        catch (err) {
            console.log(err);
        }
    }

    // Bad code here!!!

    // Suboptimal solution 1:
    // Any added complexity into the for loop would get messy in a hurry

    // const allStats = Array(filenames.length).fill(null);

    // for (let filename of filenames) {
    //     const index = filenames.indexOf(filename);

    //     fs.lstat(filename, (err, stats) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         allStats[index] = stats;
    //         const ready = allStats.every((stats) => {
    //             return stats;
    //         });

    //         if (ready) {
    //             allStats.forEach((stats, index) => {
    //                 console.log(filenames[index], stats.isFile());
    //             });
    //         }
    //     });
    // }

    // Bad code complete

    // filenames.map((file) => {
    //     fs.lstat(file);
    // });
});

// Suboptimal solution 2:
// Method #1
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             }

//             resolve(stats);
//         })
//     });
// };
