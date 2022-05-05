<template>
  <footer>
    <div class="logo">
      <img src="../../public/img/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="" target="_blank">小米商城</a
      ><span>|</span>
      <a href="https://home.miui.com/" target="_blank"
        >MIUI</a
      ><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank"
        >米家</a
      ><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank"
        >米</a
      ><span>|</span>
      <a href="https://www.baidu.com" target="_blank"
        >百度一下</a
      >
    </div>
    <div class="copyright">Copyright ©2022 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/reset.scss";
footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>