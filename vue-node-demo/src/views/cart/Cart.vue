<template>
  <div class="cart">
    <cart-bar :cartgoods="cartgoods"></cart-bar>
    <!-- <cart-show></cart-show> -->
  </div>
</template>

<script>
import CartBar from './childCart/CartBar'
import axios from 'axios'
// import CartShow from './childCart/CartShow'
export default {
  data(){
    return{
      cartid:'',
      cartgoods:{}
    }
  },
   components:{
     CartBar
    //  CartShow
   },
   mounted() {
    this.querygoods();//需要触发的函数
  },
    methods:{
      querygoods(){
        this.cartid=this.$route.query.buyid;
        let cid=this.cartid;
       //  这里的get和post在后端接受参数方式不一样
         axios.post('/api/detailgoods//selectCart',{cid}).then(res => {
           this.cartgoods = res.data[0];
         }).catch(err => {
           console.log(err);
         })
      }  
    }
}
</script>

<style>
.cart{
  width:100%;
}
</style>