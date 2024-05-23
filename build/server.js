"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
//routes
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
//error handler
//import { AccessTokenClaims } from './lib/types';
// declare global {
//   namespace Express {
//     interface Request {
//       user: AccessTokenClaims;
//     }
//   }
// }
dotenv_1.default.config();
(0, dbConfig_1.default)();
const app = (0, express_1.default)();
const port = 8086;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    //console.log(diContainer);
    next();
});
// Define a route
app.get('/v0', (req, res) => {
    res.send('Welcome to ABIE Financial service');
});
app.get('/favicon.ico', (req, res) => {
    // Send a custom response or an empty 204 (No Content) response
    res.status(204).end();
});
// auth routes
app.use('/v0/todos', todoRoutes_1.default);
//error
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).json({
        message: err.message,
        code: err.code,
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
