<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Home></Home>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div id="app">
    <router-view></router-view>
  </div> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/home.vue'

export default {
  name: 'App',
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
