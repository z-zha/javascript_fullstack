<template>
  <div>
    <div class="name">
      <a-icon type="smile" theme="twoTone" two-tone-color="#eb2f96" />
      <span>辣鸡查的博客</span>
    </div>

    <div class="list">
      <a-menu v-model="current" mode="horizontal" style="line-height: 65px">
        <a-menu-item @click="toHome">
          <a-icon type="home" />
          <span>首页</span>
        </a-menu-item>

        <a-sub-menu >
          <span slot="title" class="submenu-title-wrapper">
            <a-icon type="tags" />
            <span>分类</span>
          </span>
          <a-menu-item-group>
            <a-menu-item @click="articles">
              <span>文章笔记</span>
            </a-menu-item>
            <a-menu-item @click="musics">
              <span>音乐</span>
            </a-menu-item>
            <a-menu-item @click="books">
              <span>书籍</span>
            </a-menu-item>
            <a-menu-item @click="others">
              <span>杂谈</span>
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>

        <a-menu-item @click="toFolder">
          <a-icon type="calendar" />
          <span>归档</span>
        </a-menu-item>

        <a-menu-item @click="toMyself">
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
      current: ["mail"]
    };
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/home" });
    },
    toMyself() {
      this.$router.push({ path: "/myself" });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>