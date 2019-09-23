console.log('ok welcome!')
//alert('ok welcome!')

import './css/index.css'
import './css/index.less'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

//class关键字 是ES6中的新语法，是用来实现ES6中面向对象编程方式
class person{
    static info ={name:'zs',age:23}
}
console.log(person.info)