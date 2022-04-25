"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Test_1 = __importDefault(require("../../controller/api/Test"));
const router = (0, express_1.Router)();
exports.router = router;
router.get('/test', Test_1.default.index);
router.get('/test/:id', (req, res) => {
    res.send('test router file' + req.params.id);
});
