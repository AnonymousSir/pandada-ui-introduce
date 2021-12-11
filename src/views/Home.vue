<template>
  <div class="home">
    <header class="hero">
      <img src="../assets/pandadaLogo.jpg">
      <h1>Pandada UI</h1>
      <h2>一个基于Vue2.0的UI框架</h2>
      <router-link to="introduce/about" class="started">Getting Started <span class="iconfont">&#xe65d;</span></router-link>
    </header>
  </div>
</template>

<script>
// import jQuery from ('jquery')
// import Axios from ('axios')
export default {
  name: 'Home',
  mounted(){
    // console.log(Axios)
  }
}
</script>

<style lang="scss">
body,html {
  padding: 0;
  margin: 0;
  background-color: #fff;
}
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    h2 {
      color: #6a8bad;
    }
    .started {
      display: block;
      font-size: 18px;
      color: #fff;
      border: 1px solid #389d70;
      border-radius: 4px;
      background-color: #3eaf7c;
      padding: 16px 25px;
      &:hover {
        background-color: #4abf8a;
      }
    }
  }
}
</style>
