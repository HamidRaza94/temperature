"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (message, status, data) => ({
    data,
    message: message || 'Success',
    status: status || 200,
    success: 'OK',
});
//# sourceMappingURL=successHandler.js.map