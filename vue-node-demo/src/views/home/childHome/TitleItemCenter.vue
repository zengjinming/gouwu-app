<template>
  <div class="title-item-center">
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/shang_xin.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>每日更新</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/zhong_chou.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>小米众筹</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/miao_sha.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>有品秒杀</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/pai_hang.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>热销排行</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/li_fan.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>下单立返</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/bao_you.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>9.9包邮</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/zhi_bo.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>每日直播</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/sheng_huo.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>智能生活</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/zi_ying.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>小米自营</span>
      </template>
    </title-item>
    <title-item>
      <template v-slot:top>
        <img src="~assets/img/home/zhuang_yuan.png" alt="">
      </template>
      <template v-slot:bottom>
        <span>小米庄园</span>
      </template>
    </title-item>
  </div>
</template>

<script>
import TitleItem from 'components/common/titleitem/TitleItem'
export default {
   components:{
     TitleItem
   }
}
</script>

<style>
   .title-item-center{
     display: flex;
     flex-wrap: wrap;
     padding: 0 10px;
   }
   .title-item{
     box-sizing: border-box;
    width: 20%;
    padding: 0 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   .title-item img{
     width:100%;
   }
   .title-item span{
     padding-top: 5px;
    font-size: 13px;
   }
</style>