<template>
  <div class="content">
    <!-- 头像 -->
    <div class="avatar">
      <img src="../../assets/avatar.jpg" alt />
      <div class="name">
        <span>辣鸡查</span>
      </div>
      <div class="introduction">呆头呆脑，很不好搞。</div>
      <div class="website">
        <a href="https://github.com/z-zha">
          <img src="../../assets/github.png" alt /> GitHub
        </a>
        <a href="https://juejin.im/user/5dd29c42f265da0be47d89ce/posts">
          <img src="../../assets/掘金.png" alt /> 掘金
        </a>
      </div>
    </div>

    <!-- 文章 -->
    <div class="articles">
      <a-divider orientation="left">最新文章</a-divider>
      <div class="list">
        <ul>
          <li>
            <a href>夏天是不会结束的</a>
          </li>
          <li>
            <a href>要开心起来哦。</a>
          </li>
          <li>
            <a href>“今年的你，还好吗”</a>
          </li>
          <li>
            <a href>石头开花</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 标签 -->
    <div class="tags">
      <a-divider orientation="left">我的标签</a-divider>
      <div class="skills">
        <div class="one">
          <a-tag color="pink">css</a-tag>
          <a-tag color="red">Vue</a-tag>
          <a-tag color="orange">mpvue</a-tag>
          <a-tag color="green">微信小程序</a-tag>
        </div>
        <div class="two">
          <a-tag color="cyan">jQuery</a-tag>
          <a-tag color="blue">mysql</a-tag>
          <a-tag color="purple">Node.js</a-tag>
          <a-tag color="#f50">美食</a-tag>
        </div>
        <div class="three">
          <a-tag color="#2db7f5">不吃肉不能活</a-tag>
          <a-tag color="#87d068">无辣不欢</a-tag>
          <a-tag color="#108ee9">火锅</a-tag>
        </div>
      </div>
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
  components: {}
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>