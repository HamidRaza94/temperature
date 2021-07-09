"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../../repositories");
const lib_1 = require("../../lib");
class TemperatureController {
    async create(req, res, next) {
        try {
            const { ts, val } = req.body;
            const result = await repositories_1.temperatureRepository.update({ ts, val });
            res.status(200).send(lib_1.successHandler('Successfully Created.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
    async bulkCreate(req, res, next) {
        try {
            const multerText = JSON.parse(req.file.buffer.toString());
            await repositories_1.temperatureRepository.bulkUpdate(multerText);
            res.status(200).send(lib_1.successHandler('Successfully Uploaded.', 200, {}));
        }
        catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            const { startMonth, startYear, endMonth, endYear } = req.query;
            const startDate = new Date(startYear, startMonth, 0);
            const endDate = new Date(endYear, endMonth, 0);
            const result = await repositories_1.temperatureRepository.find({ startDate, endDate });
            res.status(200).send(lib_1.successHandler('Successfully fetched.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new TemperatureController();
//# sourceMappingURL=Controller.js.map