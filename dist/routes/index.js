"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestApi_1 = require("./api/TestApi");
const EdmApi_1 = require("./api/EdmApi");
exports.default = (app) => {
    app.use('/', TestApi_1.router);
    app.use('/', EdmApi_1.router);
};
