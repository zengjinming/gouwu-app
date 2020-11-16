<template>
  <div class="login-bar">
    <div class="empty-login">
      <div class="left">
        <img src="~assets/img/profile/avatar.png" alt="">
        <span @click="login()">{{emptylogin}}</span>
      </div>
       <i class="iconfont icon-arrow-right"></i>
    </div>
   
  </div>
</template>

<script>
export default {
  data(){
    return{
      emptylogin:'请登录'
    }
  },
  methods:{
    login(){
      // this.$router.push('/helloworld');
      this.$router.push('/login');
    }
  }
   
}
</script>

<style>

@import  '~assets/fonts/iconfont1.css';
.login-bar{
  flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100px;
    background-image: url('~assets/img/profile/bg_top.png');
    background-size: 100%;
    background-repeat: no-repeat;
}
.empty-login{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.empty-login .left{
  display: flex;
  align-items: center;
}
.empty-login .left img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.empty-login .left span{
  font-size: 14px;
  padding-left: 20px;
  font-weight: 600;
  color: #fff;
}
.empty-login i{
   font-size: 24px;
   color: #bbb;
}

.empty-login .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    /* -moz-osx-font-smoothing: grayscale; */
}
.empty-login .icon-arrow-right:before {
    content: "\e635";
}

</style>