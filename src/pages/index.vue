<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu_item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">电源 配件</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu_item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, j) in item" :key="j">
                    <a v-bind:href="'/product/' + sub.id">
                      <img v-bind:src="sub.img" alt="" />
                      {{ sub.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <swiper
          class="swiper"
          effect="cube"
          :autoplay="swiper_options.autoplay"
          :loop="swiper_options.loop"
          :speed="swiper_options.speed"
          :pagination="swiper_options.pagination"
          :navigation="swiper_options.navigation"
          :spaceBetween="swiper_options.spaceBetween"
          :centeredSlides="swiper_options.centeredSlides"
          :slidesPerView="swiper_options.slidesPerView"
        >
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a v-bind:href="'/product/' + item.id"
              ><img v-bind:src="item.img"
            /></a>
          </swiper-slide>

          <!-- Optional controls -->
          <!-- <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
        >
          <img v-lazy="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/product/30">
          <img v-lazy="'/img/banner-1.png'" />
        </a>
      </div>
      <div class="product-box">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/product/35"><img src="../../public/img/mix-alpha.jpg" /></a>
            
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index) in phoneList" :key="index">
              <div class="item" v-for="(item, j) in arr" :key="j">
                
                <div class="item-img">
                  <img :src="item.mainImage" alt="" />
                </div>
                <div class="itm-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元起</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <service-bar></service-bar>
      <modal title="提示" 
             sureText="查看购物车" 
             btnType="3" 
             modalType="middle" 
             :showModal="showModal"
             @submit="submit"
             @cancel="showModal=false">
        <template v-slot:body>
          <p>商品添加成功！</p>
        </template>
      </modal>
    </div>
  </div>
</template>


<script >
import ServiceBar from "./../components/ServiceBar.vue";
import Modal from "./../components/Modal.vue"
import { reactive } from "vue";
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectCube,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cube";


// import ""

SwiperCore.use([Autoplay, Pagination, EffectCube, Navigation]);

export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal,
  },
  setup() {
    // swiper相关配置属性放在swiper_options这个变量里
    //
    let swiper_options = reactive({
      autoplay: {
        disableOnInteraction: false, // 鼠标滑动后继续自动播放
        delay: 4000, //4秒切换一次
      },
      speed: 500, //切换过渡速度
      loop: true,
      slidesPerView: "1", //解决最后一张切换到第一张中间的空白
      centeredSlides: true, //设置slide居中
      spaceBetween: 20,

      //   coverflowEffect: {
      //     // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
      //     stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
      //     depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
      //     modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
      //     // slideShadows: false, //开启slide阴影。默认 true。
      //   },
      navigation: {
        nextElRef: ".swiper-button-next",
        prevElRef: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
      },
    });

    // 将swiper_options返回给模板中的swiper组件使用
    return { swiper_options };
  },
  data() {
    return {
      slideList: [
        {
          id: "42",
          img: "/img/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/img/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/img/slider/slide-3.jpg",
        },
        {
          id: "47",
          img: "/img/slider/slide-4.jpg",
        },
      ],
      menuList: [
        // 第一行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
        //  第二行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
        // 第三行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
        // 第四行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
        //  第五行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
        //  第六行
        [
          {
            id: 30,
            img: "/img/item-box-1.png",
            name: "小米 CIVI",
          },
          {
            id: 31,
            img: "/img/item-box-2.png",
            name: "redmi k49",
          },

          {
            id: 32,
            img: "/img/item-box-3.jpg",
            name: "note 11 pro",
          },
          {
            id: 33,
            img: "/img/item-box-2.png",
            name: "xiaomi fold",
          },
        ],
      ],
      adsList: [
        {
          id: 33,
          img: "/img/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/img/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/img/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/img/ads/ads-4.jpg",
        },
      ],
      phoneList: [
        
      ],
      showModal:false,
    };
  },
  mounted(){
       this.init();
  },
  methods:{
      init(){
        this.axios.get('/products',{
           params:{
              categoryId:100012,
              pageSize:8,
           }
        }).then((res)=>{
          // res.list=res.list.slice(6,14);
          console.log(res);
            this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)];
        })
      },
      addCart(id){
        
        
        this.axios.post('/carts',{
          productId:id,
          selected:true
        }).then((res)=>{
         this.showModal = true;
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        })
        return;
      },
      goToCart(){
        this.$router.push('/cart');
      },
      submit(){
        this.showModal=false;
      }
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    width: 1226px;
    height: 451px;
    margin: 0 auto;
    .nav-menu {
      position: absolute;
      width: 261px;
      height: 451px;
      box-sizing: border-box;
      z-index: 9;
      padding: 26px 0px;
      background: rgba(105, 101, 101, 0.6);
      .menu-wrap {
        .menu_item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &::after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: "";
              @include bgImg(10px, 15px, "../../public/img/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 449px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 261px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;

              li {
                width: 40%;
                height: 75px;
                line-height: 75px;
                z-index: 20;

                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .swiper {
      width: 1226px;
      height: 451px;
      .swiper-button-prev {
        left: 270px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    width: 1226px;
    margin: 0 auto;
    margin-bottom: 50px;
    a {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      display: block;
      width: 1226px;
      margin: 0 auto;
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      width: 1226px;
      margin: 0 auto;
      display: flex;
      .banner-left{
        margin-right: 16px;
        img{
          width: 224px;
          height: 619px;
        }
      }
      .list-box{
        .list{
          display: flex;
          justify-content: space-between;
          width: 986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding-top: 30px;
            box-sizing: border-box;
            
            .item-img{
              img{
                height: 195px;
                width: 100%;
              }
            }
            .itm-info{
                h3{
                  font-size: 14px;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price{
                     font-size: 14px;
                     font-weight: bold;
                     color:#F20A0A;
                     cursor: pointer;
                     &::after{
                       content: "";
                       @include bgImg(22px,22px,'../../public/img/icon-cart-hover.png');
                       vertical-align: middle;
                       margin-left: 5px;
                     }
                }
            }
          }
        }
      }
    }
  }
}
</style>