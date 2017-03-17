import { ICreatedBy } from './ICreatedBy';
import { IEntityMinBase, IEntityMinBaseArgs } from './IEntityMinBase';

export interface IEntityBase extends IEntityMinBase {
    createdBy?: ICreatedBy;
    dtChanged?: Date;
}

export interface IEntityBaseArgs extends IEntityMinBaseArgs {
    createdBy?: ICreatedBy;
    dtChanged?: Date;
}
