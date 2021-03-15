/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const path = require('path');

class Runner {
    constructor() {
        this.testFiles = [];
    }

    async runTests() {
        for (const file of this.testFiles) {
            const beforeEaches = [];
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            };

            global.it = (desc, fn) => {
                beforeEaches.forEach((func) => {
                    func();
                });
                try {
                    fn();
                    console.log(`PASSED - ${desc}`);
                } catch (err) {
                    console.log(`FAILED - ${desc}`);
                    console.log('\t', err.message);
                }
            };

            try {
                require(file.name);
            } catch (err) {
                console.log(err);
            }
        }
    }

    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        for (const file of files) {
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.includes('.test.js')) {
                this.testFiles.push({ name: filepath });
            } else if (stats.isDirectory()) {
                const childFiles = await fs.promises.readdir(filepath);

                files.push(...childFiles.map((f) => path.join(file, f)));
                // push all elements of childFiles arr into files
            }
        }

        return files;
    }
}

module.exports = Runner;
