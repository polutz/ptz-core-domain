import { Collection, Db } from 'mongodb';
import { IEntityMinBase } from './IEntityMinBase';

interface IBaseRepository<T> {
    collectionName: string;
    db: Db;

    getDbCollection(db: Db, collectionName: string): Collection<T & IEntityMinBase>;

    save(entity: T & IEntityMinBase): Promise<T & IEntityMinBase>;

    getById(id: string): Promise<T & IEntityMinBase>;

    getByIds(ids: string[]): Promise<T[] & IEntityMinBase[]>;

    find(query: any, options: { limit: number }): Promise<T[] & IEntityMinBase[]>;
}
