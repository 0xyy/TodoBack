import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { AuthLoginRequest, AuthLoginResponse, AuthLogoutResponse } from '../types';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('/login')
    async login(
        @Body() req: AuthLoginRequest,
        @Res() res: Response,
    ): AuthLoginResponse {
        return null;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('logout')
    async logout(
        @UserObj() user: User,
        @Res() res: Response,
    ): AuthLogoutResponse {
        return null;
    }
}
