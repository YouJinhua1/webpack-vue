<template>
    <div>
        <h1>这是account组件</h1>
        <router-link to="/account/login">登录子组件Login</router-link>
        <router-link to="/account/register">注册子组件Register</router-link>

        <router-view></router-view>

    </div>
</template>
<script>

</script>
/* 
注意：
    普通的style标签只支持普通的样式（CSS），想要让标签支持scss或less，则需要为标签
    添加设置上lang属性
*/
<style lang="scss" scoped>
body{
    div{
        font-style: italic;
    }
}
</style>