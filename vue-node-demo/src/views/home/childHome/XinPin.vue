<template>
  <div class="xin-pin">
    <div class="xin-pin-top">
      <h2>
        每日新品
      </h2>
      <a href="#">
        <span>更多</span>
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <div class="xin-pin-main">
      <div class="main-items" v-for="(item,index) in data" :key="index">
        <img :src="require('../../../assets/img/home/'+item.ximg)" alt="" />
        <div class="items-text">
          <p class="items-info">{{item.xname}}</p>
          <p class="items-price">
            <span>￥</span>
            {{item.xprice1}}
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
      axios.get('/api/homegoods/selectXin').then(res => {
           this.data = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.xin-pin {
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
.xin-pin .xin-pin-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 2px;
}
.xin-pin .xin-pin-main{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
}
.xin-pin-main .main-items{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf6ef;
  width: 24%;
  box-sizing: content-box;
  margin: 0 2px;
}
.xin-pin-main .main-items img{
   width: 100%;
}
.main-items .items-text .items-info{
  width: 80px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space :nowrap ;
  margin-left: 18px;
  color: #333;
  font-size: 14px;
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
.xin-pin-top h2 {
  display: block;
  color: #333;
  font-size: 18px;
}
.xin-pin-top h2 span {
  margin-left: 12px;
  font-size: 12px;
  color: #999;
}
.xin-pin-top a span{
  color: #999;
  margin-right: 10px;
}
.xin-pin-top a i {
  margin-left: 2px;
  color: #999;
  margin-right: 5px;
}
</style>