import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the Todo document
interface ITodo extends Document {
    title: string;
    description: string;
    completed: boolean;
}

// Define the Todo schema
const TodoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

// Create and export the Todo model
export default mongoose.model<ITodo>('Todo', TodoSchema);