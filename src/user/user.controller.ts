import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';
import { RegisterResponse } from '../types';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Post('/register')
    async userRegister(
        @Body() registerDto: RegisterDto,
    ): Promise<RegisterResponse> {
        return this.userService.register(registerDto);
    }
}
