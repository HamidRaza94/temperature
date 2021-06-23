"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const router_1 = require("./router");
const Database_1 = require("./Database");
const routes_1 = require("./routes");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    init() {
        this.initCors();
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    /**
     * This will run the server at specified port after opening up of Database
     *
     * @returns -Instance of Current Object
     */
    async run() {
        try {
            const { mongoURI, port } = this.config;
            const isDBConnected = await Database_1.default.open(mongoURI);
            if (isDBConnected) {
                this.app.listen(port, () => {
                    console.log(`App is running at port '${port}'`);
                });
                return this;
            }
        }
        catch (err) {
            console.log('Error: ', err);
        }
    }
    /**
     *  - Parses urlencoded bodies & JSON
     */
    initBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    /**
     *
     * Lets you to enable cors
     */
    initCors() {
        this.app.use(cors({
            origin: ['http://localhost:3000'],
            method: ['GET', 'POST', 'PUT'],
        }));
    }
    setupRoutes() {
        this.app.use('/api', router_1.default);
        // catch 404 and forward to error handler
        this.app.use(routes_1.notFoundRoute);
        // error handler, send stacktrace only during development
        this.app.use(routes_1.errorHandler);
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map