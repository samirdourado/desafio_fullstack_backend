import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contacts.repositories';

@Injectable()
export class ContactsService {
    constructor(private contactRepository: ContactsRepository) {}

    async create(createContactDto: CreateContactDto, userId: string) {
        const contact = await this.contactRepository.create(createContactDto, userId)
        return contact
    }

    async findAll(group: string | undefined) {
        return this.contactRepository.findAll(group)
    }

    async findOne(id: string) {
        const findContact = await this.contactRepository.findOne(id)
        if(!findContact) {
            throw new NotFoundException('Contact not found')
        }
        return findContact
    }

    
}
