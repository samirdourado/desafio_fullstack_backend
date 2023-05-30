import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";
import { ContactType } from "../entities/contact.entity";
import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
    
    // @IsString()
    // @IsNotEmpty()
    // user_id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    phone: string | null;

    @IsEmail()
    @IsNotEmpty()
    email: string | null;
    
    registredAt: Date;

    @IsString()    
    @IsOptional()
    @ApiProperty()
    type: ContactType
}
