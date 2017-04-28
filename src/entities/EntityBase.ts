import { ICreatedBy } from '../ICreatedBy';
import { EntityMinBase } from './EntityMinBase';
import { IEntityBase, IEntityBaseArgs } from './IEntityBase';

export class EntityBase<TUser> extends EntityMinBase implements IEntityBase<TUser> {

    createdBy: ICreatedBy<TUser>;
    dtChanged: Date;

    constructor(entity: IEntityBaseArgs<TUser>) {
        if (!entity)
            entity = {};

        super(entity);

        this.createdBy = entity.createdBy;
        this.dtChanged = entity.dtChanged;
    }
}
