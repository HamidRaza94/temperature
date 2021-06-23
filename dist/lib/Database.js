"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class Database {
    static async open(mongoURI) {
        return new Promise((resolve, reject) => {
            mongoose_1.connect(mongoURI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => {
                console.log('Connected Successfully to database');
                return resolve('Connected successfully to database');
            })
                .catch((err) => {
                console.log('Error: ', err);
            });
        });
    }
    static close() {
        mongoose_1.disconnect();
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map