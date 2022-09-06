import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    async create({ todo, description, isImportant, expiresIn }: CreateTodoDto) {
        if (!todo.length || todo.length < 30) {
            return {
                isSuccess: false,
                message: '',
            }
        }

        if (description && description.length > 255) {
            return {
                isSuccess: false,
                message: '',
            }
        }

        const newTodo = new Todo();

        newTodo.todo = todo;
        newTodo.description = description;
        newTodo.isImportant = isImportant
        newTodo.expiresIn = expiresIn;

        await newTodo.save();
    }
}
