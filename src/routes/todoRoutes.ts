import express, { Request, Response } from 'express';

import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todosController';

const router = express.Router();

// GET /todos
router.get('/', getTodos);

// POST /todos
router.post('/', createTodo);

// PUT /todos/:id
router.put('/:id', updateTodo);

// DELETE /todos/:id
router.delete('/:id', deleteTodo);

export default router;
