import { Injectable } from "@nestjs/common";
import { ContactsRepository } from "../contacts.repositories";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { Contact } from "../../entities/contact.entity";
import { PrismaService } from "src/database/prisma.service";
import { UpdatecontactDto } from "../../dto/update-contact.dto";
import { plainToInstance } from "class-transformer";


@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
    constructor(private prisma: PrismaService) {}
    
    async create(data: CreateContactDto, userId: string): Promise<Contact> {
        const contact = new Contact()
        Object.assign(contact, {
            ...data
        })

        const newContact = await this.prisma.contact.create({
            data: {
                id: contact.id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                type: contact.type,
                registredAt: contact.registredAt,
                user_id: userId
            }
        });

        // return newContact;
        return plainToInstance(Contact, newContact);
    }
    async findOne(id: string): Promise<Contact> {
        const contact = await this.prisma.contact.findUnique({
            where: {id}
        });

        return contact;
    }
    private groupBy(contacts: Contact[], key: string) {
        return contacts.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur)
            return acc
        }, {})
    }
    async findAll(group: string): Promise<Object | Contact> {
        const contacts = await this.prisma.contact.findMany()
        if(group) {
            return this.groupBy(contacts, group)
        }

        return plainToInstance(Contact, contacts)
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    // async update(id: string, data: UpdatecontactDto): Promise<Contact> {
    //     const contact = await this.prisma.contact.update({
    //         where: {id},
    //         data: {...data}
    //     })

    //     return contact
    // }
}