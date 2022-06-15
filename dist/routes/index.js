"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CdpTestApi_1 = require("./api/CdpTestApi");
const EdmApi_1 = require("./api/EdmApi");
exports.default = (app) => {
    app.use('/', CdpTestApi_1.router);
    app.use('/', EdmApi_1.router);
};
