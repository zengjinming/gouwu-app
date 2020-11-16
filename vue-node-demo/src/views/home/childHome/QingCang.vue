<template>
  <div class="qing-cang">
     <div v-for="(item,index) in qinginfo" :key="index">
       <img :src="item.img" alt="">
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      qinginfo:[
        {
          img:require('../../../assets/img/home/plaza1.png')
        },
        {
          img:require('../../../assets/img/home/plaza2.png')
        },
        {
          img:require('../../../assets/img/home/plaza3.png')
        },
        {
          img:require('../../../assets/img/home/plaza4.png')
        }
      ]
    }
  }
}
</script>

<style>
.qing-cang{
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    width: 100%;
}
.qing-cang div{
    width: 25%;
    box-sizing: border-box;
    padding: 0 2px;
}
.qing-cang div img{
  width: 100%;
}
</style>