const path = require('path');
// const { merge } = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js','.ts'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    // plugins: [
    //     new DotenvWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, './src/index.html'),
    //         filename: 'index.html',
    //     }),
    //     new CleanWebpackPlugin(),
    // ],
};

// module.exports = ({ mode }) => {
//     const isProductionMode = mode === 'prod';
//     const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

//     return merge(baseConfig, envConfig);
// };
