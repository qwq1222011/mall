<template>
        <!-- <order-header></order-header> -->
        <router-view ></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
</template>

<script>
// import NavHeader from '../components/NavHeader.vue'
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader.vue'
import ServiceBar from '../components/ServiceBar.vue'



    export default{
        name:'order',
        components:{
            OrderHeader,
            NavFooter, 
            ServiceBar,
        },
      
            
                      
    }
    
</script>