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
          <div v-if="$store.state.category">
            <a-tag
              v-for="(item, index) in $store.state.tags"
              :key="index"
              color="#2db7f5"
              @click="toTypeArticles(item.name)"
            >{{item.name}}</a-tag>
          </div>
          <div v-if="!$store.state.category"> 
            <div v-show="$store.state.articles == ''">
              <a-empty description="emmm这个标签我暂时还没写文章呢。。" />
            </div>
            <my-ariticleList v-show="$store.state.articles != []" />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Header from "../components/header"; //导入组件 index.vue可以省略
import Slider from "../components/slider";
import ArticleList from "../components/articleList";

import { get } from "../utils";

export default {
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    "my-ariticleList": ArticleList,
  },
  data() {
    return {
      // category: false,
      show: true,
    };
  },
  methods: {
    toTypeArticles(category) {
      get(`/getArticleByType?type=${category}`).then((res) => {
        const data = res.data;
        // console.log(data);
        this.$store.state.articles = data;
        this.$store.state.category = false;
      });
    },
  },
  mounted() {
    this.$store.state.current = ["2"];
    // this.toTypeArticles();
  },
};
</script>

<style lang="less" scoped>
/* .content {
  float: right;
  margin-left: 20px;
  margin-top: 20px;
} */
.content {
  margin: 50px 200px 120px 80px;
  text-align: center;
  // margin-left: 40px;
  // margin-top: 50px;
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