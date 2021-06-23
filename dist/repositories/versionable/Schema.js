"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret.originalId;
            delete ret.originalId;
            delete ret._id;
            delete ret.__v;
        },
    },
    toObject: {
        transform: (doc, ret) => {
            ret.id = ret.originalId;
            delete ret.originalId;
            delete ret._id;
            delete ret.__v;
        },
    },
};
class VersionableSchema extends mongoose_1.Schema {
    constructor(baseSchema) {
        const versionSchema = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalId: {
                required: true,
                type: String,
            },
            updatedAt: {
                required: false,
                type: Date,
            },
        }, baseSchema);
        super(versionSchema);
    }
}
exports.default = VersionableSchema;
//# sourceMappingURL=Schema.js.map