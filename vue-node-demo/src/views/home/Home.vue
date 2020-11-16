<template>
  <div class="home">
    <nav-bar-top></nav-bar-top>
    <home-swiper></home-swiper>
    <title-item-center></title-item-center>
    <qing-cang></qing-cang>
    <zhong-chou></zhong-chou>
    <miao-sha></miao-sha>
    <xin-pin></xin-pin>
    <goods-tui></goods-tui>
  </div>
</template>

<script>
import NavBarTop from './childHome/NavBarTop'
import HomeSwiper from './childHome/HomeSwiper'
import TitleItemCenter from './childHome/TitleItemCenter'
import QingCang from './childHome/QingCang'
import ZhongChou from './childHome/ZhongChou'
import MiaoSha from './childHome/MiaoSha'
import XinPin from './childHome/XinPin'
import GoodsTui from './childHome/GoodsTui'
export default {
  name: 'Home',
  components:{
    NavBarTop,
    HomeSwiper,
    TitleItemCenter,
    QingCang,
    ZhongChou,
    MiaoSha,
    XinPin,
    GoodsTui
  }
}
</script>

<style scoped>
.home{
  background-color: rgb(244, 244, 244);
}
</style>
