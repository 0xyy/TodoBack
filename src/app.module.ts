import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MailModule } from './mail/mail.module';

@Module({
    imports: [DatabaseModule, MailModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
