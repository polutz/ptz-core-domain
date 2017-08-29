import { Collection, Db } from 'mongodb';
import { IEntityMinBase } from './IEntityMinBase';

type ICreateRepository = <T>(url: string, collectionName: string) => Promise<IBaseRepository<IEntityMinBase & T>>;

type IGetDbCollection = <T>(db: Db, collectionName: string) => Collection<T>;

interface IBaseRepository<T> {
    collectionName: string;
    db: Db;

    getDbCollection(db: Db, collectionName: string): Collection<T & IEntityMinBase>;

    save(entity: T & IEntityMinBase): Promise<T & IEntityMinBase>;

    getById(id: string): Promise<T & IEntityMinBase>;

    getByIds(ids: string[]): Promise<T[] & IEntityMinBase[]>;

    find(query: any, options: { limit: number }): Promise<T[] & IEntityMinBase[]>;
}
