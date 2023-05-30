import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

const date = Date.now();
const formatDate = new Date(date);

export class Contact {
  readonly id: string;
  user_id?: string;
  name: string;
  phone: string;
  email: string;
  type: string | null;
  readonly registredAt: string;

  constructor() {
    this.id = randomUUID();
    this.registredAt = formatDate+"";
    this.type = ContactType.Main;
  }
}

export enum ContactType {
  Main = 'Main',
  House = 'House',
  Mobile = 'Mobile',
  Work = 'Work',
  Others = 'Others'
}
