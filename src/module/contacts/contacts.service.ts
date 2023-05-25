import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/Create-contact.dto';

@Injectable()
export class ContactsService {
    create(data: CreateContactDto ){
        return { data };
    }
}
// @Injectable()
// export class ContactsService {
//     create(fullname: string, email: string, phone: string, registredAt: Date){
//         return { fullname, email, phone, registredAt  };
//     }
// }
