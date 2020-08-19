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
          <div v-html="compiledMarkdown"></div> <!-- v-html的数据是html，marked数据解析成html的格式 -->
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

let marked = require("marked");
let hljs = require("highlight.js");

import "highlight.js/styles/default.css";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  },
});

export default {
  data() {
    return {
      article: "",
      id: "",
    };
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
  },
  // watch: {
  //   $route() {
  //     this.id = this.$route.query.content
  //     this.getArticleById()
  //   }
  // },
  computed: {
    compiledMarkdown() {
      let detail = this.article;
      return marked(detail || "", {
        sanitize: true,
      });
    },
  },

  mounted() {
    this.id = this.$route.query.content; //获取路由传递的参数，并保存在data中
    console.log(this.id);
    this.getArticleById();
    // this.http();
    // this.getData();
  },
  methods: {
    getArticleById() {
      //使用data中的id作为参数调用get请求，发送给后端
      get(`/getArticleById?id=${this.id}`).then((res) => {
        // console.log(res, "res");
        // console.log(3333)
        this.article = res.data[0].content;
        this.loding = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 50px 200px 120px 20px;
  overflow: hidden;
}
pre {
  display: block;
  background-color: #f3f3f3;
  padding: 0.5rem !important;
  overflow-y: auto;
  font-weight: 300;
  font-family: Menlo, monospace;
  border-radius: 0.3rem;
}
pre {
  background-color: #283646 !important;
}
pre > code {
  border: 0px !important;
  background-color: #283646 !important;
  /* background: inherit !important; */
  color: #fff;
}

/deep/ code {
  background-color: #fff5f5;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 4px;
  color: #ff502c;
}
</style>