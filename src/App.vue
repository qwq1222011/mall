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

    }
  },
  mounted(){
      // storage.setItem('user',{a:1});
  },
  components: {
    Home,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
