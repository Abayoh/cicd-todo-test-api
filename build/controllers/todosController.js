"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const todoSchema_1 = __importDefault(require("./todoSchema"));
// GET /todos
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todoSchema_1.default.find();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.getTodos = getTodos;
// POST /todos
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const todo = new todoSchema_1.default({
            title,
            description,
        });
        yield todo.save();
        res.status(201).json(todo);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.createTodo = createTodo;
// PUT /todos/:id
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo = yield todoSchema_1.default.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.updateTodo = updateTodo;
// DELETE /todos/:id
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedTodo = yield todoSchema_1.default.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
exports.deleteTodo = deleteTodo;
