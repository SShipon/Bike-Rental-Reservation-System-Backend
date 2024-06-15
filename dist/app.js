"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
//routes
app.use('/api', routes_1.default);
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
app.get('/', (req, res) => {
    res.send('<h2 style="color:#6A0987 ;text-align:center; margin:15% auto; font-size:48px; font-weight: 900;">✔️Bike Rentals Server Running 🔥😃</h2>');
});
app.get('/', (req, res) => res.send(`Server is running fine!`));
exports.default = app;
