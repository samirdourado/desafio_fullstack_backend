import { IsString, IsNotEmpty, IsEmail, IsOptional, MinLength, IsEnum } from "class-validator";
// import { ContactType } from "../entities/contact.entity";
// import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
    
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

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

    // @IsString()
    // @IsNotEmpty()    
    // @IsOptional()
    // @IsEnum()
    // @ApiProperty({ enum: ['Main', 'House', 'Mobile', 'Work', 'Others']})
    // type: ContactType
}

// function ApiProperty(arg0: { enum: string[]; }): (target: CreateContactDto, propertyKey: "type") => void {
//     throw new Error("Function not implemented.");
// }
