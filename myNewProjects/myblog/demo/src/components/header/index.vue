<template>
  <a-affix>
    <div>
      <div class="name">
        <a-icon type="smile" theme="twoTone" two-tone-color="#eb2f96" />
        <span>辣鸡查的博客</span>
      </div>

      <div class="list">
        <a-menu
          v-model="$store.state.current"
          mode="horizontal"
          @click="handleClick"
          style="line-height: 65px"
        >
          <a-menu-item key="1" @click="toHome">
            <a-icon type="home" />
            <span>首页</span>
          </a-menu-item>

          <a-menu-item key="2" @click="toCategory">
            <a-icon type="tags" />
            <span>分类</span>
          </a-menu-item>

          <a-menu-item key="3" @click="toFolder">
            <a-icon type="calendar" />
            <span>归档</span>
          </a-menu-item>

          <a-menu-item key="4" @click="toMyself">
            <a-icon type="user" />
            <span>这是我</span>
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </a-affix>
</template>

<script>
export default {
  name: "Header", //将组件以header名称抛出
  data() {
    return {
      loading: true,
      current: ["1"],
    };
  },
  methods: {
    handleClick(e) {
      // this.current = e.keyPath[0];
      console.log("click ", e);
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    toCategory() {
      this.$router.push({ path: "/category" });
    },
    toFolder() {
      this.$router.push({ path: "/folder" });
    },
    toMyself() {
      this.$router.push({ path: "/myself" });
    },
  },
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>