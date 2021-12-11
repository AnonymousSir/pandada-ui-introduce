<template>
    <div class="about">
        <div class="pandada content__box">
            <h1 class="title">
                Pandada UI
            </h1>
            <p>Pandada UI 是一个小型的 UI 框架，提供了一些常用组件，适合桌面端使用。</p>
            <p>组件：Button  按钮、Input输入框、Swith 开关、Radio 单选框、checkbox 多选框、Dialog 对话框</p>
            <p>持续更新中...</p>
        </div>
        <div class="content__box">
            <h2 class="title" id="about">
                <router-link to="/introduce/about#about">#</router-link>
                关于pandada
            </h2>
            <p>这是我在学习 Vue 时尝试造的轮子，一个 UI 框架，参考了 ELement 进行实现， 希望能对你有用。</p>
        </div>
        <div class="content__box">
            <h2 class="title" id="lssues">
                <router-link to="/introduce/about#lssues">#</router-link>
                提问
            </h2>
            <a href="https://github.com/AnonymousSir/pandada-ui/lssues" target="_black" rel="noopener noreferrer">lssues<span class="iconfont">&#xe740;</span></a>
        </div>
        <div class="content__box">
            <h2 class="title" id="contact">
                <router-link to="/introduce/about#contact">#</router-link>
                联系方式
            </h2>
            <p>邮箱：19832744772@qq.com</p>
        </div>
        <div class="content__box">
            <h2 class="title" id="contribution">
                <router-link to="/introduce/about#contribution">#</router-link>
                贡献代码
            </h2>
            <a href="https://github.com/AnonymousSir/pandada-ui/pulls" target="_black" rel="noopener noreferrer">Pull request<span class="iconfont">&#xe740;</span></a>
        </div>
        <div class="content__footer">
            <router-link to="/introduce/install">安装 <span class="iconfont">&#xe65d;</span></router-link>
        </div>
    </div>
</template>

<script>
export default{
    name: 'about'
}
</script>

<style lang="scss">
.about {
    & > .content__footer {
        justify-content: flex-end;
    }
}
</style>
