<template>
  <div class="Register">
    <div class="register-container">
      <!-- login-top -->
      <div class="register-top">
        <h2>注册小米账号</h2>
      </div>
      <!-- login-content -->
      <div class="register-content">
        <!-- login-user -->
        <div class="register-user">
          <form action="" name="login" class="register">
            <label for="">
              <input v-model="username" type="text" class="user" name="user" autocomplete="off" placeholder="用户名" datatype="userName" sucmsg=" "/>
              <span class="Validform_checktip"></span>
            </label>
            <label for="">
              <input v-model="userphone" type="text" class="phone" name="phone" autocomplete="off" placeholder="手机号" datatype="m" nullmsg="不能为空" errormsg="请输入正确的手机号" sucmsg=" "/>
              <span class="Validform_checktip"></span>
            </label>
            <label for="">
              <input v-model="userpossword" type="password" class="pwd" name="pwd" placeholder="密码" datatype="s3-20" nullmsg="不能为空" sucmsg=" "/>
            </label>
            <label for="">
              <input @click="add1User" type="button" class="btn-login" name="btn-login" value="立即注册"/>
            </label>
            <label for="">
              <input type="button" class="btn-toggle" name="btn-toggle" value="小米登录"/>
            </label>
          </form>
        </div>
      </div>
      <!-- login-bottom -->
      <div class="register-bottom">
        <div class="other-register">
          <p>其它方式登录</p>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div class="other-font">
          <span class="show">简体</span>
          <b>|</b>
          <span>繁体</span>
          <b>|</b>
          <span>English</span>
          <b>|</b>
          <span>常见问题</span>
          <b>|</b>
          <span>隐私政策</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
     return{
       username:'',
       userphone:'',
       userpossword:''
     }
   },
   methods:{
     add1User(){
      //  因为v-model可以实现双向绑定，所以当
      // 用户输入 姓名、手机号、密码时，可以把这些值赋给它们
       let username=this.username;
       let phone=this.userphone;
       let possword=this.userpossword;
      //  通过axios向后端传递数据
      axios.post('/api/user1/add1User',{
        username,phone,possword
      }).then(res=>{
        // alert('该用户注册成功')
        alert(res.data.msg);
        if(res.data.status==2){
          // 如果是注册成功，则跳转到登录页面
          this.$router.push('/login');
        }
      }).catch(err=>{
        console.log(err);
      })
     }
   }
}
</script>

<style scoped>
.Register{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('~assets/img/login/bg_img.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
/* login-container */
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   margin-top: 100px;
}
/* login-top */
.login-top {}
.register-top>h2 {
  margin-bottom: 40px;
  font-size: 24px;
  color: #666;
}


/* login-content */
.register-content {}
.register-content>div {}
.register-content>div>.edit-mode {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.register-content>div>.edit-mode>a {
  font-size: 16px;
  color: #9b9b9b;
}
.register-content>div>.edit-mode>b {
  font-size: 14px;
  color: #666;
  padding: 0 10px;
}
.register-content>div>form {}
.register-content>div>form>label {
  display: flex;
  justify-content: center;
  position: relative;
}
.register-content>div>form>label>input {
  outline: none;
  font-size: 14px;
  height: 55px;
  width: 320px;
}
/* login-user */
.register-user>form {}
.register-user>form>label {
  display: flex;
  flex-direction: column;
}
.register-user>form>label>span {
}
.register-user>form>label>input[name=user] {
  border: none;
  outline: none;
  font-size: 14px;
  height: 55px;
  width: 320px;
  text-indent: 1em;
  border-bottom: 1px solid #D1A96E;
}
.register-user>form>label>input[name=phone] {
  border: none;
  outline: none;
    font-size: 14px;
    height: 55px;
    width: 320px;
  text-indent: 1em;
  border-bottom: 1px solid #D1A96E;
}
.register-user>form>label>input[name=pwd] {
  border: none;
  outline: none;
    font-size: 14px;
    height: 55px;
    width: 320px;
  text-indent: 1em;
  border-bottom: 1px solid #D1A96E;
}
.register-user>form>label>input[name=btn-login] {
  border: none;
  margin: 15px 0;
  height: 45px;
  border-radius: 27.5px;
  font-size: 18px;
  color: #fff;
  background: #ff6700;
}
.register-user>form>label>input[name=btn-toggle] {
  border: none;
  height: 45px;
  font-size: 18px;
  border-radius: 27.5px;
  color: #333;
  background: rgba(0,0,0,.06);
}

/* login-bottom */
.register-bottom {
  margin-top: 40px;
}
.register-bottom>.other-register {
  text-align: center;
}
.register-bottom>.other-register>p {
  padding-bottom: 20px;
  text-align: center;
  font-size: 13px;
  color: #333;
}
.register-bottom>.other-register>a {
  margin: 0 10px;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url('~assets/img/login/icons_type.png');
  background-repeat: no-repeat;
  background-size: 154.555555px 26px;
}
.register-bottom>.other-register>a:nth-child(2) {
  background-image: url('~assets/img/login/apple.png');
  background-size: 24px;
  background-position: 3px 2px;
  background-color: #000;
}
.register-bottom>.other-register>a:nth-child(3) {
  background-position: -52px 2px;
  background-color: #ed9090;
}
.register-bottom>.other-register>a:nth-child(4) {
  background-size: 118.888888px 20px;
  background-position: -62px 5px;
  background-color: #6bb6ea;
}
.register-bottom>.other-register>a:nth-child(5) {
  background-size: 118.888888px 20px;
  background-position: -91px 5px;
  background-color: #00be00;
}
.register-bottom>.other-font {
  margin-top: 80px;
}
.register-bottom>.other-font>span {
  padding: 0 5px;
  font-size: 14px;
  color: #9b9b9b;
}
.register-bottom>.other-font>span.show {
  color: #191919;
}
.register-bottom>.other-font>b {
  font-size: 14px;
  color: #9b9b9b;
}
</style>