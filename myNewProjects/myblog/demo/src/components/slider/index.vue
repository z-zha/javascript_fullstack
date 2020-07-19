<template>
  <div class="avatar">
    <img src="../../assets/avatar.jpg" alt="">
    <div class="name">
      辣鸡查
    </div>
    <div class="introduction">
      呆头呆脑，很不好搞。
    </div>
    <div class="website">
      <a href="https://github.com/z-zha">
        <img src="../../assets/github.png" alt="">  GitHub
      </a>
      <a href="https://juejin.im/user/5dd29c42f265da0be47d89ce/posts">
        <img src="../../assets/掘金.png" alt="">  掘金
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      loading: true
    };
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>