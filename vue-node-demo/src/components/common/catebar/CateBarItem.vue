<template>
  <!--所有的item都同一个文字-->
  <div class="cate-bar-item" @click="textClick">
    <span :style="activeStyle"><slot name="item-text"></slot></span>
  </div>
</template>

<script>
  export default {
    name: "CateBarItem",
    props: {
      path: String
     /*  activeColor: {
        type: String,
        default: 'rgb(179, 169, 40)'
      } */
    },
    data() {
      return {
        // isActive: true
      //  isActive:false,
       activeColor:{
         color:'#fff',
         background:'linear-gradient(to right, rgb(241, 83, 56), rgb(223, 20, 15))'
       }
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor.color,background:this.activeColor.background} : {}
      }
    },
    methods: {
      textClick() {
        this.$router.replace(this.path.slice(9))
        // this.isActive=true;
      }
    }
  }
</script>

// 这里scoped可以去掉，因为如果加了这个，就作用域就是这个了
<style>
.cate-bar-item{
    
    flex-grow: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cate-bar-item span{
    margin: 0 15px;
    flex-grow: 1;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 13px;
    border-radius: 12px;
}
  
</style>
