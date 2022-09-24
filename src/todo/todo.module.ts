import { forwardRef, Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { UserModule } from '../user/user.module';

@Module({
    imports: [forwardRef(() => UserModule)],
    controllers: [TodoController],
    providers: [TodoService],
})
export class TodoModule {}
