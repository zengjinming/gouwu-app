<template>
  <div class="profile-home">
    <!-- 这里必须绑定key，必须是index -->
    <div v-for="(item, index) in myinfo" :key="index" class="content-bottom">
      <div>
        <img :src="item.img" alt="" />
        <span>{{ item.text }}</span>
      </div>
      <div>
        <span class="youhui">{{item.you}}</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'ProfileHome',
  data() {
    return {
      myinfo: [
        {
          // 遍历的时候图片出不来，要用require，而且路径也要正确
          // 不能缩写 如~assets/img等是不能正确显示
          img: require('../../../assets/img/profile/icon_assets.png'),
          text: '我的资产',
          you:'优惠券/积分'
        },
        {
          img: require('../../../assets/img/profile/icon_collection.png'),
          text: '我的收藏',
          you:''
        },
        {
          img: require('../../../assets/img/profile/icon_address.png'),
          text: '地址管理',
          you:''
        },
        {
          img: require('../../../assets/img/profile/icon_qualifi.png'),
          text: '资质证照',
          you:''
        },
        {
          img: require('../../../assets/img/profile/icon_protocol.png'),
          text: '协议规则',
          you:''
        },
        {
          img: require('../../../assets/img/profile/icon_feedback.png'),
          text: '帮助与反馈',
          you:''
        }
      ]
    }
  }
}
</script>

<style>

.content-bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(229, 229, 229);
  background-color: #fff;
}
.content-bottom>div{
  display: flex;
  align-items: center;
}
.content-bottom>div>img {
  width: 38px;
  height: 38px;
}
.content-bottom>div>span {
  font-size: 14px;
  color: #333;
}
.content-bottom>div>span.youhui {
  font-size: 12px;
  color: #999;
}
.content-bottom>div>i {
  font-size: 18px;
}
</style>