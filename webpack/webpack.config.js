const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { type } = require('os')
const { resolve } = require('path')

module.exports = {
    //webpack解析的入口文件
    entry: './src/index.js',
    // 文件输出位置
    output: {
        // webpack打包的文件名字
        filename: 'bundle.js',
        // webpack打包的文件路径
        path: path.resolve(__dirname, 'dist')
    },
    // lorder配置属性
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 将css输出到页面</head>标签
                    // 'style-loader',
                    // 将样式文件输出为css文件
                    MiniCssExtractPlugin.loader,
                    // 解析import语法
                    'css-loader',
                    // webpack和postcss的桥梁
                    // postcss为不同的浏览器适配css样式
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 编译成css文件
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                // 打包import引入的图片文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于8192的文件，使用base64文件处理
                            limit: 8192,
                            // html-loader处理的图片默认是commonjs模块方式，
                            // url-loader处理的时候需要关闭es6
                            esModule: false,
                            // 输出目录dist/images/
                            outputPath: 'images'
                        }
                    }
                ],
                //在大于8192的情况下，不会同时生成base和图片文件
                type: 'javascript/auto',

            },
            {
                test: /\.html$/,
                // 处理html首页引入的图片文件
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        // 默认输出一个空的html文件，包含打包后的bundle.js文件
        new HtmlWebpackPlugin({
            // 指定一个html文件，作为默认输出的html文件
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            // 替换默认的输出文件位置和文件名字
            filename: 'css/main.css'
        })
    ],
    mode: 'development',
    devServer: {
        // webpack打包文件的路径
        static: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
}
