// import Vue from 'vue'
import {createApp} from 'vue'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import lazyPlugin from 'vue3-lazy'
import VueCookie from 'vue3-cookies'
// import { Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
// import env from './env'
// import App from './pages/home'

// mock开关
const mock = false;
if(mock){
  require('./mock/api');
}

// createApp.config.productionTip=false;
// createApp(App).mount('#app')
// new Vue({
//     router:routers,
//     render:h => h(App),
// }).$mount('#app');
// Vue.config.productionTip = false;
// Vue.use(VueAxios,axios);

//根据前端的跨域方式做调整,代理就用下方的api
// axios.defaults.baseURL='https://mock.presstime.cn/mock/6273373f830905001f16cea4/mall';
axios.defaults.baseURL='/api'
// axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response){

    let res=response.data;
    let path=window.location.pathname;
    if(res.status==0){
        return res.data;
    }
    else if(res.status == 10){
        console.log(path);
        if(path!='/login')
           window.location.href='/login';
        //    return Promise.reject(res);
    }else{
        alert(res.msg)
    }
});
const app = createApp(App);
app.use(routes);
app.use(store);
app.use(VueAxios,axios);
app.use(lazyPlugin,{
    loading:require('@/assets/loading-svg/loading-bars.svg'),
});
// app.config.globalProperties.$cookies=VueCookie;
app.use(VueCookie);
// app.use(VueLazyLoad,{
//   loading:'/imgs/loading-svg/loading-bars.svg'
// })
app.mount('#app');
