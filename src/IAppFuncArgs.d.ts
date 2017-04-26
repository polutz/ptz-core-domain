import { ICreatedBy } from './ICreatedBy';

interface IAppFuncArgs<TUser> {
    authedUser: ICreatedBy<TUser>;
}
