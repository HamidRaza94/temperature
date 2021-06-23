"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controller_1 = require("./Controller");
const router = express_1.Router();
router.route('/').get(Controller_1.default.count);
exports.default = router;
//# sourceMappingURL=routes.js.map