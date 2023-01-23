import { Todo } from '../../todo/todo.entity';
import { AddTodoDto } from '../../todo/dto/add-todo.dto';

export interface TodoInterface {
    id: string;
    todo: string;
    description: string | null;
    isImportant: boolean;
    isFinished: boolean;
    expiresIn: Date;
    createdAt: Date;
}

export type AddTodoRequest = AddTodoDto;

export type AddTodoResponse = {
    isSuccess: boolean,
    message: string,
};

export type ListTodosResponse = {
    isSuccess: true,
    todos: Todo[],
} | {
    isSuccess: false,
    message: string,
}

export type RemoveTodoResponse = AddTodoResponse;

export type MarkTodoResponse = {
    isSuccess: true,
} | {
    isSuccess: false,
    message: string,
};