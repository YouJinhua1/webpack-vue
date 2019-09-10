//由于webpack是基于node构建的，所以在webpack的配置文件中任何合法的node语法都是支持的
var path = require('path')//1. 定义路径

module.exports={//2. 配置自动打包的配置路径和文件名称等
    entry: path.join(__dirname,'./src/main.js'),//配置入口文件
    output: {//配置输出位置和名称
        filename: ''
    }
}