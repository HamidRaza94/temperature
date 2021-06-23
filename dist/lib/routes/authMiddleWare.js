"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../config");
const repositories_1 = require("../../repositories");
const permission_1 = require("./permission");
exports.default = (moduleName, permissionType) => (req, res, next) => {
    const token = req.headers.authorization;
    let decode;
    try {
        const { PRIVATE_KEY } = config_1.config;
        decode = jsonwebtoken_1.verify(token, PRIVATE_KEY);
    }
    catch (_a) {
        return next({
            error: 'FORBIDDEN',
            message: 'Authentication Failed',
            status: 403,
        });
    }
    const { email, role } = decode;
    try {
        repositories_1.userRepository.checkEmail(email);
    }
    catch (_b) {
        return next({
            error: 'Access Denied',
            message: 'User does not exist',
            status: 403,
        });
    }
    if (!permission_1.default(moduleName, role, permissionType)) {
        return next({
            error: 'Access Denied',
            message: `${role} do not have permission to ${permissionType} for the ${moduleName} module`,
            status: 403,
        });
    }
    req.body.data = decode;
    next();
};
//# sourceMappingURL=authMiddleWare.js.map