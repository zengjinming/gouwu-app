<template>
  <div class="miao-sha">
    <div class="miao-sha-top">
      <h2>
        有品秒杀
      </h2>
      <a href="#">
        <span>更多</span>
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <div class="miao-sha-main">
      <div class="main-items" v-for="(item,index) in data" :key="index">
        <img :src="require('../../../assets/img/home/'+item.mimg)" alt="" />
        <div class="items-text">
          <p class="items-info">{{item.mname}}</p>
          <p class="items-price">
            <span>￥</span>
            {{item.mprice1}}
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
      axios.get('/api/homegoods/selectMiao').then(res => {
           this.data = res.data;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
.miao-sha {
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
.miao-sha .miao-sha-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 2px;
}
.miao-sha .miao-sha-main{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
}
.miao-sha-main .main-items{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf6ef;
  width: 24%;
  box-sizing: content-box;
  margin: 0 2px;
}
.miao-sha-main .main-items img{
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
.main-items .items-text .items-price{
  color: #a92112;
  /* margin-top: 28px; */
  font-size: 16px;
  text-align: center;
}
.miao-sha-top h2 {
  display: block;
  color: #333;
  font-size: 18px;
}
.miao-sha-top h2 span {
  margin-left: 12px;
  font-size: 12px;
  color: #999;
}
.miao-sha-top a span{
  color: #999;
  margin-right: 10px;
}
.miao-sha-top a i {
  margin-left: 2px;
  color: #999;
  margin-right: 5px;
}
</style>