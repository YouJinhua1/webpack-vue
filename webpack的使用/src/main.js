//main.js是项目的js入口文件

//ES6（ECMAScript）导入jQuery
import $ from 'jquery'

//导入css样式
import './css/index.css'
/**
 * 注意：webpack默认只能打包处理js文件，非js的文件处理不了
 *      想要处理就必须要手动安装一些合适的第三方loader加载器
 *      想要处理css文件:
 *      1. 需要安装style-loader和css-loader这两个加载器。npm i style-loader css-loader -D
 *      2. 打开webpack.config.js文件，在里面新增一个配置节点，叫做module，他是一个对象，在这个对象上
 *         有一个rules属性，这个rules属性是个数组，这个数组中存放了所有的第三方文件的匹配和处理规则
 * 
 */
import './css/index.less'
//需要安装 npm i less-loader -D 和 npm i less -D
//注意less是less-loader内部依赖的，所以我们不需要显式的引入到这里来

import './css/index.scss'
//需要暗转npm i sass-loader -D 和cnpm i node-sass -D ，node-sass也是sass-loader内部依赖
//注意在安装node-sass时最好用cnpm安装，因为一般使用npm是安装不下来的


//node中的导入方法
//const $=require('jquery')

//使用jQuery进行列表隔行变色
$(function(){
    //奇数行
    $('li:odd').css('backgroundColor','red');
    //偶数行
    $('li:even').css('backgroundColor',function(){
        return "#"+"1E1E1E";
    });
})
//打包命令：webpack src/main.js -o dist/bundle.js