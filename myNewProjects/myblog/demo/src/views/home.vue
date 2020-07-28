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
      <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="19">
        <div class="content">
          <!-- <a-list
            item-layout="vertical"
            size="large"
            :pagination="pagination"
            :data-source="listData"
          >
            <div slot="footer">
              <b>ant design vue</b> footer part
            </div>
            <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
              <template v-for="{ type, text } in actions" slot="actions">
                <span :key="type">
                  <a-icon :type="type" style="margin-right: 8px" />
                  {{ text }}
                </span>
              </template>
              <img
                slot="extra"
                width="272"
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
              <a-list-item-meta :description="item.description">
                <a slot="title" :href="item.href">{{ item.title }}</a>
                <a-avatar slot="avatar" :src="item.avatar" />
              </a-list-item-meta>
              {{ item.content }}
            </a-list-item>
          </a-list> -->
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

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" }
      ]
    };
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
/* .content {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
} */
.content {
  margin-left: 40px;
  margin-top: 50px;
}
</style>