<template>
  <div>
    <div class="name">
      <a-icon type="smile" theme="twoTone" two-tone-color="#eb2f96" />
      <span>辣鸡查的博客</span>
    </div>

    <div class="list">
      <a-menu v-model="current" mode="horizontal" style="line-height: 65px">
        <ul>
          <li>
            <a-menu-item key="mail">
              <a href>
                <a-icon type="home" />首页
              </a>
            </a-menu-item>
          </li>

          <li>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <a-icon type="tags" />分类
              </span>
              <a-menu-item-group>
                <a-menu-item key="setting:1">
                  <a href>文章笔记</a>
                </a-menu-item>
                <a-menu-item key="setting:2">
                  <a href>音乐</a>
                </a-menu-item>
                <a-menu-item key="setting:2">
                  <a href>书籍</a>
                </a-menu-item>
                <a-menu-item key="setting:2">
                  <a href="s">杂谈</a>
                </a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
          </li>

          <li>
            <a-menu-item key="app">
              <a href>
                <a-icon type="calendar" />归档
              </a>
            </a-menu-item>
          </li>

          <li>
            <a-menu-item>
              <span @click="toMyself">
                <a-icon type="user" />这是我
              </span>
            </a-menu-item>
          </li>
        </ul>
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