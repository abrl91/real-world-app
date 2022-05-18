import { IRepository } from '../interfaces/repository.interface';
import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RepositoryService<T, ID> implements IRepository<T, ID> {
    constructor(private prisma: PrismaService) {}

    findAll(): Promise<T[]> {
        throw Error('not implemented');
    }

    findOne(id: ID): Promise<T> {
        throw Error('not implemented');
    }

    create(data: any): Promise<ID> {
        throw Error('not implemented');
    }

    update(id: ID, data: any): Promise<T> {
        throw Error('not implemented');
    }

    delete(id: ID): Promise<boolean> {
        throw Error('not implemented');
    }
}