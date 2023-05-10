import { CfnOutput} from 'aws-cdk-lib'
import { Construct } from 'constructs'

export const isProd = () => {
    return process.env.NODE_ENV==="prod"
}

export const createOutput = (scope: Construct, name: string, value: string) => {
    new CfnOutput(scope, `${name}Output`, {
        value: value,
        exportName: `${process.env.PROJECT_NAME}:${isProd()?'PROD:':'DEV:'}${name}`
    } )
}

export const keyMap = <O extends {[key: string]: any}>(obj: O, mapFn: (key: string)=>string): {[key:string]: O extends {[key: string]: infer P}? P : never} => 
    Object.fromEntries(
        Object.keys(obj).map((key: string) => {
            return [mapFn(key), obj[key]]
        })
    )

export type Override<T extends object, K extends { [P in keyof T]?: any }> = Omit<T, keyof K> & K;