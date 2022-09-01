import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterResponse } from '../types';
import { User } from './user.entity';

@Injectable()
export class UserService {
    async register({ name, email, password, repeatedPassword }: RegisterDto): Promise<RegisterResponse> {
        if (name.length < 3 || name.length > 30) {
            return {
                isSuccess: false,
                message: 'Name must not be less than 3 and more than 30 characters.',
            };
        }

        if (email.length < 4 || email.length > 30) {
            return {
                isSuccess: false,
                message: 'Email must not be less than 4 and more than 30 characters.',
            };
        }

        if (password.length < 6 || password.length > 30 || repeatedPassword.length < 6 || repeatedPassword.length > 30) {
            return {
                isSuccess: false,
                message: 'Password must not be less than 6 and more than 30 characters.',
            };
        }

        if (password !== repeatedPassword) {
            return {
                isSuccess: false,
                message: 'Passwords are not the same.',
            };
        }

        const user = new User();

        return {
            isSuccess: true,
            email,
            name,
        };
    }
}
