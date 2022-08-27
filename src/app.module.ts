import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
    imports: [DatabaseModule, MailModule, AuthModule, UserModule, TodoModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
