<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <my-header />
    </div>

    <a-row>
      <a-col :xs="0" :sm="0" :md="0" :lg="6" :xl="5">
        <div class="slider">
          <my-slider />
        </div>
      </a-col>
      <!-- 侧边栏 -->

      <!-- 内容 -->
      <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="19">
        <div class="content">
          <div class="blog">
            <div class="header">
              <a-divider orientation="left" style="font-weight: bold">
                <span>我的博客</span>
              </a-divider>
            </div>

            <div class="web">
              <span>博客前端：</span>
              <p>vue + vuex + vue-router + antd</p>
            </div>

            <div class="back">
              <span>博客后端：</span>
              <p>koa2 + MySQL + knex.js</p>
            </div>
          </div>

          <div class="mydata">
            <div class="header">
              <a-divider orientation="left">
                <span>关于我</span>
              </a-divider>
            </div>

            <div class="aboutMe">
              <a-descriptions bordered :column="{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }">
                <a-descriptions-item label="姓名">查佳慧</a-descriptions-item>
                <a-descriptions-item label="性别">女</a-descriptions-item>
                <a-descriptions-item label="籍贯">江西九江</a-descriptions-item>
                <a-descriptions-item label="出生年月">1999.12</a-descriptions-item>
                <a-descriptions-item label="政治面貌">中共党员</a-descriptions-item>
                <a-descriptions-item label="学校">江西财经大学</a-descriptions-item>
                <a-descriptions-item label="学历">本科</a-descriptions-item>
                <a-descriptions-item label="专业">2021届软件工程</a-descriptions-item>
                <a-descriptions-item label="联系方式">187-7925-1461</a-descriptions-item>
                <a-descriptions-item label="电子邮箱">2635067653@qq.com</a-descriptions-item>
                <a-descriptions-item label="技术栈">
                  <span>前端：HTML/CSS，JavaScript， vue，mpvue， 微信小程序</span>
                  <br />
                  <span>后端：Koa2，egg.js，node</span>
                  <br />
                  <span>数据库： mysql</span>
                  <br />
                  <span>工具： git,，postman，Easy mock</span>
                  <br />
                </a-descriptions-item>
              </a-descriptions>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- <my-articles/>
    <my-tags/>
    <div class="title">
      aaahahahhah
    </div>-->
  </div>
</template>

<script>
import Header from "../components/header"; //导入组件 index.vue可以省略
import Slider from "../components/slider";
// import Articles from "../components/articles"
// import Tags from "../components/tags"
export default {
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    // "my-articles": Articles,
    // "my-tags": Tags
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.state.current = ["4"];
  },
};
</script>

<style lang="less" scoped>
/* .slider {
  float: left;
} */
/* .content {
  float: right;
  margin-left: 20px;
  margin-top: 20px;
} */
.content {
  margin: 50px 200px 120px 80px;
  // margin-left: 40px;
  // margin-top: 50px;
}
.blog {
  height: 150px;
  overflow: hidden;
  text-align: left;
}
/*  ！important 无穷大
    行内样式   1 0 0 0
    id选择器   0 1 0 0
    类名选择器  0 0 1 0
    标签选择器  0 0 0 1

    你看看权重 你# app 没有scoped（私有化）造成了样式污染，
    # 选择器权重太高，你在后面写 类名选择器无法覆盖样式
 */

.header span {
  font-weight: bold;
  font-size: 18px;
}
.back,
.web {
  display: flex;
  /* flex-wrap: nowrap; */
  span {
    font-weight: bold;
    font-size: 16px;
  }
}
.aboutMe {
  margin-right: 300px;
  margin-bottom: 50px;
  // text-align: left;
  span {
    line-height: 40px;
  }
}
</style>