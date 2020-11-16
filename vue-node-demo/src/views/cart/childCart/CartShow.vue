<template>
  <div class="cart-show">
    <!-- cart-list-top -->
    <div class="cart-list-top">
      <h3>购物车</h3>
      <span>编辑</span>
    </div>
    <!-- cart-list -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cart-show {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
/* cart-list-top */
.cart-list-top {
  height: 88px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/img/cart/bg_page_header.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.cart-list-top > h3 {
  font-size: 20px;
  flex-grow: 1;
  text-align: center;
  color: #fff;
  margin-left: 50px;
}
.cart-list-top > span {
  font-size: 14px;
  padding-right: 20px;
  flex-shrink: 0;
  color: #fff;
}
</style>