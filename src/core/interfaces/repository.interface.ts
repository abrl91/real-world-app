// @todo: change any to dto type
export interface IRepository<T, ID> {
    findAll: () => Promise<T[]>;
    findOne: (id: ID) => Promise<T>;
    create: (data: any) => Promise<ID>; 
    update: (id: ID, data: any) => Promise<T>;
    delete: (id: ID) => Promise<boolean>
}