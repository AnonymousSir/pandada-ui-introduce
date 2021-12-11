<template>
    <div class="install">
        <div class="content__box">
            <h1 class="title" id="install">
                <router-link to="/introduce/install#install">#</router-link>
                安装
            </h1>
            <div class="denger">
                <span>WARNING</span>
                <p>PandadaUI尚未完成，请勿用于生产环境中。</p>
            </div>
            <div class="codeView" v-highlight>
                <pre class="language-text"><code v-html="code1"></code></pre>
            </div>
            <p>或者</p>
            <div class="codeView" v-highlight>
                <pre class="language-text"><code v-html="code2"></code></pre>
            </div>
            <div class="content__footer">
                <router-link to="/introduce/about"> <span class="iconfont">&#xe65e;</span> Pandada UI</router-link>
                <router-link to="/introduce/started">快速上手 <span class="iconfont">&#xe65d;</span> </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'install',
    data () {
        return {
            code1: 'npm install pandada-ui --save',
            code2: 'yarn add pandada-ui'
        }
    }
}
</script>

<style lang="scss">
.install {
    .codeView {
        color: #fff;
    }
    .denger {
        background-color: #ffe6e6;
        padding: 20px 35px 15px 35px;
        position: relative;
        & > span {
            color: #900;
            font-weight: 600;
        }
        & > p {
            color: #4d0000;
        }
        &::before {
            content: " ";
            display: block;
            width: 10px;
            height: 100%;
            background-color: #c00;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
        }
    }
}
</style>
