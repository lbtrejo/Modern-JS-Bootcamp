const fs = require('fs');
const crypto = require('crypto');
const util = require('util');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }

        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
        return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
    }

    async create(attrs) {
        // { email: '', password: '' }
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);
        // { email: email@domain, pass: pwd }
        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`,
        };
        records.push(record);
        // write the update records array to this.filename
        await this.writeAll(records);
        // encoding defaults to utf8 and can be ommitted as an option if that encoding is fine
        return record;
    }

    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    async getOne(id) {
        const records = await this.getAll();
        return records.find((record) => record.id === id);
    }

    async delete(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter((record) => record.id !== id);
        await this.writeAll(filteredRecords);
    }

    async update(id, attrs) {
        const records = await this.getAll();
        const record = records.find((record) => record.id === id);

        if (!record) {
            throw new Error(`Record with id ${id} not found...`);
        }

        Object.assign(record, attrs);

        await this.writeAll(records);
    }

    async getOneBy(filters) {
        const records = await this.getAll();

        for (const record of records) {
            let found = true;
            // iterate through all K:V pairs of each object
            for (const key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }
            // if a match is found on all pairs, return the record
            if (found) {
                return record;
            }
        }
    }
}

// module.exports = UsersRepository;
// The above isn't ideal as it would allow for different variations of the repo to be created
//  ANOTHER FILE
// const usersRepository = require('./users');
// const repo = new UsersRepository('users.json');
// YET ANOTHER FILE
// const usersRepository = require('./users');
// const repo = new UsersRepository('user.json');

// Trying to debug the above scenario would be a nightmare

// Instead, we can only export a singular version of the repo
// for all outside files to interface with

module.exports = new UsersRepository('users.json');
