"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const index_1 = __importDefault(require("./routes/index"));
(0, index_1.default)(app);
app.listen(process.env.PORT, () => {
    console.log(`server is listening on ${process.env.PORT} env!!!`);
});
