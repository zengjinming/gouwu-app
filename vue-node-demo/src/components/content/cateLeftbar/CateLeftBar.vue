<template>
  <cate-bar>
    <cate-bar-item path="category/tuijian">
      <template v-slot:item-text>
         有品推荐
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/jiazhuang">
      <template v-slot:item-text>
        家用家装
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/jiadian">
      <template v-slot:item-text>
        家用电器
      </template>
    </cate-bar-item>
     <cate-bar-item path="category/zhineng">
      <template v-slot:item-text>
       智能家庭
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/chuju">
      <template v-slot:item-text>
        居家厨具
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/sport">
      <template v-slot:item-text>
        运动户外
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/bao">
      <template v-slot:item-text>
        鞋靴箱包
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/text">
      <template v-slot:item-text>
        日用文创
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/movies">
      <template v-slot:item-text>
        电视影音
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/shirt">
      <template v-slot:item-text>
        服装配饰
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/shuma">
      <template v-slot:item-text>
        数码配件
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/meizhuang">
      <template v-slot:item-text>
        美妆个护
      </template>
    </cate-bar-item>
    <cate-bar-item path="category/meizhuang">
      <template v-slot:item-text>
        美妆个护
      </template>
    </cate-bar-item>
  </cate-bar>
  
</template>

<script>
import CateBar from 'components/common/catebar/CateBar'
import CateBarItem from 'components/common/catebar/CateBarItem'

export default {
  name: "CateLeftBar",
  components: {
    CateBar,
    CateBarItem
  }
}
</script>

<style scoped>

</style>
