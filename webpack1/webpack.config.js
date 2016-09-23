var webpack = require('webpack')//������ʵ�����õĲ��


module.exports = {
    entry: "./app/entry.js",//Ψһ������ļ�
    output: {//������Ĵ���ļ�
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [//���ص�ģ�飬��������
            {
                test: /\.css$/, //����ƥ����Ҫ������ļ�
                loader: "style!css!postcss", //���ص�loader
                include: '',//�ֶ���Ӱ������ļ�����ѡ
                exclude: '',//�ֻ����β�������ļ�����ѡ
                query: '',//�ṩ��������ã���ѡ
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//��webpack��module���ֵ�loaders��������ü���
                query: {
                    presets: ['es2015', 'react'] //��������ļ�
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
    plugins: [//��Ӳ����webpack������һЩ���ò����Ҳ��ͨ�� npm ��װ���������
        new webpack.BannerPlugin('This file is created by aji'),// Banner ��Ӳ��
        new webpack.optimize.UglifyJsPlugin({//ѹ���ļ�
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],
    devtool: 'eval-source-map',//��������Source Maps��ѡ����ʵ�ѡ���ѡ�������ڵ��ԣ������http://www.jianshu.com/p/42e11515c10f#
    devServer: {
        contentBase: "./dist",//���ط����������ص�ҳ�����ڵ�Ŀ¼
        colors: true,//�ն���������Ϊ��ɫ
        historyApiFallback: true,//����ת���ʺϵ�ҳģʽ��ʹ�ã�����ָ��Ϊ index.html
        inline: true,//ʵʱˢ��ҳ�棬���иĶ���ʱ��
        port: 8080,//Ĭ��Ϊ 8080���ɸ��������
    },
    postcss: [
        require('autoprefixer')//���øò�����Զ���ӳ���ǰ׺
    ]
};