import Vue from 'vue'
import {createApp} from 'vue'
import routes from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'
// import App from './pages/home'

// createApp.config.productionTip=false;
// createApp(App).mount('#app')
// new Vue({
//     router:routers,
//     render:h => h(App),
// }).$mount('#app');
// Vue.config.productionTip = false;
// Vue.use(VueAxios,axios);

//根据前端的跨域方式做调整,代理就用下方的api
// axios.default.baseURL='/api';
// axios.defaults.timeout=8000;
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL=env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response){

    let res=response.data;
    if(res.status==0){
        return res.data;
    }
    else if(res.status ==10){
        window.location.href='/login'
    }else{
        alert(res.msg)
    }
})
const app = createApp(App);
app.use(routes);
app.use(VueAxios,axios);
app.mount('#app');
