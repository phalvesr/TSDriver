import { PassThrough } from "node:stream"

export interface IDriverParameters<T> {
    url: string,
    browserPath?: string,
    pageExecutionLambda: () => T,
};

export interface ILoginInstagram {
    username: string,
    password: string
};