import { Ilog } from 'ptz-log';

export interface IBaseApp {
    log: Ilog;
}

export interface IBaseAppArgs {
    log?: Ilog;
}
