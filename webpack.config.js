/* eslint-disable no-undef */
import { resolve as _resolve } from 'path';

export const entry = _resolve(__dirname, './src/index.ts');
export const output = {
    filename: 'bundle.js',
    path: _resolve(__dirname, './dist'),
    publicPath: '/',
};
export const resolve = {
    extensions: ['.js', '.ts'],
};
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ],
};
export const mode = 'development';