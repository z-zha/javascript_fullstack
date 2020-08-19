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
          <my-articleList />
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
import axios from "axios";

export default {
  data() {
    return {
      loading: true
    };
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    "my-articleList": ArticleList
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
       get("/getarticle")
       .then((res) => {
        console.log(res);
        const data = res.data;
        this.$store.state.articles = data;
        this.lodaing = false;
      });
    },
    // articleDetail(id) {
    //   this.$router.push({
    //     path: "/ariticleDetail",
    //     query: {
    //       content: id
    //     }
        // name: "articleDetail",
        // params: {
        //   id: id,
        // },
        // path: "/articleDetail?id=" + id,
      // });
    },
  // },
};
</script>

<style lang='less' scoped>
.slider {
  float: left;
}
/* .content {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
} */
.content {
  margin-left: 40px;
  margin-top: 50px;
  text-align: left;
}
</style>