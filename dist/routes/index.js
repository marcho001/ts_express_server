"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EdmApi_1 = require("./api/EdmApi");
exports.default = (app) => {
    app.use('/', EdmApi_1.router);
};
