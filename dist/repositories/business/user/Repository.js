"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
const model_1 = require("./model");
class UserRepository extends versionable_1.VersionableRepository {
    constructor(model) {
        super(model);
    }
    async create(data) {
        return await super.create(data);
    }
    async find(query = {}) {
        return await super.find(query);
    }
    async findOne(originalId) {
        return await super.findOne(originalId);
    }
    async update(originalId, data) {
        return await super.update(originalId, data);
    }
    async remove(originalId) {
        return await super.remove(originalId);
    }
}
exports.default = new UserRepository(model_1.default);
//# sourceMappingURL=Repository.js.map