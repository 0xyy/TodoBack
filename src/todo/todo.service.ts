import { Inject, Injectable } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { Todo } from './todo.entity';
import { User } from '../user/user.entity';
import { isBeforeToday } from '../utils/is-before-today';
import { UserService } from '../user/user.service';
import { AddTodoResponse, ListTodosResponse, MarkTodoResponse, RemoveTodoResponse } from '../types';
import { dataSource } from '../config/config-database';

@Injectable()
export class TodoService {
    constructor(
        @Inject(UserService) private userService: UserService,
    ) {}

    private async checkIfUserExist(user: User) {
        if (!(await this.userService.userExist(user.id))) {
            return {
                isSuccess: false,
                message: 'User does not exist.',
            };
        }
    }

    async add(user: User, { todo, description, isImportant, expiresIn }: AddTodoDto): Promise<AddTodoResponse> {
        try {
            await this.checkIfUserExist(user);

            if (!todo.length || todo.length > 30) {
                return {
                    isSuccess: false,
                    message: 'Task name must not be empty and less than 30 characters.',
                };
            }

            if (description && description.length > 255) {
                return {
                    isSuccess: false,
                    message: 'Description must not be empty and less than 255 characters.',
                };
            }

            if (typeof isImportant !== 'boolean') {
                return {
                    isSuccess: false,
                    message: 'Importance of the task must be type of boolean.',
                };
            }

            if (isBeforeToday(expiresIn)) {
                return {
                    isSuccess: false,
                    message: 'The expiration date of the task cannot be earlier than the current time.',
                };
            }

            const newTodo = new Todo();

            newTodo.todo = todo;
            newTodo.description = description ? description : null;
            newTodo.isImportant = isImportant;
            newTodo.expiresIn = expiresIn;
            newTodo.user = user;

            await newTodo.save();

            return {
                isSuccess: true,
                message: 'Todo has been added successfully.',
            };
        } catch (e) {
            return {
                isSuccess: false,
                message: e.message,
            };
        }
    }

    async listAll(user: User): Promise<ListTodosResponse> {
        try {
            await this.checkIfUserExist(user);

            const todos = await dataSource
                .getRepository(Todo)
                .createQueryBuilder('todo')
                .where('todo.userId = :userId', { userId: user.id })
                .getMany();

            return {
                isSuccess: true,
                todos,
            };
        } catch (e) {
            return {
                isSuccess: false,
                message: e.message,
            };
        }
    }

    async mark(user: User, todoId: string): Promise<MarkTodoResponse> {
        try {
            await this.checkIfUserExist(user);

            const todo = await Todo.findOne({
                where: {
                    id: todoId,
                },
                relations: ['user'],
            });

            if (!todo) {
                return {
                    isSuccess: false,
                    message: 'You cannot mark todo that does not exist.',
                };
            }

            if (user.id !== todo.user.id) {
                return {
                    isSuccess: false,
                    message: 'You cannot mark todo of the other user.',
                };
            }

            todo.isFinished = !todo.isFinished;
            await todo.save();

            return { isSuccess: true };
        } catch (e) {
            return {
                isSuccess: false,
                message: e.message,
            };
        }
    }

    async remove(user: User, todoId: string): Promise<RemoveTodoResponse> {
        try {
            await this.checkIfUserExist(user);

            const todo = await Todo.findOne({
                where: {
                    id: todoId,
                },
                relations: ['user'],
            });

            if (!todo) {
                return {
                    isSuccess: false,
                    message: 'You cannot delete todo that does not exist.',
                };
            }

            if (user.id !== todo.user.id) {
                return {
                    isSuccess: false,
                    message: 'You cannot delete todo of the other user.',
                };
            }

            await todo.remove();

            return {
                isSuccess: true,
                message: 'Todo removed successfully.',
            };
        } catch (e) {
            return {
                isSuccess: false,
                message: e.message,
            };
        }
    }
}
