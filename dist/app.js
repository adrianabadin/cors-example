"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("express");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "http://localhost"],
    methods: ["GET", "POST"],
    credentials: true,
    preflightContinue: true
}));
app.use(express_1.default.json());
const route = (0, express_2.Router)();
route.post('/', (req, res) => {
    console.log(req.body);
});
app.listen(8080, () => console.log("connected"));
