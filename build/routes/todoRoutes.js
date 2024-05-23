"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosController_1 = require("../controllers/todosController");
const router = express_1.default.Router();
// GET /todos
router.get('/todos', todosController_1.getTodos);
// POST /todos
router.post('/todos', todosController_1.createTodo);
// PUT /todos/:id
router.put('/todos/:id', todosController_1.updateTodo);
// DELETE /todos/:id
router.delete('/todos/:id', todosController_1.deleteTodo);
exports.default = router;