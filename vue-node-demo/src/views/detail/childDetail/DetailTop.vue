<template>
  <div class="detail-top">
       <div class="link" @click="fan">
         <i  class="back iconfont icon-back"></i>
       </div>
       <div class="xiang">商品详情</div>
  </div>
</template>

<script>
export default {
   methods:{
     fan(){
       this.$router.push('/home');
     }
   }
}
</script>

<style scoped>
@import '../../../assets/fonts/iconfont1.css';
.detail-top{
  width: 100%;
    height: 60px;
    flex-shrink: 0;
    display: flex;
    flex-direction:wrap;
    /* justify-content: center; */
    align-items: center;
    background-image: url('../../../assets/img/cart/bg_page_header.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.detail-top .xiang{
  margin-left:120px;
  font-size: 22px;
  color: #fff;
}
.detail-top .link .back{
  margin-left: 10px;
  font-size: 30px;
  color: #fff;
}
</style>