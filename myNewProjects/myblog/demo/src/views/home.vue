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
          <div class="card">
            <div v-for="(item, index) in card" :key="index">
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
                <a-card-meta title="Card title" description="This is the description"></a-card-meta>
              </a-card>
            </div>
          </div>
          <div class="card">
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
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
          </div>
          <div class="card">
            <a-card hoverable style="width: 300px">
              <img
                slot="cover"
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
              <template slot="actions" class="ant-card-actions">
                <a-icon type="like" theme="twoTone" />
                <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                <a-icon type="message" theme="twoTone" two-tone-color="#52c41a" />
                <!-- <a-icon key="ellipsis" type="ellipsis" /> -->
              </template>
              <a-card-meta title="Card title" description="This is the description"></a-card-meta>
            </a-card>
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
import { get } from "../utils";
import axios from 'axios'

export default {
  data() {
    return {
      card: [],
    }
  },
  methods: {
    async getData () {
      const data = await get('/index')
      this.card = data.card
    }
  },
  components: {
    "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
    // Header  直接这样子也可以，但是不建议
    "my-slider": Slider,
    // "my-articles": Articles,
    // "my-tags": Tags
  }
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
}
.card {
  height: 350px;
  width: 350px;
  float: left;
  img {
    width: 298px;
    height: 180.84px;
  }
}
</style>