"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class VersionableRepository {
    constructor(model) {
        this.model = model;
    }
    static generateObjectId() {
        return String(mongoose_1.Types.ObjectId());
    }
    async create(data) {
        const modelModified = new this.model(data);
        const result = await modelModified.save();
        if (!result) {
            throw new Error('Creation Error.');
        }
        return result;
    }
    async findByQuery(query) {
        return await this.model.find(query);
    }
    async findOneByQuery(query) {
        return await this.model.findOne(query);
    }
    async update(query, data) {
        return await this.model.update(query, data);
    }
}
exports.default = VersionableRepository;
//# sourceMappingURL=Repository.js.map