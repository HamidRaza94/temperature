"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionable_1 = require("../../versionable");
const model_1 = require("./model");
class TemperatureRepository extends versionable_1.VersionableRepository {
    constructor(model) {
        super(model);
    }
    async find({ startDate, endDate }) {
        const currentDate = new Date();
        const previousYear = new Date();
        previousYear.setMonth(currentDate.getMonth() - 12);
        const query = { startDate: { $gte: startDate || previousYear }, endDate: { $lte: endDate || currentDate } };
        return await super.findByQuery(query);
    }
    async update(data) {
        const currentDate = new Date();
        const prevDoc = await super.findOneByQuery({ startDate: { $gte: currentDate }, endDate: { $lte: currentDate } });
        if (prevDoc) {
            return await super.update({ _id: prevDoc._id }, { $push: { measurements: data } });
        }
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const updatedData = {
            startDate,
            endDate,
            measurements: [data],
        };
        return await this.create(updatedData);
    }
    async bulkUpdate(data) {
        const dataToInsert = {};
        data.forEach(({ ts, val }) => {
            const date = new Date(ts);
            const month = date.getUTCMonth() + 1;
            const year = date.getUTCFullYear();
            if (!dataToInsert[`${year}_${month}`]) {
                dataToInsert[`${year}_${month}`] = [];
            }
            dataToInsert[`${year}_${month}`].push({ ts, val });
        });
        const toCheck = [];
        for (let d in dataToInsert) {
            toCheck.push(d);
        }
        const check = async () => {
            for (let d of toCheck) {
                const [year, month] = d.split('_');
                const currentDate = new Date(year, month - 1, 1);
                const prevDoc = await super.findOneByQuery({ startDate: { $gte: currentDate }, endDate: { $lte: currentDate } });
                if (prevDoc) {
                    await super.update({ _id: prevDoc._id }, { $push: { measurements: { $each: dataToInsert[d] } } });
                }
                const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
                const updatedData = {
                    startDate,
                    endDate,
                    measurements: dataToInsert[d],
                };
                await super.create(updatedData);
            }
        };
        check();
    }
}
exports.default = new TemperatureRepository(model_1.default);
//# sourceMappingURL=Repository.js.map