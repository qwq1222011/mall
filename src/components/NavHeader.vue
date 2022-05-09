<template>
  <header class="header-top">
    <div class="baner">
      <div class="left">
        <li><a href="javascript:;">小米商城</a></li>
        <li><a href="javascript:;">MIUI</a></li>
        <li><a href="javascript:;">协议规则</a></li>
        <li><a href="javascript:;">云服务</a></li>
      </div>
      <div class="right">
        <li><a href="javascript:;" v-if="username">{{username}}</a></li>
        <li><a href="javascript:;" v-if="!username" @click="login">登录</a></li>
        <li><a href="javascript:;" v-if="username">我的订单</a></li>

        <li><a href="javascript:;" v-if="!username">注册</a></li>
        <li class="cart">
          <a href="javascript:;" @click="goToCart()">
            <img src="../../public/img/icon-cart-checked.png" />
            <span>购物车({{ cartCount }})</span>
          </a>
        </li>
      </div>
    </div>
  </header>
  <div class="header-bottom">
    <a href="" class="photo">
      <img src="../../public/img/logo-mi.png" />
    </a>

    <nav>
      <div class="item_menu">
        <span>小米手机</span>
        <div class="children">
          <ul>
            <li class="product" v-for="(item,index) in phoneList" :key="index">
              <a v-bind:href="'/product/'+item.id" target="_blank">
                <div class="pro_img">
                  <img v-lazy="item.mainImage" :alt="item.subtitle"/>
                </div>
                <div class="pro_name">{{item.name}}</div>
                <div class="pro_price">{{item.price}}元起</div>
              </a>
            </li>
            <!-- <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi 12 pro</div>
                <div class="pro_price">4699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi 12</div>
                <div class="pro_price">3699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi 12 x</div>
                <div class="pro_price">2699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi 11 青春活力版</div>
                <div class="pro_price">1799元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi civi</div>
                <div class="pro_price">2299元起</div>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
      <div class="item_menu">
        <span>reademe手机</span>
         <div class="children">
          <ul>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi civi 1s</div>
                <div class="pro_price">2299元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-2.png" />
                </div>
                <div class="pro_name">xiaomi 12 pro</div>
                <div class="pro_price">4699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-3.png" />
                </div>
                <div class="pro_name">xiaomi 12</div>
                <div class="pro_price">3699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-4.png" />
                </div>
                <div class="pro_name">xiaomi 12 x</div>
                <div class="pro_price">2699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-5.png" />
                </div>
                <div class="pro_name">xiaomi 11 青春活力版</div>
                <div class="pro_price">1799元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-6.png" />
                </div>
                <div class="pro_name">xiaomi civi</div>
                <div class="pro_price">2299元起</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="item_menu">
        <span>电视</span>
         <div class="children">
          <ul>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-1.png" />
                </div>
                <div class="pro_name">xiaomi civi 1s</div>
                <div class="pro_price">2299元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-2.png" />
                </div>
                <div class="pro_name">xiaomi 12 pro</div>
                <div class="pro_price">4699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-3.png" />
                </div>
                <div class="pro_name">xiaomi 12</div>
                <div class="pro_price">3699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-4.png" />
                </div>
                <div class="pro_name">xiaomi 12 x</div>
                <div class="pro_price">2699元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-5.png" />
                </div>
                <div class="pro_name">xiaomi 11 青春活力版</div>
                <div class="pro_price">1799元起</div>
              </a>
            </li>
            <li class="product">
              <a href="" target="_blank">
                <div class="pro_img">
                  <img src="../../public/img/nav-img/nav-6.png" />
                </div>
                <div class="pro_name">xiaomi civi</div>
                <div class="pro_price">2299元起</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="search">
      <input placeholder="小米手机" />
      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data(){
      return {
        username:'',
        phoneList:[]
      }
  },
  computed:{
currency(val){
       if(!val) return '0.00';
       return '￥'+val+'元起';
     }
  },
  // filters:{
  //    currency(val){
  //      if(!val) return '0.00';
  //      return '￥'+val.toFixed(2)+'元起';
  //    }
  // },
  mounted(){
     this.getProducList();
  },
  methods:{
    login(){
           this.$router.push('/login');
    },
    getProducList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
        }
      }).then((res)=>{
        if(res.list.length>6){
          this.phoneList=res.list.slice(0,6);
        }
      });
    },
     goToCart(){
         this.$router.push('/cart');
     }
  },
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
.header-top a:hover {
  color: #ffffff;
}
.header-top li {
  float: left;
  height: 39px;
  padding-right: 15px;
}
.header-top li a {
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
.header-top .cart {
  background-color: #666666;
}
.header-top .cart img {
  width: 16px;
  height: 12px;
  padding: 0px 5px;
}
.header-top .cart a:hover {
  color: #ff6600;
}

.header-bottom {
  width: 1226px;
  height: 112px;
  background: #ffffff;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.header-bottom .photo {
  display: inline-block;
  width: 55px;
  height: 55px;
  background-color: #ff6600;
}

.header-bottom .photo img {
  width: 55px;
  height: 55px;
}
.header-bottom nav {
  margin-left: -320px;
}

.header-bottom .search {
  display: flex;
  height: 40px;
}
.header-bottom .search input {
  width: 264px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-right: 0px;
}
.header-bottom .search button {
  width: 55px;
  height: 42px;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  background: url(../../public/img/icon-search.png) no-repeat center;
  background-size: 18px 18px;
  cursor: pointer;
}
.header-bottom .search button:hover {
  background: url(../../public/img/search.png) no-repeat center;
  background-size: 18px 18px;
  background-color: #ff6600;
}
.header-bottom nav .item_menu {
  display: inline-block;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  line-height: 112px;
  margin-right: 20px;
}
.header-bottom nav .item_menu span {
  cursor: pointer;
}
.header-bottom nav .item_menu span:hover {
  color: #ff6600;
}
.header-bottom nav .item_menu:hover .children {
  height: 220px;
  opacity: 1;
  border-top: 1px solid #e5e5e5;
}
.header-bottom nav .item_menu .children {
  position: absolute;
  top: 112px;
  left: 0;
  width: 1226px;
  height: 0;
  opacity: 0;
  overflow: hidden;
  box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
  z-index: 10;
  transition: all 0.5s;
  background-color: #ffffff;
}
.header-bottom nav .item_menu .children .product {
  position: relative;
  float: left;
  width: 16.6%;
  height: 220px;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
}
.header-bottom nav .item_menu .children .product a {
  display: inline-block;
}
.header-bottom nav .item_menu .children .product img {
  width: auto;
  height: 111px;
  margin-top: 26px;
}
.header-bottom nav .item_menu .children .product .pro_img {
  height: 137px;
}
.header-bottom nav .item_menu .children .product a .pro_name {
  font-weight: bold;
  margin-top: 19px;
  margin-bottom: 8px;
  color: $colorB;
}
.header-bottom nav .item_menu .children .product a .pro_price {
  color: #ff6600;
}
.header-bottom nav .item_menu .children .product::before{
   content:' ';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid $colorF;
                  height:100px;
                  width:1px;
}
.header-bottom nav .item_menu .children .product:last-child::before{
  display: none;
}
</style>