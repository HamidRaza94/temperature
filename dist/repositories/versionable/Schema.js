"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VersionableSchema extends mongoose_1.Schema {
    constructor(baseSchema) {
        const versionSchema = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
        }, baseSchema);
        super(versionSchema);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=Schema.js.map