//node语法的path操作
const path=require('path')

//启用热更新的第二步
const webpack=require('webpack')

//导入在内存中，生成html页面的插件，先要安装：npm i html-webpack-plugin -D
const htmlWebpackPlugin=require('html-webpack-plugin')
/**
 * 这个插件的两个作用：
 *  1. 自动在内存中生成一个页面
 *  2. 自动将打包好的bundle.js引入到页面中
 */

//这个配置文件，其实就是一个js文件；通过node中的模块操作，向外暴露一个配置对象
module.exports={

    //配置入口：表示要使用webpack打包那个文件
    entry:path.join(__dirname,'./src/main.js'),

    //输出文件相关的配置
    output:{
        //指定打包好的文件放到那个目录去
        path:path.join(__dirname,'./dist'),
        // 指定输出文件的名称
        filename:'bundle.js'
    },

    // 配置dev-server的第二种方式
    devServer:{
        //--open --port 8081 --contentBase src --hot
        open:true,//指定自动打开浏览器
        port:8081,//指定项目运行的端口号
        contentBase:'src',//指定托管的根目录
        hot:true//启用热更新的第一步
        //第二步在上面引入webpack（即：const webpack=require('webpack')）
        //第三步在plugins中new一个热更新的模块对象
    },
    //配置插件的节点，这是一个数组所以用[]，对象用{}
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//new 一个热更新的模块对象，这是启用热更新的第三步
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定末班页面，将根据这个模板在内存中生成页面
            filename:'index.html'//内存中生成的页面叫index.html
        }),//创建一个在内存中生成html页面的对象
    ],
    //这个节点用于配置所有的第三方的加载器
    module:{
        rules: [//所有第三方模块的，匹配规则
            //test后面是正则：匹配所有以.css结尾的，用这两个loader来处理
            { test: /\.css$/ ,use: ['style-loader','css-loader'] },
            /**
             * webpack处理第三方文件类型的过程：
             * 1. 发现这个要处理的文件不是js文件，然后就去配置文件中查找有没有对应的第三方loader规则，
             * 2. 如果能找到对应的规则，就会调用对应的loader处理这中文件类型
             * 3. 调用loader的时候是从右往左的（从后往前的，先调用css-loader再调用style-loader的）
             * 4. 当最后一个loader处理完毕后，会把处理结果交给webpack打包合并，最终输出到bundle.js中
             */
            {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            //因为less也属于样式，所以也需要style-loader和css-loader
            {test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']}
        ],
    }
    

}
/**配置完以上信息后，当输入webpack进行打包时，webpack自动进行了如下操作：
 * 1. 首先webpack发现，我们并没有通过命令的形式，给他指定入口和出口。
 * 
 * 2. 他会自动去项目的根目录下找webpack.config.js这个配置文件
 * 
 * 3. 找到之后会去解析执行这个配置文件，执行完了之后就得到了配置文件中导出的配置对象
 * 
 * 4. 当webpack拿到了配置对象后，就拿到了配置对象中指定的入口和出口，最后进行打包构建。
 * 
 */

 /** 使用webpack-dev-server这个工具，来实现自动打包和编译的功能
  * 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地依赖
  * 
  * 2. 安装完毕后，这个工具的用法和 webpack 的命令完全一致
  * 
  * 3. 由于是在项目中、本地安装的webpack-dev-server，所以无法把它当做脚本命令
  *    在powershell终端中直接运行，只有那些安装到全局（-g）的工具才能在终端直接运行
  * 
  * 4. 解决这个问题简单：在package.json这个文件中有个 scripts：{} 在这个里面加上
  *    "dev":"webpack-dev-server" 就能够使用npm run dev运行了
  * 
  * 5. 假如安装的本地依赖有问题：那么直接到项目中删除node_modules文件夹，然后执行npm install
  *    重新构建就行了。
  * 
  * 6. 虽然项目通过npm run dev命令运行了起来，可是修改变色的颜色后，页面却没有变化，是因为通过这种方式
  *    打包的bundle.js文件并没有在dist文件夹中，而是在与src同级的目录中，并且是看不见得，存在于内存中
  *    并没有在物理磁盘中，因为这样速度跟快，并且不会损耗物理磁盘。因为我们每次保存都会打包编译，如果真实
  *    存放到物理磁盘中对磁盘损耗特别大。若是我们想访问这个打包好的bundle.js文件可以直接在index.html中的
  *     <script src='/bundle.js'><script> 这样书写。
  *     
  * 7. package.json的 "dev": "webpack-dev-server --open --port 8081 --contentBase src --hot"的配置
  *    --open：启动完项目自动打开浏览器
  *    --port：指定服务器的端口号
  *    --contentBase：指定启动的初始页面的路径
  *    --hot：启动热加载，修改代码后不再重新打包整个文件，只是将修改的地方的内容做一个补丁，完成同样的效果
  *    这大大节省了系统的开销。
  * 
  */

