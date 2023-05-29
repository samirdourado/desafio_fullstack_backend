import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repositories/users.repositories';
import { UsersInMemoryRepository } from './repositories/in-memory/user.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
      // useClass: UsersInMemoryRepository
    }
  ],
  // exports: [UsersRepository]
})
export class UsersModule {}
