<template>
  <div class="ali-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨慎钓鱼链接或者诈骗电话</span>
      </template>
    </order-header>
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import OrderHeader from "../components/OrderHeader.vue";
import loading from "../components/loading.vue";
export default {
  name: "alipay",
  components: {
    OrderHeader,
    loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      loading: true,
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "Vue高仿小米商城", //扫码支付时订单名称
          amount: 0.01, //单位元
          payType: 1, //1.支付宝，2，微信
        })
        .then((res) => {
          this.content = res.content;
          setTimeout(() => {
            document.forms[0].submit();
          }, 100);
        });
    },
  },
};
</script>