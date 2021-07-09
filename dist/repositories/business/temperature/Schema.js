"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
class TemperatureSchema extends versionable_1.VersionableSchema {
    constructor() {
        const Measurement = {
            ts: {
                type: Date,
            },
            val: {
                type: Number,
            },
        };
        const baseSchema = {
            startDate: {
                type: Date,
            },
            endDate: {
                type: Date,
            },
            measurements: {
                type: [Measurement]
            },
        };
        super(baseSchema);
    }
}
exports.default = TemperatureSchema;
//# sourceMappingURL=Schema.js.map