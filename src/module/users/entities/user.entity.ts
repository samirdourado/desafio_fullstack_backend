import { randomUUID } from 'node:crypto';

const date = Date.now();
const fDate = new Date(date);

export class User {
  readonly id: string;
  fullname: string;
  phone: string;
  email: string;
  password: string;
  readonly registredAt: Date;

  constructor() {
    this.id = randomUUID();
    this.registredAt = fDate;
  }
}
