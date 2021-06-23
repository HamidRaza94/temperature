"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../../repositories");
const lib_1 = require("../../lib");
class UserController {
    async create(req, res, next) {
        try {
            const { name, age, email } = req.body;
            const result = await repositories_1.userRepository.create({ name, age, email });
            const isLogged = await repositories_1.logRepository.findOne('user');
            if (isLogged) {
                await repositories_1.logRepository.update('user', { count: isLogged.count + 1 });
            }
            else {
                await repositories_1.logRepository.create({ count: 1, type: 'user' });
            }
            res.status(200).send(lib_1.successHandler('Successfully Created.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
    async list(req, res, next) {
        try {
            const result = await repositories_1.userRepository.find();
            res.status(200).send(lib_1.successHandler('Successfully fetched.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const { id } = req.params;
            const { name, age, email } = req.body;
            const result = await repositories_1.userRepository.update(id, { name, age, email });
            const isLogged = await repositories_1.logRepository.findOne('user');
            await repositories_1.logRepository.update('user', { count: isLogged.count + 1 });
            res.status(200).send(lib_1.successHandler('Successfully Created.', 200, result));
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=Controller.js.map