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
        <!-- <div class="content">
          <div class="card" v-for="(item, index) in card" :key="index">
            <a-row>
            <a-col :xs="16" :sm="18" :md="20" :lg="24" :xl="24">
            <a-card
              hoverable
              :title="item.title"
              :bordered="true"
              @click="articleDetail(item.article_id)"
            >
              <p>{{item.introduce}}</p>
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
              </template>
            </a-card>
            </a-col>
            </a-row>
          </div> -->

          <!-- <div class="card" v-for="(item, index) in card" :key="index">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2868187029,2635725758&fm=26&gp=0.jpg"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
              </template>
              <a-card-meta :title="item.title" :description="item.introduce"></a-card-meta>
            </a-card>
          </div>-->
          <!-- <div class="card" v-for="(item,index) in card" :key="index">
            <a-card hoverable style="width: 300px">
              <img slot="cover" alt="example" src="item[index].url" />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>-->

        <!-- </div> -->
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
import ArticleList from "../components/articleList";
import { get } from "../utils";
import axios from "axios";

export default {
  data() {
    return {
      card: [],
    };
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    "my-articleList": ArticleList
  },
  mounted() {
    this.http();
    this.getData();
  },
  methods: {
    http() {
      get("/getarticle").then((res) => {
        console.log(res);
      });
    },
    async getData() {
      const data = await get("/getarticle");
      // console.log(1);
      // console.log(data);
      // console.log(222);
      this.card = data.data;
    },
    articleDetail(id) {
      this.$router.push({
        path: "/ariticleDetail",
        query: {
          content: id
        }
        // name: "articleDetail",
        // params: {
        //   id: id,
        // },
        // path: "/articleDetail?id=" + id,
      });
    },
  },
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
.card {
  width: 880px;
  height: 280px;
}
</style>