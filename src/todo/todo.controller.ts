import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddTodoDto } from './dto/add-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Post('/add')
    async addTodo(
        @UserObj() user: User,
        @Body() createTodoDto: AddTodoDto,
    ) {
        return this.todoService.add(user, createTodoDto);
    }

    @Get('/')
    async getAllTodo() {
        return null;
    }

    @Get('/:id')
    async getOneTodo(
        @Param('id') id: string,
    ) {
        return null;
    }
}
