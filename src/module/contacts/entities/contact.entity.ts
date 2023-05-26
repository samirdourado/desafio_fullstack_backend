import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

const date = Date.now();
const fDate = new Date(date);

export class Contact {
  readonly id: string;
  user_id: string;
  name: string;
  phone: string | null;
  email: string | null;
  type: string
  readonly registredAt: Date;

  constructor() {
    this.id = randomUUID();
    this.registredAt = fDate;
  }
}

// export enum ContactType {
//   Main = 'Main',
//   Hose = 'House',
//   Mobile = 'Mobile',
//   Work = 'Work',
//   Others = 'Others'
// }
