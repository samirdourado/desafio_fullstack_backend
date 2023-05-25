import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength } from "class-validator";

export class CreateContactDto {
    
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    phone: string | null;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    email: string | null;

    registredAt: Date;
}