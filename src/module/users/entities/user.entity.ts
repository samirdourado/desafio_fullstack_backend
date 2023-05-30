import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

const date = Date.now();
const formatDate = date+"";

export class User {
  readonly id: string;
  name: string;
  phone: string;
  email: string;

  @Exclude()
  password: string;
  readonly registredAt: string;

  constructor() {
    this.id = randomUUID();
    this.registredAt = formatDate;
  }
}
