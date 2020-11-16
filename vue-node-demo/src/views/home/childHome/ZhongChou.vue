<template>
  <div class="zhong-chou">
    <div class="zhong-chou-top">
      <h2>
        小米众筹
        <span>永远好奇 永远年轻</span>
      </h2>
      <a href="#">
        <span>更多</span>
        <i class="fa fa-angle-right"></i>
      </a>
    </div>
    <div class="zhong-chou-main">
      <div class="main-items">
        <img src="~assets/img/home/xiao2.png" alt="" />
        <div class="items-text">
          <p class="items-info">智能按摩头盔</p>
          <p class="items-price">￥ 599</p>
        </div>
      </div>
      <div class="main-items">
        <img src="~assets/img/home/xiao3.png" alt="" />
        <div class="items-text">
          <p class="items-info">地道螺蛳粉</p>
          <p class="items-price">￥ 49</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../../../assets/fa/css/all.css';
.zhong-chou {
  margin-top: 10px;
  box-sizing: border-box;
  margin-left: 10px; 
  margin-right: 10px;
  display: flex;
  width: 95%;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  align-items: center;
  padding-bottom: 10px;
}
.zhong-chou .zhong-chou-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 2px;
}
.zhong-chou .zhong-chou-main{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
}
.zhong-chou-main .main-items{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(248,248,248);
  width: 50%;
  box-sizing: content-box;
  margin: 0 4px;
}
.zhong-chou-main .main-items img{
   width: 80%;
}
.main-items .items-text .items-info{
  color: #333;
  font-size: 14px;
}
.main-items .items-text .items-price{
  color: #a92112;
  /* margin-top: 28px; */
  font-size: 16px;
  text-align: center;
}
.zhong-chou-top h2 {
  display: block;
  color: #333;
  font-size: 18px;
}
.zhong-chou-top h2 span {
  margin-left: 12px;
  font-size: 12px;
  color: #999;
}
.zhong-chou-top a span{
  color: #999;
  margin-right: 10px;
}
.zhong-chou-top a i {
  margin-left: 2px;
  color: #999;
  margin-right: 5px;
}
</style>