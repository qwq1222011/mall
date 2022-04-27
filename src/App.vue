<template>
   <div id="app">
     <router-view></router-view>
   </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import storage from './storege/index'
import Home from './pages/home.vue'

export default {
  name: 'App',
  data(){
    return {
      res:{}
    }
  },
  mounted(){
      // storage.setItem('user',{a:1});
      //本地加载请求静态json文件
      this.axios.get('/mock/user/login.json').then((res)=>{

      });
      
  },
  components: {
    Home,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
