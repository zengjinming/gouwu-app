<template>
  <div class="goods-tui">
    <div class="goods-tui-top">
      <h2>
        专属推荐
      </h2>
      <a href="#">
        <span>更多</span>
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <div class="goods-tui-main">
      <div class="main-items" v-for="(item,index) in data" :key="index" @click="itemClick(index)">
        <img :src="require('../../../assets/img/home/'+item.gimg)" alt="" />
        <div class="items-text">
          <p class="items-info">{{item.gname}}</p>
          <p class="items-price">
            <span>￥</span>
            {{item.gprice}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
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
      axios.get('/api/homegoods/selectTui').then(res => {
           this.data = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    itemClick(index){
        let goods_id=this.data[index].gid;
        console.log(goods_id);
         this.$router.push({
                path:'/detail',
                query:{
                    goods_id:goods_id
                }
            })
    }
  }
}
</script>

<style scoped>
.goods-tui {
  margin-top: 10px;
  box-sizing: border-box;
  margin-left: 10px; 
  margin-right: 10px;
  display: flex;
  width: 95%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  padding-bottom: 10px;
}
.goods-tui .goods-tui-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 2px;
}
.goods-tui .goods-tui-main{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  flex-wrap: wrap;
}
.goods-tui-main .main-items{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf6ef;
  width: 48%;
  box-sizing: content-box;
  margin: 2px 3.5px;
}
.goods-tui-main .main-items img{
   width: 100%;
}
.main-items .items-text .items-info{
  width: 150px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space :nowrap ;
  margin-left: 18px;
  color: #333;
  font-size: 18px;
  margin-top: 15px;
}
.main-items .items-text .items-des{
  width: 98px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space :nowrap ;
  margin-left: 2px;
  color: #635345;
  font-size: 14px;
  margin-top: 5px;
}
.main-items .items-text .items-price{
  color: #a92112;
  /* margin-top: 28px; */
  font-size: 16px;
  text-align: center;
}
.goods-tui-top h2 {
  display: block;
  color: #333;
  font-size: 18px;
}
.goods-tui-top h2 span {
  margin-left: 12px;
  font-size: 12px;
  color: #999;
}
.goods-tui-top a span{
  color: #999;
  margin-right: 10px;
}
.goods-tui-top a i {
  margin-left: 2px;
  color: #999;
  margin-right: 5px;
}
</style>