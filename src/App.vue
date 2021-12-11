<template>
  <div id="app">
    <header class="header">
      <div class="title">
        <img src="./assets/pandadaLogo.jpg" width="20px" height="20px">
        <span class="site-name">Pandada UI</span>
      </div>
      <nav class="nav-links">
        <router-link to="/">主页</router-link>
        <a href="https://github.com/AnonymousSir" target="_black" rel="noopener noreferrer">Github<span class="iconfont">&#xe740;</span></a>
        <a href="https://github.com/AnonymousSir/pandada-ui" target="_black" rel="noopener noreferrer">欢迎start<span class="iconfont">&#xe740;</span></a>
      </nav>
    </header>
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss">
// #app样式
#app {
  & > .view {
    width: 100%;
    height: 100%;
    position: relative;
    top: 61px;
    left: 0;
  }
  & > .header {
    width: 100%;
    height: 61px;
    padding: 12px 24px;
    border-bottom: 1px solid #eaecef;
    background-color: #fff;
    box-sizing: border-box ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    & > .title {
      display: flex;
      align-items: center;
    }
    .site-name {
      font-size: 20px;
    }
    .nav-links {
      a {
        font-size: 14px;
        padding: 0 10px;
        span {
          padding-left: 5px;
        }
      }
    }
  }
}
</style>
