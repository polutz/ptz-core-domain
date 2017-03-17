import EntityMinBase from './EntityMinBase';
import { ICreatedBy } from './ICreatedBy';
import { IEntityBase, IEntityBaseArgs } from './IEntityBase';

export default class EntityBase extends EntityMinBase implements IEntityBase {

    createdBy: ICreatedBy;
    dtChanged: Date;

    constructor(entity: IEntityBaseArgs) {
        if (!entity)
            entity = {};

        super(entity);

        this.createdBy = entity.createdBy;
        this.dtChanged = entity.dtChanged;
    }
}
