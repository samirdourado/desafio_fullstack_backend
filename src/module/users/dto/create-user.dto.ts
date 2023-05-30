import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    default: "Samir Dourado",
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Número de telfone',
    type: String,
    default: "11 912345678",
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    default: "samir@mail.com",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    default: "12345678",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value}: { value: string}) => hashSync(value, 10), {
    groups: ['transform']
  })
  password: string;
   
  @ApiProperty({
    description: 'Data de Registro Automática',
    type: String,
    default: "Mon May 29 2023 14:30:24 GMT-0300 (GMT-03:00)",
  })
  registredAt: string;
}
