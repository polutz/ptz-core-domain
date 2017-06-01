import { ILog } from 'ptz-log';

export interface IBaseApp {
    log: ILog;
}

export interface IBaseAppArgs {
    log?: ILog;
}
