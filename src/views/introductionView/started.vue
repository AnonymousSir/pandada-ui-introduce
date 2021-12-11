<template>
    <div class="started">
        <div class="content__box">
            <h1 class="title" id="started">
                <router-link to="/introduce/started#started">#</router-link>
                快速上手
            </h1>
            <p>引入Pandada UI</p>
            <div class="codeView" v-highlight>
                <pre class="language-js"><code v-html="code1"></code></pre>
            </div>
        </div>
        <div class="content__footer">
            <router-link to="/introduce/install"> <span class="iconfont">&#xe65e;</span> 安装</router-link>
            <router-link to="/introduce/button-view">Button按钮 <span class="iconfont">&#xe65d;</span> </router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'started',
    data () {
        return {
            code1: `import Vue from 'vue'
import pandadaUI from 'pandada-ui'

Vue.use(pandadaUI)`
        }
    }
}
</script>
