"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const envVars = process.env;
const configuration = Object.freeze({
    port: envVars.PORT,
    mongoURI: envVars.MONGO_URI,
});
exports.default = configuration;
//# sourceMappingURL=configuration.js.map