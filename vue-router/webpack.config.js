//由于webpack是基于node构建的，所以在webpack的配置文件中任何合法的node语法都是支持的
//1. 定义路径
var path = require('path')

//3. 引入html-webpack-plugin
var htmlWebpackPlugin=require('html-webpack-plugin')
 
//2. 配置自动打包的配置
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//配置入口文件
    output: {//配置输出位置和名称
        path: path.join(__dirname,'./dist'),//配置输出路径
        filename: 'bundle.js'//配置输出文件名
    },

    //4. 配置html-webpack-plugin
    plugins: [//所有插件的配置节点
        new htmlWebpackPlugin({//创建一个html-webpack-plugin对象
            template:path.join(__dirname,'./src/index.html'),//指定生成内存中的html页面的模板
            filename: 'index.html'//指定新生成的页面的名称为：index.html
        }),
    ],

    //5. 配置loader匹配规则
    module:{//配置所有第三方loader的节点
        rules:[//第三方模块的匹配规则
            { test: /\.css$/ , use: [ 'style-loader' , 'css-loader' ] },//css文件的匹配规则
            { test: /\.less$/ , use: [ 'style-loader' , 'css-loader' , 'less-loader' ] },//less文件的匹配规则
            { test: /\.scss$/ , use: [ 'style-loader' , 'css-loader' , 'sass-loader' ] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/ , use: 'url-loader?limit=1,264,784'},//处理图片路径的loader
            { test: /\.(ttf|woff2|eot|woff|svg)$/ , use: 'url-loader'},//处理字体文件路径的匹配规则
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//配置babel来转换高级的ES6语法
            // { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            { test: /\.vue$/, use: 'vue-loader'},//配置 .vue文件的解析loader
        ]

    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js",//修改vue被导入时的包的路径
        }
    }

}