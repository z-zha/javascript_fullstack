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
          <a-timeline pending="持续记录中..." :reverse="reverse">
            <a-timeline-item v-for="(item, index) in getarticlebydate" :key="index">
              <span
                @click="articleDetail(item.article_id)"
              >{{getarticlebydate[index].title}}, {{getarticlebydate[index].add_time.slice(0,10)}}</span>
            </a-timeline-item>
          </a-timeline>
          <a-button type="primary" style="margin-top: 16px" @click="handleClick">Toggle Reverse</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Header from "../components/header"; //导入组件 index.vue可以省略
import Slider from "../components/slider";

import { get } from "../utils";

export default {
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    // "my-articles": Articles,
    // "my-tags": Tags
  },
  data() {
    return {
      reverse: false,
      getarticlebydate: [],
    };
  },

  methods: {
    handleClick() {
      this.reverse = !this.reverse;
    },
    // getArticle() {
    //   get("/getArticle").then((res) => {
    //     this.getarticle = res.data;
    //   });
    // },
    getArticleByDate() {
      get("/getArticleByDate").then((res) => {
        this.getarticlebydate = res.data;
      });
    },
    articleDetail(id) {
      this.$router.push({
        path: "/articleDetail",
        query: {
          content: id,
        },
      });
    },
  },

  mounted() {
    this.$store.state.current = ["3"];
    this.getArticleByDate();
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
  span {
    // cursor: pointer;
    color: rgb(236, 143, 159);
    font-size: 16px;
  }
  span:hover {
    cursor: pointer;
    color: #eb2f96;
  }
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