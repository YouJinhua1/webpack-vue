//这是一个专门抽取出来的router相关的配置


//由于这里使用到了vue-router，所以要导入vue-router
import VueRouter from "vue-router"


import Account from "./main/Account.vue"
import List from "./main/List.vue"
import Login from "./subRouter/Login.vue"
import Register from "./subRouter/Register.vue"

var router = new VueRouter({
    routes:[
        { 
            path:'/account', 
            component:Account,
            children:[
                //注意子路由前面不能带“/”
                {path:'login',component:Login},
                {path:'register',component:Register},
            ]
        },
        { 
            path:'/list', 
            component:List
        }
    ]
})

//这是一个独立的模块了，所以对外暴露出router
export default router