<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/home.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/home_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/category.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/category_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <!-- <tab-bar-item path="/active">
      <template v-slot:item-icon>
        <div></div>
        <img src="~assets/img/tabbar/active.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/active_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>品味</div>
      </template>
    </tab-bar-item> -->
     <tab-bar-item path="/cart">
      <template v-slot:item-icon>
        <div></div>
        <img src="~assets/img/tabbar/cart.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/cart_activer.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/profile.png" alt="" />
      </template>
      <!-- <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt=""> -->
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/profile_active.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
