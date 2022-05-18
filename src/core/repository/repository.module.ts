import { RepositoryService } from './repository.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [RepositoryService],
})
export class RepositoryModule {}