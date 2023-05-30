import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repositories';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdatecontactDto } from '../../dto/update-contact.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsInMemoryRepository implements ContactsRepository {
    
    private database: Contact[] = [];

    async create(data: CreateContactDto, userId): Promise<Contact> {
        const newContact = new Contact();
        Object.assign(newContact, {
            ...data,
            user_id: userId
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

    update(id: string, data: UpdatecontactDto ): Contact | Promise<Contact> {
        const contactIndex = this.database.findIndex((contact) => contact.id === id);
        this.database[contactIndex] = {
            ...this.database[contactIndex],
            ...data
        };

        return this.database[contactIndex]
    }   

    delete(id: string): void | Promise<void> {
        const contact = this.database.findIndex((contact) => contact.id === id);
        this.database.splice(contact, 1)
    }
}
