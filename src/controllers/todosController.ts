import { Request, Response } from 'express';
import Todo from './todoSchema'

// GET /todos
export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// POST /todos
export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({
            title,
            description,
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// PUT /todos/:id
export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// DELETE /todos/:id
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};