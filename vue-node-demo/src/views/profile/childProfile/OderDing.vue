<template>
  <div class="oder-ding">
    <div class="oder">
      <span>我的订单</span>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
/* .oder-ding {
  display: flex;
  flex-direction: column;
  background-color: #fff;
} */
 .oder{
   margin-top: 5px;
   background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  border-bottom: 1px solid rgb(229, 229, 229);
}
.oder>span {
  font-size: 14px;
  color: #333;
}
.oder>i {
  font-size: 18px;
}
</style>