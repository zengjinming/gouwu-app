<template>
  <div class="category">
    <nav-bar-top></nav-bar-top>
    <!-- <h1>This is a category page</h1> -->
    <!-- <left-scoll></left-scoll> -->
    <div class="page-content">
        <cate-left-bar></cate-left-bar>
        <div class="person-center-right">
		      <router-view></router-view>
	      </div>
    </div>
  </div>
</template>

<script>
import NavBarTop from './childCate/NavBarTop'
// import LeftScoll from './childCate/LeftScoll'
import CateLeftBar from 'components/content/cateLeftbar/CateLeftBar'
export default {
   components:{
     NavBarTop,
    //  LeftScoll
    CateLeftBar
  }
}
</script>

<style>
.page-content{
    flex-grow: 1;
    border-top: 1px solid #b0b0b0;
    border-bottom: 1px solid #b0b0b0;
    display: flex;
    overflow: hidden;
}
.person-center-right{
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    flex-grow: 1;
    overflow: auto;
    border-left: 1px solid #b0b0b0;
    background-color: #eee;
}

</style>