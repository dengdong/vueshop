
import  Vue from 'vue'
import  VueRouter from 'vue-router'

// import Msite from "../pages/Msite/Msite";
// import Search from "../pages/Search/Search";
// import Profile from "../pages/Profile/Profile";
// import Order from "../pages/Order/Order";


const Msite = () => import('../pages/Msite/Msite')
const Search = () => import('../pages/Search/Search')
const Profile = () => import('../pages/Profile/Profile')
const Order = () => import('../pages/Order/Order')


import Login from "../pages/Login/Login";

import Shop from "../pages/Shop/Shop";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings";

Vue.use(VueRouter)
export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: Msite, //返回路由组件的函数，只有执行函数才会加载路由组件，这个函数在请求对应的路由 路径的时候才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
