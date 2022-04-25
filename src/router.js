    //首先需要启动项目，在git bash中输入：npm run serve
    //封装router首先要将Vue和Router导进来。
    import {createRouter, createWebHistory} from 'vue-router'
 

// import Vue from 'vue'
// import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderlist'
import OrderPay from './pages/orderPay'
import Alipay from './pages/aliPay'







// 加载插件固定语法,代表已经将插件加载进去了。
// Vue.use(Router);
const routerHistory = createWebHistory()
 
const router = createRouter({
    history: routerHistory,
     /*
      *   在这里和vue2一样写路由配置
     */
     routes:[
        
        {
            path:'/',//设定路由的路径，为什么使用斜杠，是因为，首页，产品栈和商品详情使用一个大的副路由。
            name:'home',//首先加载home组件
            component:Home,//加载Home组件。
            redirect:'/index',
            children:[
                {
                  path:'index',//设定路由的路径，为什么使用斜杠，是因为，首页，产品栈和商品详情使用一个大的副路由。
                  name:'index',//首先加载home组件
                  component:Index,
                },

                {
                  path:'product/:id',//产品的这个动态id
                  name:'product',//首先加载home组件
                  component:Product,
                },

                {
                  path:'detail/:id',//产品的这个动态id
                  name:'detail',//首先加载home组件
                  component:Detail,
                },

                
            ]
        },

        //购物车的引用
        {
            path:'/cart',
            name:'cart',
            component:Cart,
           },
         //根组件
         {
          path:'/order',
          name:'order',
          component:Order,
          children:[
              {
                  path:'list',
                  name:'order-list',
                  component:OrderList,
              },

              {
                  path:'confirm',
                  name:'order-confirm',
                  component:OrderConfirm,
              },
              {
                  path:'pay',
                  name:'order-pay',
                  component:OrderPay,
              },
              {
                path:'/alipay',
                name:'ali-pay',
                component:Alipay,
              },
          ]
         },
    ]
});
export default router;


//导出一个对象
// export default new Router({
    //小米商城分了首页，产品栈，订单列表，订单确认，订单支付等页面。
    // 其中，首页和产品栈页面的头部和底部页面是一样的。需要涉及到子路由去进行嵌套。
    //配置子路由。
    //   routes:[
    //       {
    //           path:'/',//设定路由的路径，为什么使用斜杠，是因为，首页，产品栈和商品详情使用一个大的副路由。
    //           name:'home',//首先加载home组件
    //           component:Home,//加载Home组件。
    //           children:[
    //               {
    //                 path:'/index',//设定路由的路径，为什么使用斜杠，是因为，首页，产品栈和商品详情使用一个大的副路由。
    //                 name:'index',//首先加载home组件
    //                 component:Index,
    //               },

    //               {
    //                 path:'/product/:id',//产品的这个动态id
    //                 name:'product',//首先加载home组件
    //                 component:Product,
    //               },

    //               {
    //                 path:'/detail/:id',//产品的这个动态id
    //                 name:'detail',//首先加载home组件
    //                 component:Detail,
    //               },

                  
    //           ]
    //       },

    //       //购物车的引用
    //       {
    //         path:'/cart',
    //         name:'cart',
    //         component:Cart,
    //        },
    //        //根组件
    //        {
    //         path:'/order',
    //         name:'order',
    //         component:Order,
    //         children:[
    //             {
    //                 path:'/list',
    //                 name:'order-list',
    //                 component:OrderList,
    //             },

    //             {
    //                 path:'/confirm',
    //                 name:'order-confirm',
    //                 component:OrderConfirm,
    //             },
    //             {
    //                 path:'/pay',
    //                 name:'order-pay',
    //                 component:OrderPay,
    //             },
    //         ]
    //        },
    //   ]
// });