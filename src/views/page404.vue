<template>
    <div class="page404">
        <h1>404 NOT FOUND!</h1>
        <img src="@/assets/404.jpg">
        <router-link to="/">返回主页</router-link>
    </div>
</template>

<script>
export default{
    name: 'page404'
}
</script>

<style lang="scss">
.page404 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      font-size: 18px;
      color: #fff;
      border: 1px solid #389d70;
      border-radius: 4px;
      background-color: #3eaf7c;
      padding: 16px 200px;
      &:hover {
        background-color: #4abf8a;
      }
    }
}
</style>
