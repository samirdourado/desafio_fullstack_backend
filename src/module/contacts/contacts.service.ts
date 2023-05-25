import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repositories';

@Injectable()
export class ContactsService {
    constructor(private contactRepository: ContactsRepository) {}

    async create(createContactDto: CreateContactDto) {
        const contact = await this.contactRepository.create(createContactDto)
        return contact
    }

    async findAll(group: string | undefined) {
        return this.contactRepository.findAll(group)
    }

    async findOne(id: string) {
        const findContact = await this.contactRepository.findOne(id)
        return findContact
    }
}
