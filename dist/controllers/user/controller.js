"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../../repositories");
const lib_1 = require("../../lib");
class UserController {
    async create(req, res, next) {
        try {
            const { name } = req.body;
            const result = await repositories_1.userRepository.create({ name });
            res.status(200).send(lib_1.successHandler('Successfully Created.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
    get(req, res, next) {
        return res.json('Success');
    }
}
exports.default = new UserController();
//# sourceMappingURL=controller.js.map