<template>
  <div>
    <!-- <div class="card" v-for="(item, index) in card" :key="index"> -->
    <div class="card" v-for="(item, index) in $store.state.articles" :key="index">
      <a-row>
        <a-col :xs="16" :sm="18" :md="20" :lg="24" :xl="24">
          <a-card
            hoverable
            :title="item.title"
            :bordered="true"
            @click="articleDetail(item.article_id)"
          >
            <p
              style="float: right; margin-top: -72px;"
            >{{$store.state.articles[index].add_time.slice(0,10)}}</p>
            <p>{{item.introduce}}</p>

            <template slot="actions" class="ant-card-actions">
              <a-icon type="like" theme="twoTone" />
              <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
              <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
            </template>
            <a-tag color="#2db7f5">{{$store.state.articles[index].category}}</a-tag>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils";
import axios from "axios";

export default {
  name: "ArticleList",
  data() {
    return {
      loading: true,
      articles: [],
      // card: [],
    };
  },
  mounted() {
    // this.http();
    // this.getData();
  },
  methods: {
    // http() {
    //   get("/getarticle").then((res) => {
    //     console.log(res);
    //   });
    // },
    // async getData() {
    //   const data = await get("/getarticle");
    //   // console.log(1);
    //   // console.log(data);
    //   // console.log(222);
    //   this.card = data.data;
    // },
    articleDetail(id) {
      this.$router.push({
        path: "/articleDetail",
        query: {
          content: id,
        },
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

<style style='less' scoped>
@import "./style.less";
</style>