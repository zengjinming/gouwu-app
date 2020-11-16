<template>
  <swiper>
    <swiper-item >
      <img src="~/assets/img/home/s1.png" alt="">
    </swiper-item>
    <swiper-item >
      <img src="~/assets/img/home/s2.jpeg" alt="">
    </swiper-item>
    <swiper-item >
      <img src="~/assets/img/home/s3.jpeg" alt="">
    </swiper-item>
    <swiper-item >
      <img src="~/assets/img/home/s4.jpeg" alt="">
    </swiper-item>
    <swiper-item >
      <img src="~/assets/img/home/s5.jpeg" alt="">
    </swiper-item>
    <swiper-item >
      <img src="~/assets/img/home/s6.jpeg" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
   props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
}
</script>

<style scoped>
 img{
   border-radius: 0px;
 }   
</style>