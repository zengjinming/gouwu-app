<template>
  <div class="detail-bottom">
    <div class="nav-xiaomi">
      <img src="~assets/img/detail/kefu.png" />
      <span>客服</span>
    </div>
    <div class="nav-dian">
      <img src="~assets/img/detail/dian.png" alt="" />
      <span>店铺</span>
    </div>
    <div class="nav-cart">
      <img src="~assets/img/detail/cart.png" alt="" />
      <span>购物车</span>
      <b>{{ totalNum }}</b>
    </div>
    <div class="nav-buy">
      <span class="add-cart" @click="buyClick">加入购物车</span>
      <span class="buy">立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      totalNum: 0
    }
  },
  mounted() {
    //  获取购物车商品信息，保存到data中
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    console.log(cart)
    this.cart = cart;
    this.computePN()
  },
  updated() {
    // console.log('uodate')

  },
  props: {
    goodsid: {
      type: String
    },
    goodsdetail: {
      type: Object
    }
  },
  methods: {

    computePN() {
      let cart = this.cart;
      console.log("棒棒的")
      if (cart.length > 0) {
        cart.forEach((v) => {
          this.totalNum += v.gnum
        })
      } else {
        return false
      }
      console.log(this.totalNum)
    },
    buyClick() {
      // 从本地中获取购物车中商品
      let cart = JSON.parse(sessionStorage.getItem("cart")) || []
      let buyid = this.goodsid;
      let index = cart.findIndex((v) => v.gid == buyid);
      if (index == -1) {
        console.log('嘿嘿')
        cart.push(this.goodsdetail)
      } else {
        // 存在,num++
        console.log(cart[index])
        cart[index].gnum++
      }
      console.log(buyid);
      this.$router.push({
        path: '/cart',
        query: {
          buyid: buyid
        }
      })
      alert('添加购物车成功');
      sessionStorage.setItem("cart", JSON.stringify(cart))
    }
  }
}
</script>

<style scoped>
.detail-bottom {
  z-index: 999;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  flex-shrink: 0;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-xiaomi {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.nav-xiaomi > img {
  width: 28px;
  opacity: 0.7;
}
.nav-xiaomi > span {
  font-size: 12px;
  margin-top: 2px;
}
.nav-dian {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.nav-dian > img {
  width: 28px;
  opacity: 0.8;
}
.nav-dian > span {
  font-size: 12px;
  margin-top: 2px;
}
.nav-cart {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.nav-cart > img {
  margin-top: 3px;
  width: 28px;
  opacity: 0.8;
}
.nav-cart > span {
  font-size: 12px;
  margin-top: 4px;
}
.nav-cart > b {
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(227, 13, 13);
}
.nav-buy {
  display: flex;
}
.nav-buy > span {
  text-align: center;
  line-height: 38px;
  width: 120px;
  height: 38px;
  font-weight: 600;
  color: #fff;
}
.nav-buy > span.add-cart {
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  background: linear-gradient(to right, rgb(240, 206, 123), rgb(221, 177, 81));
}

.nav-buy > span.buy {
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  background: linear-gradient(to right, rgb(240, 78, 46), rgb(213, 16, 16));
}
</style>