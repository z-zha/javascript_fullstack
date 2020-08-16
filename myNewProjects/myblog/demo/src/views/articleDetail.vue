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
          <div class="detail" v-for="(item, index) in article" :key="index">
            <p>{{item.content}}</p>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Header from "../components/header";
import Slider from "../components/slider";
import { get } from "../utils";
import axios from "axios";
export default {
  data() {
    return {
      article: [],
    };
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider
    // "my-articles": Articles,
    // "my-tags": Tags
  },
  mounted() {
    this.http();
    this.getData();
  },
  methods: {
    http() {
      get("/getArticleById").then((res) => {
        console.log(res);
        console.log(1)
      });
    },
    async getData() {
      const data = await get("/getArticleById");
      // console.log(aaa);
      console.log(data);
      // console.log(bbbb);
      this.article = data.article;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin-left: 40px;
  margin-top: 50px;
}
.blog {
  height: 150px;
  overflow: hidden;
  text-align: left;
}

.header span {
  font-weight: bold;
  font-size: 18px;
}
.back,
.web {
  display: flex;
  span {
    font-weight: bold;
    font-size: 16px;
  }
}
.aboutMe {
  margin-right: 300px;
  margin-bottom: 50px;
  span {
    line-height: 40px;
  }
}
</style>