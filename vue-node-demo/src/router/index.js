import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }, */
    {
      path:'',
      redirect:'/home'
   },
   {
     path: '/home',
     name: 'Home',
     component: ()=>import('../views/home/Home.vue')
   },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import( '../views/cart/Cart.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import( '../views/profile/Profile.vue')
      
    },
    {
      path: '/active',
      name: 'Active',
      component: () => import( '../views/active/Active.vue')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import( '../views/category/Category.vue'),
      children: [
        {
          path:'',
          redirect:'tuijian'
       },
        {
          path: 'jiadian',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
          name: 'Jiadian',
          component: ()=>import('../views/category/childBar/jiadian.vue')
        },
        {
          path: 'tuijian',
          name: 'Tuijian',
          component: () =>import('../views/category/childBar/tuijian.vue')
        },
        {
          path: 'xiaoming',
          name: 'Xiaoming',
          component: () =>import('../views/category/childBar/xiaoming.vue')
        },
        {
          path: 'bao',
          name: 'Bao',
          component: () =>import('../views/category/childBar/bao.vue')
        },
        {
          path: 'chuju',
          name: 'Chuju',
          component: () =>import('../views/category/childBar/chuju.vue')
        },
        {
          path: 'jiazhuang',
          name: 'Jiazhuang',
          component: () =>import('../views/category/childBar/jiazhuang.vue')
        },
        {
          path: 'movies',
          name: 'Movies',
          component: () =>import('../views/category/childBar/movies.vue')
        },
        {
          path: 'shirt',
          name: 'Shirt',
          component: () =>import('../views/category/childBar/shirt.vue')
        },
        {
          path: 'shuma',
          name: 'Shuma',
          component: () =>import('../views/category/childBar/shuma.vue')
        },
        {
          path: 'sport',
          name: 'Short',
          component: () =>import('../views/category/childBar/sport.vue')
        },
        {
          path: 'text',
          name: 'Text',
          component: () =>import('../views/category/childBar/text.vue')
        },
        {
          path: 'zhineng',
          name: 'Zhineng',
          component: () =>import('../views/category/childBar/zhineng.vue')
        },
        {
          path: 'meizhuang',
          name: 'Meizhuang',
          component: () =>import('../views/category/childBar/meizhuang.vue')
        }
      ]
    },
    {
      path:'/helloworld',
      name:'HelloWorld',
      component:()=>import('../components/HelloWorld.vue')
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('../views/login/Login.vue')
    },
    {
        path:'/register',
        name:'Register',
        component:()=>import('../views/register/Register.vue')
    },
    {
      path:'/detail',
      name:'Detail',
      component:()=>import('../views/detail/Detail.vue')
    }
  ]
})
