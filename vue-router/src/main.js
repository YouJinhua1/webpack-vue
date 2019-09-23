import Vue from "vue"
import app from "./App.vue"

//导入抽取出来的自定义的路由模块
import router from "./router.js"

//第一步导入vue-router
import VueRouter from "vue-router"

// import Account from "./main/Account.vue"
// import List from "./main/List.vue"
// import Login from "./subRouter/Login.vue"
// import Register from "./subRouter/Register.vue"



//第二步手动安装VueRouter
Vue.use(VueRouter)

//第三步创建路由对象
// var router = new VueRouter({
//     routes:[
//         // { 
//         //     path:'/account', 
//         //     component:Account
//         // },
//         { 
//             path:'/account', 
//             component:Account,
//             children:[
//                 //注意子路由前面不能带“/”
//                 {path:'login',component:Login},
//                 {path:'register',component:Register},
//             ]
//         },
//         { 
//             path:'/list', 
//             component:List
//         }
//     ]
// })

var vm =new Vue({
    el:'#app',
    render:c=>c(app),
//第四步将路由对象挂载的VM上
    router
})