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
    async userLogin(
        @Body() req: AuthLoginRequest,
        @Res() res: Response,
    ): AuthLoginResponse {
        return this.authService.login(req, res);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/logout')
    async userLogout(
        @UserObj() user: User,
        @Res() res: Response,
    ): AuthLogoutResponse {
        return this.authService.logout(user, res);
    }
}
