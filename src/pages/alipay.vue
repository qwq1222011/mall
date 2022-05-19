<template>
    <div class="ali-pay">
        <order-header title="支付订单">
        </order-header>
        
    </div>
</template>

<script>
   import OrderHeader from '../components/OrderHeader.vue'
    export default{
        name:'alipay',
        components:{
            OrderHeader,
        }

                      
    }
</script>