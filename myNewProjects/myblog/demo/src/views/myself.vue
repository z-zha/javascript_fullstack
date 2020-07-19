<template>
  <div>
    <my-header/> <!-- 使用组件 -->
    <my-slider/>
    aa
    <my-articles/>
    <my-tags/>
    aa
  </div>
</template>

<script>
import Header from "../components/header" //导入组件 index.vue可以省略
import Slider from "../components/slider"
import Articles from "../components/articles"
import Tags from "../components/tags"
export default {
data() {
  return {
    
  }

},
components:{
  "my-header": Header, //引号是别名 后面是import导入的名字  vue建议组件命名要"-"连接，所以取别名加-
  // Header  直接这样子也可以，但是不建议
  "my-slider": Slider,
  "my-articles": Articles,
  "my-tags": Tags
}
}
</script>

<style>

</style>