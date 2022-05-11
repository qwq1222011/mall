import Vue from 'vue'
import {createStore} from 'vuex'
import mutations from './mutations'
import actions from './action'

export default createStore({
  state:{
    username:'',//登录用0
    cartCount:0//购物车商品数量
  },
  mutations,
  actions
});