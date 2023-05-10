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