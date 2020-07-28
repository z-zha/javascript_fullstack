<template>
  <div>
    <div class="name">
      <a-icon type="smile" theme="twoTone" two-tone-color="#eb2f96" />
      <span>辣鸡查的博客</span>
    </div>

    <div class="list" style="height: 65px">
     

      <a-menu v-model="current" mode="horizontal" style="line-height: 65px">
        <a-menu-item key="home" @click="toHome">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>

        <a-menu-item key="tags" @click="toCategory">
          <a-icon type="tags" />
          <span>分类</span>
        </a-menu-item>

        <a-menu-item key="calendar" @click="toFolder">
          <a-icon type="calendar" />
          <span>归档</span>
        </a-menu-item>

        <a-menu-item key="user" @click="toMyself">
          <a-icon type="user" />
          <span>这是我</span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header", //将组件以header名称抛出
  data() {
    return {
      loading: true,
      current:  ["home"],
    };
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCategory() {
      this.$router.push({ path: "/category" });
    },
    toFolder() {
      this.$router.push({ path: "/folder"})
    },
    toMyself() {
      this.$router.push({ path: "/myself" });
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>