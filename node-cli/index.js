#!/usr/bin/env node

const fs = require('fs');

const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    }

    const statPromises = filenames.map((filename) => lstat(filename));

    const allStats = await Promise.all(statPromises);

    for (const stats of allStats) {
        const index = allStats.indexOf(stats);

        console.log(filenames[index], stats.isFile());
    }
});
