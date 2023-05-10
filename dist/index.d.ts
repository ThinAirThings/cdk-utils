import { Construct } from 'constructs';
export declare const isProd: () => boolean;
export declare const createOutput: (scope: Construct, name: string, value: string) => void;
export declare const keyMap: <O extends {
    [key: string]: any;
}>(obj: O, mapFn: (key: string) => string) => {
    [key: string]: O extends {
        [key: string]: infer P;
    } ? P : never;
};
export type Override<T extends object, K extends {
    [P in keyof T]?: any;
}> = Omit<T, keyof K> & K;
