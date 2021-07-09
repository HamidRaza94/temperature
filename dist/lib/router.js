"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.use('/temperature', controllers_1.temperatureRoutes);
exports.default = router;
//# sourceMappingURL=router.js.map