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
            <p>{{item.introduce}}</p>
            <template slot="actions" class="ant-card-actions">
              <a-icon type="like" theme="twoTone" />
              <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
              <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
            </template>
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
      card: [],
    };
  },
  mounted() {
    // this.http();
    this.getData();
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
        path: "/ariticleDetail",
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