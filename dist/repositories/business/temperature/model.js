"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema_1 = require("./Schema");
const temperatureModel = mongoose_1.model('temperatures', new Schema_1.default());
exports.default = temperatureModel;
//# sourceMappingURL=model.js.map