import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('')
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto)
  }

  @Get('')
  findAll(@Query('group') group: string | undefined) {
    return this.contactsService.findAll(group)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id)
  }

}
