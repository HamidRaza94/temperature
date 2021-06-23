"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    return next({
        error: 'Not Found',
        message: 'Not Found Route',
        status: 404,
    });
};
//# sourceMappingURL=notFoundRoute.js.map