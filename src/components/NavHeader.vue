<template>
  <header class="header-top">
    <div class="baner">
      <div class="left">
        <li><a href="">小米商城</a></li>
        <li><a href="">MIUI</a></li>
        <li><a href="">协议规则</a></li>
        <li><a href="">云服务</a></li>
      </div>
      <div class="right">
        <li><a href="">登录</a></li>
        <li><a href="">注册</a></li>
        <li class="cart"><a href="">
            <img src="../../public/img/icon-cart-checked.png">
            <span>购物车({{cartCount}})</span>
            </a></li>
      </div>
    </div>
  </header>
  <div class="header-bottom">
    <a href="" class="photo">
       <img src="../../public/img/logo-mi.png">
    </a>
     
      <nav>
        <li><a href="">小米手机</a></li>
        <li><a href="">reademe手机</a></li>
        <li><a href="">电视</a></li>
      </nav>
      <div class="search">
        <input placeholder="小米手机">
        <button></button>
      </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/reset.scss";

.header-top {
  width: 100%;
  height: 39px;
  background-color: #333333;
}
.header-top .baner {
  width: 1226px;
  height: 39px;
  margin: 0 auto;
}
.header-top .baner .left {
  float: left;
}
.header-top  li{
  float: left;
  height: 39px;
  padding-right:15px;
}
.header-top  li a{
  font-size: 12px;
  font-family: FZLanTingHeiS-R-GB;
  font-weight: bold;
  color: #b0b0b0;
  line-height: 39px;
  text-align: center;
}
.header-top .baner .right {
  float: right;
}
.header-top .cart{
    background-color: #666666;
}
.header-top .cart img{
    width: 16px;
    height: 12px;
    padding-right: 5px;
}
.header-top .cart a:hover{
  color: #ff6600;
}

.header-bottom{
  width: 1226px;
  height:112px;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-bottom .photo{
  display: inline-block;
  width: 55px;
  height: 55px;
  background-color: #ff6600;

}


.header-bottom  .photo img{
  width: 55px;
  height: 55px;

}
.header-bottom nav{
  margin-left: -320px;
}
.header-bottom li{
  float: left;
  padding-right: 20px;
}
.header-bottom li a{
 font-size: 16px;
  font-family: FZLanTingHeiS-R-GB;
  font-weight: bold;
  color: #333333;
}
.header-bottom li a:hover{
  color: #ff6600;
}
.header-bottom .search{
  display: flex;
  height: 40px;
}
.header-bottom .search input{
  width: 264px;
  height: 40px;
  border:1px solid #E0E0E0;
}
.header-bottom .search button{
  width: 55px;
  height: 42px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  background: url(../../public/img/icon-search.png);
}
</style>