console.log("ok")



//此项目为了方便演示使用这种方式
//import Vue from "../node_modules/vue/dist/vue.js"

// var login={
//     template:'<h1>这是login组件，是使用网页中的形式创建出来的组件</h1>'
// }


import Vue from "vue"
import login from "./login.vue"

var vm =new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }
    render:function(createElement){//形参名字随便取
        
        return createElement(login)
    }
    //以上代码可以简化为：
    //render:c=>c(login)
})