var webpack = require('webpack')//引入以实现内置的插件

module.exports = {
    entry: "./app/entry.js",//唯一的入口文件
    output: {//输出最后的打包文件
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [//加载的模块，用来编译
            {
                test: /\.css$/,                 //正则匹配需要处理的文件
                loader: "style!css!postcss",    //加载的loader，此为顺序加载： style.loader/css.loader/postcss.loader
                include: '',                    //手动添加包含的文件，可选
                exclude: '',                    //手机屏蔽不需求的文件，可选
                query: '',                      //提供额外的设置，可选
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',                    //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015', 'react']    //编译此类文件
                }
            },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [//添加插件，webpack内置了一些常用插件，也可通过 npm 安装第三方插件
        new webpack.BannerPlugin('This file is created by aji'),// Banner 添加插件
        new webpack.optimize.UglifyJsPlugin({//压缩文件
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项，此选择有利于调试，详见：http://www.jianshu.com/p/42e11515c10f#
    devServer: {
        contentBase: "./dist",      //本地服务器所加载的页面所在的目录
        colors: true,               //终端中输出结果为彩色
        historyApiFallback: true,   //不跳转，适合单页模式的使用，所有指向都为 index.html
        inline: true,               //实时刷新页面，当有改动的时候
        port: 8083,                 //默认为 8080，可根据需求改
    },
    postcss: [
        require('autoprefixer')     //调用该插件，自动添加厂家前缀
    ]
};