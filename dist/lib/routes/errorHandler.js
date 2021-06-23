"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    const { error, message, status } = err;
    const errMsg = {
        error: error || 'Undefined',
        message: message || 'Error Ocurred',
        status: status || 500,
        timestamp: new Date(),
    };
    res.status(status).send(errMsg);
    next();
};
//# sourceMappingURL=errorHandler.js.map