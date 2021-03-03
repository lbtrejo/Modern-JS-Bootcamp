const fs = require('fs');
const crypto = require('crypto');

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
        attrs.id = this.randomId();

        // { email: email@domain, pass: pwd }
        const records = await this.getAll();

        records.push(attrs);
        // write the update records array to this.filename
        await this.writeAll(records);
        // encoding defaults to utf8 and can be ommitted as an option if that encoding is fine
    }

    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }
}

const test = async () => {
    const repo = new UsersRepository('users.json');

    await repo.create({ email: 'test@testing.com', password: 'password' });

    const users = await repo.getAll();

    console.log(users);
};

test();
