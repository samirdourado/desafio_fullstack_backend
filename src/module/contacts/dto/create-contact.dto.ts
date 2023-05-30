import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";
import { ContactType } from "../entities/contact.entity";
import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {    

    @ApiProperty({
        description: 'Nome completo do contato',
        type: String,
        default: "Primeiro contato",
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Telefone do contato',
        type: String,
        default: "11 912345678",
    })
    @IsString()
    @IsNotEmpty()
    phone: string | null;

    @ApiProperty({
        description: 'Email do contato',
        type: String,
        default: "contato@mail.com",
      })
    @IsEmail()
    @IsNotEmpty()
    email: string | null;
    
    @ApiProperty({
        description: 'Data de Registro Automática',
        type: String,
        default: "Mon May 29 2023 14:30:24 GMT-0300 (GMT-03:00)",
      })
    registredAt: string;

    @ApiProperty({
        description: 'Tipos de Contato por Enum',
        type: String,
        default: "Valor Padrão Main. Pode-se utilizar Main, House, Mobile, Work, ou Others",
    })
    @IsString()    
    @IsOptional()
    type: ContactType
}
