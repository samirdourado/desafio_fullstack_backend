import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value}: { value: string}) => hashSync(value, 10), {
    groups: ['transform']
  })
  password: string;
   
  registredAt: string;
}
