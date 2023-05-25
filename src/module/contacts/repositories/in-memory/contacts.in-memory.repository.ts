import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repositories';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
    private database: Contact[] = [];

    async create(data: CreateContactDto): Promise<Contact> {
        const newContact = new Contact();
        Object.assign(newContact, {
            ...data
        });

        this.database.push(newContact);

        return newContact;
    }
    async findOne(id: string): Promise<Contact> {
        const contact = this.database.find(contato => contato.id === id);
        return contact
    }

    private groupBy(contacts: Contact[], key: string) {
        return contacts.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur)
            return acc
        }, {})
    }

    async findAll(group: string): Promise<object | Contact[]> {
        if(group) {
            return this.groupBy(this.database, group);
        }
        return this.database
    }
}
