import { ICreatedBy } from './ICreatedBy';
import { IEntityMinBase, IEntityMinBaseArgs } from './IEntityMinBase';

export interface IEntityBase<TUser> extends IEntityMinBase {
    createdBy?: ICreatedBy<TUser>;
    dtChanged?: Date;
}

export interface IEntityBaseArgs<TUser> extends IEntityMinBaseArgs {
    createdBy?: ICreatedBy<TUser>;
    dtChanged?: Date;
}
