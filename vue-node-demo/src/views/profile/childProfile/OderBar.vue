<template>
    <div class="oder-bar">
      <div class="oder">
          <div v-for="(item,index) in oder" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.text}}</span>
          </div>
      </div>
    </div>
</template>

<script>
export default {
   name:'OderBar',
   data(){
     return{
       oder:[
         {
           img:require('../../../assets/img/profile/dai_fu_kuan.png'),
           text:'待付款'
         },
         {
           img:require('../../../assets/img/profile/dai_shou_huo.png'),
           text:'待收货'
         },
         {
           img:require('../../../assets/img/profile/remark.png'),
           text:'评价'
         },
         {
           img:require('../../../assets/img/profile/shou_hou.png'),
           text:'退款/售后'
         }
       ]
     }
   }
}
</script>

<style scoped>

.oder {
  background-color: #fff;
  height: 80px;
  display: flex;
  margin-bottom: 5px;
}
.oder>div {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.oder>div>img {
  width: 40px;
  height: 40px;
}
.oder>div>span {
  font-size: 12px;
  color: #00000099;
}
</style>