"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
class UserSchema extends versionable_1.VersionableSchema {
    constructor() {
        const baseSchema = {
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
        };
        super(baseSchema);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=Schema.js.map