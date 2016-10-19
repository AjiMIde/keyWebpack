## key Webpack

My webpack learn , difficult and heavy


##### 什么是Webpack：

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），
并将其打包为合适的格式以供浏览器使用。

##### 优点：

1. 模块化的解决方案
2. 编译coffeeScript/TypeScript/Less/Sass
3. 有同步加载和异步加载两种
4. 支持 common js AMD 规范
5. 大型项目的模块化、按需要加载、根据依赖
6. 异步 I/O 和多层缓存



## Common Command：

1. 全局安装 webpack
> npm install webpack -g

2. 安装 webpack , webpack-dev-server(开发服务器、监听代码、自动刷新) 依赖
> npm install webpack webpack-dev-server --save-dev

3. 安装 css-loader style-loader json-loader依赖
> npm install css-loader style-loader json-loader --save-dev

4. 安装 babel 编译 ES6、ES7、JSX 等浏览器无法识别的 js
> npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

5. 安装 postcsss-loader autoprefixer 支持不同 css 样式添加厂家前缀
> npm install --save-dev postcss-loader autoprefixer

6. 执行打包命令
```
> webpack                                        执行打包命令<br>
> webpack ./entry.js bundle.js                   打包对象<br>
> webpack --progress --colors                    打包（颜色与进度）<br>
> webpack --config  XXXX.js                      使用另一份配置文件xxxx.js打包，适合不同环境的打包度<br>
```

7. 其他命令
```
> webpack -p                                     压缩混淆脚本，这个非常非常重要！<br>
> webpack -d                                     生成map映射文件，告知哪些模块被最终打包到哪里了<br>
> webpack -w                                     提供watch方法，实时进行打包更新<br>
> webpack --profile                              输出性能数据，可以看到每一步的耗时<br>
> webpack --display-modules                      默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块<br>
> webpack-dev-server --progress --colors --watch --inline
打包（监听文件变化并随时打包）：会缓冲已打包好的模块，以便当模块没有改变的时候，高速提取未改变模块以加快编译速度
	    要在webpack-config.js 里设置相关端口等。此操作能打包并运行内置服务器。可在 package.json中设置映射命令以方便
```
8. 其他安装

* 安装 jquery 并打包引用：
> npm install --save jquery babel-polyfill <br>
> import $ from 'jquery'

* 安装 图片压缩并打包引用 ：
> npm install image-webpack-loader --save-dev
```
loaders:[
  {
    test: /\.(png|jpg)$/,
    loaders: [
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  }
]
```

* 安装 url-loader 预处理图片：
> npm install url-loader --save-dev
```
loaders:[
  {
    test: /\.(png|jpg)$/,
    loader: "url-loader?limit=8192"
  }
  // 添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
  //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下
]
```

* 安装 less-loader 处理 less 文件：
> npm install less-loader --save-dev
```
loaders:[
    loaders:['style-loader', 'css-loader','less-loader']
]
```





##### Common NPM Config

1. 在 npm package.json 文件中加入自定义的 scripts 一些命令，以方便在控制台调用，如：
```
  "scripts": {
    "build": "webpack --progress --colors", //显示进程与颜色
    "builddev":"webpack-dev-server --progress --colors --inline --watch" //--watch 自动编译、 --inline 自动刷新
    "builddetails":"webpack-dev-server --display-error-details"//打印错误的详细信息
    "dev":"webpack-dev-server" //使用开发服务器模式，此模式的配置依赖于 webpack.config.js 中的 devServer 配置
  },
```
> **执行命令为：--npm run task-name**






