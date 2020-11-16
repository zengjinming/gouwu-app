<template>
  <div class="detail-goods">
    <div class="de-img">
      <img :src="userWithIcon.icon" alt=""/>
    </div>
    <div class="de-detail">
      <div class="de-detail-price">
        <span>￥</span>
        <span>{{goodsdetail.gprice}}</span>
      </div>
      <h3>{{goodsdetail.gname}}</h3>
      <div>{{goodsdetail.gdes}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      goodsdetail: {
        type: Object
      }
   },
 computed: {
  //  这个方法好厉害，优秀
  userWithIcon () {
    return { 
      ...this.goodsdetail, 
      icon: this.goodsdetail.gimg && require(`../../../assets/img/home/${this.goodsdetail.gimg}`)
    }
  }
}
}
</script>

<style>
.de-img{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f4f3f3;
  border: 1px solid #ececec;
}
.de-img img{
  width: 80%;
}
.de-detail{
  margin-top: 20px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: nowrap;
  align-items: flex-start;
  /* align-items: center; */
  flex-direction: column;
}

.de-detail h3{
  width: 100%;
  padding: 15px 0;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space :nowrap ;
}
.de-detail .de-detail-price span{
  /* color:rgb(199, 174, 109); */
  color: #a92112;
  font-size: 26px;
  font-weight: 900;
}
</style>