<template>
  <div class="cart-bar">
     <div class="cart-top">
        <div>购物车</div>
      </div>
      <div v-if="cart.length==0" class="cartm-content">
        <img src="~assets/img/cart/no_result_cart.png" />
        <p>购物车还没有商品哦~</p>
        <a href="#">去逛逛</a>
      </div>
      <div v-else="cart.length!=0" class="cart-content">
        <div class="cart-contentmain">
            <div class="cart-ctop">
              <!-- <img src="~assets/img/cart/icon_checkbox_uncheck_darkgray.png" alt=""> -->
              <input type="checkbox"  v-model="allChecked" @click="changeAll"/>
              <h2>有品精选</h2>
            </div>
            <div class="cart-buy">
              <div class="text clearfix" v-for="(item,index) in cart" :key="index">
                <!-- <img v-if="check" src="~assets/img/cart/icon_checkbox_uncheck_darkgray.png" alt="" @click="changCheck(index)" class="check">
                <img v-else="!check" src="~assets/img/cart/icon_checkbox_check_red.png" alt="" @click="changCheck(index)" class="check"> -->
                <input type="checkbox" :checked="item.gcheck" @click="changCheck($event,index)" />
                 <img  :src="require('../../../assets/img/home/'+item.gimg)" alt="" class="tu">
                 <p class="nametext"> {{item.gname}}</p>
                 <div class="annu">
                      <p class="priceText">￥ {{item.gprice}}</p>
                      <p class="numCompute">
                        <button class="dec" @click="computeNum($event,index)" data-comType='-1'>-</button>
                        <span>{{item.gnum}}</span>
                        <button class="add" @click="computeNum($event,index)" data-comType='+1'>+</button>
                      </p>
                 </div>
              </div>
            </div>
        </div>
         <div class="footNav">
            <div class="allcheck">
                <input type="checkbox" v-model="allChecked" @click="changeAll" />
                全选
            </div>
            <div class="compute">
                合计￥
                <span>{{totalPrice}}</span>
            </div>
            <div class="goPlay">
                支付({{totalNum}})
            </div>
      </div>
      </div>
      <!-- 底部导航 -->
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      cart:[],
      check:true,
      allChecked:false,
      totalPrice:'',
      totalNum:''

    }
  },
  props:{
    cartgoods: {
        type: Object
      }
  },
   mounted(){
        //  获取购物车商品信息，保存到data中
       let cart=JSON.parse(sessionStorage.getItem('cart'));
       if(cart==null){
         return false;
       }else if(cart!=null){
         this.cart=cart;
       }
    },
    updated(){
        // console.log('uodate')
        this.computePN()
    },
    methods:{
        computeNum(e,index){
            // console.log(e)
            let i=index
            // console.log(index)
            let typeC=e.target.dataset.comtype
            let cart =this.cart
            console.log(typeC);
            if(typeC =='-1'){
                // console.log('-1')
                if(cart[i].gnum>1){
                    cart[i].gnum-=1
                }
            }
            if(typeC =='+1'){
                // console.log('+')
                cart[i].gnum+=1
            }
            // sessionStorage.setItem("cart",JSON.stringify(cart));
        },
          computePN(){
            let cart=this.cart;
            let totalPrice=0;
            let totalNum=0;
            if(cart.length>0){
                cart.forEach((v)=>{
                    // console.log(typeof v.goods_price)
                    if(v.gcheck==true){
                        totalPrice+=v.gprice*v.gnum;
                        totalNum+=v.gnum;
                    }  
                })
            }else{
                return false
            }
            console.log(totalPrice,totalNum);
            this.totalPrice=totalPrice;
            this.totalNum=totalNum;
            sessionStorage.setItem("cart",JSON.stringify(cart))
        },
       changeAll(){
            // 全选
            this.allChecked=!this.allChecked;
            // console.log(this.allChecked)
            let cart=this.cart;
            if(cart.length>0){
                cart.forEach((v)=>{
                    if(this.allChecked==true){
                        v.gcheck=true
                    }else{
                        v.gcheck=false
                    }
                })
            }else{
                return false
            }    
            // console.log(cart)
        },
       changCheck(e,index){
          let checked=e.target.checked//点击后改变的状态
          console.log(checked,index);
          let cart=this.cart
          cart[index].gcheck=checked
            // console.log(cart)
          this.allChecked=cart.length?cart.every(v=>v.gcheck):false;
          sessionStorage.setItem("cart",JSON.stringify(cart));
        }
    },
  computed:{
     userWithIcon1 (item) {
       return { 
          icon1: this.item && require(`../../../assets/img/home/${item}`)
     }
   }
  }
}
</script>

<style scoped>
.cart-bar{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.cart-bar .cart-top{
   height: 88px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../../assets/img/cart/bg_page_header.png');
    background-repeat: no-repeat;
    background-size: 100%;
}
.cart-bar>.cart-top>div {
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  color: #fff;
}
.cart-bar>.cartm-content{
    height: 600px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* 居中对齐方式 */
  /* justify-content: center; */
  padding-top: 100px;
  align-items: center;
  background-color: rgb(244, 244, 244);
}
.cart-bar>.cart-content {
  height: 600px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* 居中对齐方式 */
  /* justify-content: center; */
  padding-top: 10px;
  align-items: center;
  background-color: rgb(244, 244, 244);
}
.cart-content .cart-contentmain{
  width: 95%;
  border-radius: 10px;
  background-color: #fff;
}
.cart-contentmain .cart-ctop{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
}
.cart-contentmain .cart-buy{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 20px;
  margin-left: 10px;
}

.cart-buy .text{
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.cart-buy .text .nametext{
  margin-top:5px;
  width: 200px;
  text-overflow:ellipsis;
  overflow: hidden;
  white-space :wrap ;
  height: 50px;
}

.cart-buy .text .annu{
  width: 60%;
  display: flex;
  position: absolute;
  justify-content: space-around;
  align-items: center;
  right: 0;
  bottom: 10px;
  
}
.cart-buy .text input{
  margin-top: 50px;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  /* margin:0 10px; */
}
.cart-buy .text img.tu{
  width: 35%;
  background-color: rgb(244, 244, 244);
}
.cart-buy .text p{
  padding-top: 10px;
}

.cart-buy .text .annu .priceText{
 color: #a92112;
 font-size: 18px;
}
.cart-buy .text .annu .numCompute{
  margin-right: 10px;
}
.cart-buy .text .annu .numCompute button{
  border: 0;
  margin: 0 10px;
  background-color: #fff;
  outline: none;
  font-size: 18px;
}
.cart-ctop input{
  width:25px;
  height: 25px;
  margin:0 10px;
}
.cart-bar>.cartm-content>img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.cart-bar>.cartm-content>p {
  font-size: 14px;
  margin: 20px 0;
  color: #666;
}
.cart-bar>.cartm-content>a {
  font-size: 15px;
  padding: 9px 15px;
  border: 1px solid rgb(102, 102, 102);
  border-radius: 24px;
  color: #666;
  background-color: #fff;
}
.footNav{
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  bottom: 48px;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  flex-shrink: 0;
  height: 60px;
  align-items: center;
}


</style>