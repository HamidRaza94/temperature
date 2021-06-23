"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const lib_1 = require("./lib");
(() => {
    const server = new lib_1.Server(config_1.default);
    server.init().run();
})();
//# sourceMappingURL=index.js.map