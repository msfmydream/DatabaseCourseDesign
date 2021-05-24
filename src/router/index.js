import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import index  from  '../views/index'
import stockoverview from "../views/StockOverview";
import SingalView from "../views/SingalView";
import StockPut from "../views/StockPut";
import StockOut from "../views/StockOut";

Vue.use(VueRouter)

const routes = [
  {
    //一种懒加载新式  此处的component这样写以后可以不用在上方进行import
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/admin',
    name: 'index',
    component: index,
    children:[
      {
        path: "/stockoverview",
        name:"库存总览",
        component: stockoverview
      },,{
        path:"/singalview",
        name: "SingalView",
        component: SingalView
      },{
        path:"/stockput",
        name: "StockPut",
        component: StockPut
      },{
        path:"/stockout",
        name: "StockOut",
        component: StockOut
      }
    ]
  }
]

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     redirect:"/stockoverview",
//     component: App,
//     children:[
//       {
//         path:"/stockoverview",
//         name:"StockOverview",
//         component:StockOverview
//       },{
//         path:"/singalview",
//         name: "SingalView",
//         component: SingalView
//       },{
//         path:"/stockput",
//         name: "StockPut",
//         component: StockPut
//       },{
//         path:"/stockout",
//         name: "StockOut",
//         component: StockOut
//       }
//     ]
//   },
//   {
//     //一种懒加载新式  此处的component这样写以后可以不用在上方进行import
//     path: '/admin',
//     name: 'Login',
//     component: () => import('../views/login')
//   }
//   // {
//   //   path: '/error',
//   //   component: () => import('../views/error'),
//   //   hidden: true
//   // },
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
