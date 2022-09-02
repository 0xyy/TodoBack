import { Contains, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthLoginDto {
    @IsString()
    @Contains('@')
    @MinLength(4)
    @MaxLength(30)
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(255)
    password: string;
}