import Vue from 'vue'
import {createApp} from 'vue'
import routes from './router'
import App from './App.vue'
// import App from './pages/home'

// createApp.config.productionTip=false;
// createApp(App).mount('#app')
// new Vue({
//     router:routers,
//     render:h => h(App),
// }).$mount('#app');
// Vue.config.productionTip = false;
const app = createApp(App);
app.use(routes);
app.mount('#app');
