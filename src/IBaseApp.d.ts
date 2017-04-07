export interface IBaseApp {
    log(...args: any[]): void;
}

export interface IBaseAppArgs {
    log?: (...args: any[]) => void;
}
