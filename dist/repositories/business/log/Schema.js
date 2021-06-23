"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
class LogSchema extends versionable_1.VersionableSchema {
    constructor() {
        const baseSchema = {
            count: {
                type: Number,
                default: 0,
            },
            type: String,
        };
        super(baseSchema);
    }
}
exports.default = LogSchema;
//# sourceMappingURL=Schema.js.map