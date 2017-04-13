import EntityMinBase from './EntityMinBase';
import { ICreatedBy } from './ICreatedBy';
import { IEntityBase, IEntityBaseArgs } from './IEntityBase';

export default class EntityBase<TUser> extends EntityMinBase implements IEntityBase<TUser> {

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
