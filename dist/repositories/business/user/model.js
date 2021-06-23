"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema_1 = require("./Schema");
const userCollection = 'users';
const userModel = mongoose_1.model(userCollection, new Schema_1.default());
exports.default = userModel;
//# sourceMappingURL=model.js.map