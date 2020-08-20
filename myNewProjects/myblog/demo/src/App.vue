<template>
  <div id="app">
    <router-view/> <!-- 显示路由页面也就是浏览器输入的路径 -->
  </div>
</template>

<style lang="less">
// # 选择器权重1，0，0 后面的权重太高无法覆盖
body {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;  //这个作用于全局了
  // color: #2c3e50;
}
</style>
