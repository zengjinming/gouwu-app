<template>
<div class="nav-bar-top">
       <div class="search">
         <img src="~assets/img/home/icon_search.png" alt="">
         <input type="text" placeholder="小米联名款">
       </div>
</div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* .nav-bar-top{
  width: 100%;
  position: fixed;
} */
  .search {
  height: 45px;
  flex-shrink: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.search>img {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 17px;
  height: 17px;
}
.search>input {
  font-size: 12px;
  width: 100%;
  height: 35px;
  border-radius: 17.5px;
  text-indent: 3em;
  color: #999;
  background-color: rgb(245, 245, 245);
  border: none;
  outline: none;
}
</style>