import { Contains, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
    @IsString()
    @Contains('@')
    @MinLength(4)
    @MaxLength(30)
    email: string;

    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name: string;

    @IsString()
    @MinLength(6)
    @MaxLength(30)
    password: string;

    @IsString()
    @MinLength(6)
    @MaxLength(30)
    repeatedPassword: string;
}