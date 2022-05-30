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
        mounted(){
            let path=this.$route.path;
            if(path=='/order/confirm')
            {
                this.title='订单确认',
                this.tip='请认真填写收货地址'
            }
            else if(path=='/order/list'){
                this.title='订单列表',
                this.tip='请谨慎钓鱼链接或者诈骗电话'
            }
            else if(path=='/order/pay'){
                this.title='订单支付',
                this.tip='请谨慎钓鱼链接或者诈骗电话'
            }
        }
      
            
                      
    }
    
</script>