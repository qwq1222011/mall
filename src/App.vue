<template>
   <div id="app">
     <router-view></router-view>
   </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import storage from './storege/index'
// import Home from './pages/home.vue'

export default {
  name: 'App',
  data(){
    return {
      // username:this.$store.state.username,
    }
  },
  mounted(){
      // storage.setItem('user',{a:1});
      //本地加载请求静态json文件
      // this.axios.get('/mock/user/login.json').then((res)=>{
      //          this.res=res;
      // });
      //使用easy-mock平台：
// this.axios.get('/user/login.json').then((res)=>{
//                this.res=res;
//       });
      // if(this.$cookie.get('userId')){
      // this.getUser();
      // this.getCartCount();
    // }
    // console.log(this.$cookies)
    if(this.$cookies.get('userId')){
      this.getUser();
      // this.getCartCount();
      console.log(111111);
    }
      
  },
  methods:{
    getUser(){
        this.axios.get('/user').then((res={})=>{
           //todo 保存到vuex里面
           console.log(res.username);
          this.$store.dispatch('saveUserName',res.username);
        })
    },
    getCartCount(){
         this.axios.get('/carts/products/sum').then((res)=>{
           //todo 保存到vuex里面
           this.$store.dispatch('saveCartCount',res)
        })
    },
  }
  
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss'; 
@import './assets/scss/config.scss'; 

@import './assets/scss/button.scss'; 

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
