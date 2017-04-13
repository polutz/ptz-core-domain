import { ICreatedBy } from './ICreatedBy';

interface IAppFuncArgs<TUser> {
    createdBy: ICreatedBy<TUser>;
}
