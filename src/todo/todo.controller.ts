import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dto/add-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { AddTodoResponse, ListTodosResponse, MarkTodoResponse, RemoveTodoResponse } from '../types';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('/')
    async addTodo(
        @UserObj() user: User,
        @Body() createTodoDto: AddTodoDto,
    ): Promise<AddTodoResponse> {
        return this.todoService.add(user, createTodoDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/')
    async listAllUserTodos(
        @UserObj() user: User,
    ): Promise<ListTodosResponse> {
        return this.todoService.listAll(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch('/:id')
    async markTodo(
        @UserObj() user: User,
        @Param('id') id: string,
    ): Promise<MarkTodoResponse> {
        return this.todoService.mark(user, id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    async removeTodo(
        @UserObj() user: User,
        @Param('id') id: string,
    ): Promise<RemoveTodoResponse> {
        return this.todoService.remove(user, id);
    }
}
