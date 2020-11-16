<template>
  <div class="detail">
     <!-- <h2>{{goods_id}}</h2> -->
     <detail-top></detail-top>
     <!-- 这里如果在app.vue写了keep-alive的话，就不会销毁原先的数据 -->
     <!-- <div>{{goodsdetail}}</div> -->
     <detail-goods :goodsdetail="goodsdetail"></detail-goods>
     <detail-bottom :goodsid="goodsid+''" :goodsdetail="goodsdetail"></detail-bottom>
  </div>
</template>

<script>
import DetailTop from './childDetail/DetailTop'
import DetailGoods from './childDetail/DetailGoods'
import DetailBottom from './childDetail/DetailBottom'
import axios from 'axios'
export default {
  components:{
    DetailTop,
    DetailGoods,
    DetailBottom
  },
  data(){
    return{
      goodsid:'',
      goodsdetail:{}
    }
  },
   mounted() {
    this.querygoods();//需要触发的函数
  },
    methods:{
      querygoods(){
        this.goodsid=this.$route.query.goods_id;
        let iid=this.goodsid;
       //  这里的get和post在后端接受参数方式不一样
         axios.post('/api/detailgoods/selectDetail',{iid}).then(res => {
           this.goodsdetail = res.data[0];
         }).catch(err => {
           console.log(err);
         })
      }  
    }
}
</script>

<style>

</style>