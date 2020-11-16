<template>
  <div class="jiazhuang">
      <img src="~assets/img/category/2.jpg" alt=""/>
      <ul class="category-show">
        <li v-for="(item, index) in data" :key="index">
          <a href="">
            <!-- 图片路径必须这样写 -->
            <img
              :src="require('../../../assets/img/category/' + item.goodimg)"
              alt=""
            />
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
        // 这里的res.data取出来的是[{id:1}{id:2}]
        // this.goodname = res.data[0].goodname;
        // 这个取出来必须用一个数组来装它，方便访问
        this.data = res.data;
        // this.img = res.data[0].goodimg;
        // alert(res.data[0].goodimg)
        // alert(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
@import '../../../assets/css/cateright.css'
/*  */
</style>