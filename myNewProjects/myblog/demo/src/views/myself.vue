<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <my-header />
    </div>

    <a-row>
      <a-col :xs="0" :sm="0" :md="3" :lg="6" :xl="5">
        <div class="slider">
          <my-slider />
        </div>
      </a-col>
      <!-- 侧边栏 -->

      <!-- 内容 -->
      <a-col :xs="24" :sm="24" :md="21" :lg="18" :xl="19">
        <div class="content">
          <div class="blog">
            <div class="header">
              <a-divider orientation="left" style="font-weight: bold">
                <span>我的博客</span>
              </a-divider>
            </div>

            <div class="web">
              <span>博客前端：</span>
              <p>vue，vuex，vue-router</p>
            </div>
            <div class="back">
              <span>博客后端：</span>
              <p>vue，vuex，vue-router</p>
            </div>
          </div>

          <div class="mydata">
            <div class="header">
              <a-divider orientation="left">
                <span>关于我</span>
              </a-divider>
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
  data() {
    return {};
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider
    // "my-articles": Articles,
    // "my-tags": Tags
  }
};
</script>

<style scoped>
.slider {
  float: left;
}
.content {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.blog {
  height: 200px;
}
.web {
  float: left;
}
.header span {
  font-weight: bold;
}

/* .blog span,
.blog p {
  float: left;
}
.web,
.back {
  float: left;
} */
/* .web {
  display: table;
} */
/* .web span,
.back span {
  font-weight: bold;
  font-size: 20px;
}
.web p .back p {
  line-height: 29.6px;
} */
</style>