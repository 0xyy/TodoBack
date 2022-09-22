import { IsBoolean, IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

export class AddTodoDto {
    @IsString()
    @MaxLength(30)
    todo: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    description: string | null;

    @IsBoolean()
    isImportant: boolean;

    @IsDate()
    expiresIn: Date;
}