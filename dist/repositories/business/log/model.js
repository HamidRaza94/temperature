"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema_1 = require("./Schema");
const logCollection = 'logs';
const logModel = mongoose_1.model(logCollection, new Schema_1.default());
exports.default = logModel;
//# sourceMappingURL=model.js.map