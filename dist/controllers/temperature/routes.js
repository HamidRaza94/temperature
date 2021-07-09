"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer = require("multer");
const Controller_1 = require("./Controller");
const router = express_1.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });
// Each route will have validation middleware to validate whether input is in correct format or not
router.route('/').post(Controller_1.default.create);
router.route('/upload').post(upload.single('file'), Controller_1.default.bulkCreate);
router.route('/').get(Controller_1.default.list);
exports.default = router;
//# sourceMappingURL=routes.js.map