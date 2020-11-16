<template>
<div class="nav-bar-top">
  <nav-bar>
     <template v-slot:left>
       <img src="~assets/img/home/logo.png" alt="">
     </template>
     <template v-slot:center>
       <div class="search">
         <img src="~assets/img/home/icon_search.png" alt="">
         <input type="text" placeholder="搜一搜">
       </div>
     </template>
   </nav-bar>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
      NavBar
    }
}
</script>

<style >
   .nav-bar {
    background-color: rgb(132, 93, 50);
  }
  .nav-bar img{
    width:40px;
    margin-left: 12px;
    margin-top:15px;
  }
  .search{
    position: relative;
  }
  .search img{
    position: absolute;
    top: 4px;
    left: 12px;
    width: 22px;
  }
  .search input{
    font-size: 15px;
    text-indent: 3em;
    height: 35px;
    width: 335px;
    border-radius: 17.5px;
    color: #333;
    background-color: rgb(240, 240, 240);
    border: none;
    outline: none;
  }
</style>