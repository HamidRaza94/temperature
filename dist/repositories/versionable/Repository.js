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
        const id = VersionableRepository.generateObjectId();
        const modelModified = new this.model(Object.assign(Object.assign({}, data), { _id: id, originalId: id }));
        const result = await modelModified.save();
        if (!result) {
            throw new Error('Creation Error.');
        }
        return result;
    }
    async find(query) {
        const { limit, skip } = query;
        const result = await this.model.find({ deletedAt: undefined }, undefined, { limit, skip });
        if (!result) {
            throw new Error('Error Ocurred.');
        }
        return result;
    }
    async findOne(originalId) {
        const result = await this.model.findOne({ originalId, deletedAt: undefined });
        if (!result) {
            throw new Error('Id does not exist.');
        }
        return result;
    }
    async findOneByQuery(query) {
        const result = await this.model.findOne(Object.assign(Object.assign({}, query), { deletedAt: undefined }));
        if (!result) {
            throw new Error('Id does not exist.');
        }
        return result;
    }
    async updateOne(originalId, data) {
        const result = await this.model.updateOne({ originalId, deletedAt: undefined }, data);
        if (!result) {
            throw new Error('Updation Error.');
        }
        return result;
    }
    async update(originalId, data) {
        const prevDoc = await this.findOne(originalId);
        const newDoc = prevDoc.toObject();
        const curDate = new Date();
        prevDoc.deletedAt = curDate;
        newDoc.updatedAt = curDate;
        newDoc._id = await VersionableRepository.generateObjectId();
        Object.assign(newDoc, data);
        await this.updateOne(originalId, prevDoc);
        const result = await this.model.create(newDoc);
        if (!result) {
            throw new Error('Updation Error.');
        }
        return result;
    }
    async updateByQuery(query, data) {
        const prevDoc = await this.findOneByQuery(query);
        const newDoc = prevDoc.toObject();
        const curDate = new Date();
        prevDoc.deletedAt = curDate;
        newDoc.updatedAt = curDate;
        newDoc._id = await VersionableRepository.generateObjectId();
        Object.assign(newDoc, data);
        await this.updateOne(prevDoc.originalId, prevDoc);
        const result = await this.model.create(newDoc);
        if (!result) {
            throw new Error('Updation Error.');
        }
        return result;
    }
    async remove(originalId) {
        const data = { deletedAt: new Date() };
        await this.findOne(originalId);
        return await this.updateOne(originalId, data);
    }
}
exports.default = VersionableRepository;
//# sourceMappingURL=Repository.js.map