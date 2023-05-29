import { PartialType } from '@nestjs/mapped-types';
import { CreateContactDto } from './create-contact.dto';

export class UpdatecontactDto extends PartialType(CreateContactDto) {}
