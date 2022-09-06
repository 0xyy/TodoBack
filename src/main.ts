import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            transformOptions: { enableImplicitConversion: true },
            transform: true,
            exceptionFactory: (errors: ValidationError[]) => {
                return new BadRequestException('Validation error.');
            },
        }),
    );

    app.use(cookieParser());

    await app.listen(3001);
}
bootstrap();
