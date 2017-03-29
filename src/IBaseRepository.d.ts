import { IEntityMinBase } from './IEntityMinBase';

interface IBaseRepository<T> {
    collectionName: string;
    db;

    getDbCollection();

    save(entity: IEntityMinBase): Promise<IEntityMinBase>;

    getById(id: string): Promise<IEntityMinBase>;

    getByIds(ids: string[]): Promise<IEntityMinBase[]>;

    find(query: any, options: { limit: number }): Promise<IEntityMinBase[]>;
}
