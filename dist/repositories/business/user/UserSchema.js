"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../versionable");
class UserSchema extends versionable_1.VersionableSchema {
    // constructor(options: any) {
    //   const baseSchema = {
    //     _id: String,
    //     email: String,
    //     name: String,
    //     password: String,
    //     role: String,
    //   };
    //   super(baseSchema, options);
    // }
    constructor() {
        const baseSchema = {
            _id: String,
            email: String,
            name: String,
            password: String,
            role: String,
        };
        super(baseSchema);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map