"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    const ALL = 'all';
    if (constants_1.permissions[moduleName] && (constants_1.permissions[moduleName][ALL].includes(role) ||
        constants_1.permissions[moduleName][permissionType].includes(role))) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permission.js.map