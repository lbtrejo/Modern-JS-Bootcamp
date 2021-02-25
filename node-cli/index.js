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

    console.log(filenames);
});
