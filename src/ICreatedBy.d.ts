export interface ICreatedBy<TUser> {
    dtCreated: Date;
    ip: string;
    user: TUser;
}
