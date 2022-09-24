import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dto/add-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { AddTodoResponse, RemoveTodoResponse } from '../types';

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
    async getAllUserTodo(
        @UserObj() user: User,
    ) {
        return null;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    async getOneTodo(
        @Param('id') id: string,
    ) {
        return null;
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
