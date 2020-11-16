<template>
  <div class="left-scoll">
    <div class="left-top">
      <div class="left" v-for="(item,index) in leftinfo" :key="index">
        <span :style="activeStyle">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
     return{
       leftinfo:[
         {
           text:'有品推荐'
         },
         {
           text:'家用家装'
         },
         {
           text:'家用电器'
         },
         {
           text:'智能家庭'
         },
         {
           text:'居家厨具'
         },
         {
           text:'运动户外'
         },
         {
           text:'鞋靴箱包'
         },
         {
           text:'日用文创'
         },
         {
           text:'电视影音'
         },
         {
           text:'服装配饰'
         },
         {
           text:'数码配件'
         },
         {
           text:'美妆个护'
         }
       ],
       isActive:false,
       activeColor:{
         color:'#fff',
         background:'linear-gradient(to right, rgb(241, 83, 56), rgb(223, 20, 15))'
       }
     }
   },
   computed:{
    /*  isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        // return this.$route.path.indexOf(this.path) !== -1
      }, */
       activeStyle() {
        return this.isActive ? {color: this.activeColor.color,background:this.activeColor.background} : {}
      }
   },
   methods:{
     textClick(){
       this.isActive=true;
      //  这里就可以实现路由的跳转，就是跳到相应的路径
     }
   }
}
</script>

<style>
.left-scoll{
    flex-grow: 1;
    border-top: 1px solid #b0b0b0;
    border-bottom: 1px solid #b0b0b0;
    display: flex;
    overflow: hidden;
}
.left-top{
  width: 95px;
  flex-shrink: 0;
  overflow: auto;
}
.left-top .left{
    
    flex-grow: 1;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left span{
    margin: 0 20px;
    flex-grow: 1;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 13px;
    border-radius: 12px;
}
</style>