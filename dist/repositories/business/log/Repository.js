"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
const model_1 = require("./model");
class LogRepository extends versionable_1.VersionableRepository {
    constructor(model) {
        super(model);
    }
    async create(data) {
        return await super.create(data);
    }
    async findOne(type) {
        const result = await super.find({ type });
        return result && result.length ? result[0] : undefined;
    }
    async update(type, data) {
        return await super.updateByQuery({ type }, data);
    }
}
exports.default = new LogRepository(model_1.default);
//# sourceMappingURL=Repository.js.map