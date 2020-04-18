const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    // Webpack 在寻找相对路径的文件时会以 context 为根目录，context 默认为执行启动 Webpack 时所在的当前工作目录
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]',
            //         outpath: 'img/'
            //     }
            // },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 4000
                }
            },
            {
                test: /\.styl(us)?$/,
                loader: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "todolist",
            template: 'index.html',
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}

