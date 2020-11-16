<template>
  <div class="text">
    <img src="~assets/img/category/8.jpg" alt="" />
    <ul class="category-show">
      <li v-for="(item, index) in data" :key="index">
        <a href="">
          <img :src="require('../../../assets/img/category/'+item.goodimg)" alt="" >
          <span>{{ item.goodname }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "component_name",
  data() {
    return {
      goodname: '',
      data: [],
      img: ''
    }
  },
  mounted: function () {
    this.querygoods();//需要触发的函数
  },
  methods: {
    querygoods() {
      axios.get('/api/goods/selectGoods2').then(res => {
           this.data = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/cateright.css'
</style>