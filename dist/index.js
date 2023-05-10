"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyMap = exports.createOutput = exports.isProd = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const isProd = () => {
    return process.env.NODE_ENV === "prod";
};
exports.isProd = isProd;
const createOutput = (scope, name, value) => {
    new aws_cdk_lib_1.CfnOutput(scope, `${name}Output`, {
        value: value,
        exportName: `${process.env.PROJECT_NAME}:${(0, exports.isProd)() ? 'PROD:' : 'DEV:'}${name}`
    });
};
exports.createOutput = createOutput;
const keyMap = (obj, mapFn) => Object.fromEntries(Object.keys(obj).map((key) => {
    return [mapFn(key), obj[key]];
}));
exports.keyMap = keyMap;
