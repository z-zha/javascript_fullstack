<template>
<a-affix :offset-top="top">
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
        <a-tag color="pink">
          <span>CSS</span>
        </a-tag>
        <a-tag color="red">
          <span>Vue</span>
        </a-tag>
        <a-tag color="orange">
          <span>mpvue</span>
        </a-tag>
        <a-tag color="cyan">
          <span>jQuery</span>
        </a-tag>
        <a-tag color="green">
          <span>微信小程序</span>
        </a-tag>
        <a-tag color="blue">
          <span>mysql</span>
        </a-tag>
        <a-tag color="purple">
          <span>Node.js</span>
        </a-tag>
        <a-tag color="#f50">
          <span>美食</span>
        </a-tag>
        <a-tag color="#2db7f5">
          <span>不吃肉不能活</span>
        </a-tag>
        <a-tag color="#87d068">
          <span>无辣不欢</span>
        </a-tag>
        <a-tag color="#108ee9">
          <span>火锅</span>
        </a-tag>
      </div>
    </div>
    
  </div>
</a-affix>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      loading: true,
      top: 100,
    };
  },
  components: {},
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>