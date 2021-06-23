"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../../repositories");
const lib_1 = require("../../lib");
class LogController {
    async count(req, res, next) {
        try {
            const result = await repositories_1.logRepository.findOne('user');
            res.status(200).send(lib_1.successHandler('Successfully fetched.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new LogController();
//# sourceMappingURL=Controller.js.map