/*
直接更新state的多个方法的对象
 */
import  Vue from  'vue'

import  { RECEIVE_ADDRESS ,
  RECEIVE_CATEGORIES ,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO ,
  RESET_USERINFO ,
  RECEIVE_GOODS ,
RECEIVE_INFO,
  RECEIVE_RATINGS ,
  INCREAMENT_FOOD_COUNT ,
  DECREAMENT_FOOD_COUNT,
  CLEART_CART,
  RECEIVE_SEARCH_SHOPS

} from './mutations-types'
export  default {

  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },

  [RECEIVE_CATEGORIES](state, {categories}){
    state.categories = categories
  },

  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },

  [RECEIVE_USERINFO](state, {userInfo}){
    state.userinfo = userInfo
  },
  [RESET_USERINFO](state){
    state.userinfo = {}
  },

  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },

  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },

  [RECEIVE_INFO](state, {info}){
    state.info = info
  },

  [INCREAMENT_FOOD_COUNT](state, {food}){

    if (!food.count){
      //food.count = 1
      Vue.set(food , 'count', 1) //让新增的属性也有数据绑定

      state.cartFoods.push(food)
    } else {
      food.count ++
    }

  },

  [DECREAMENT_FOOD_COUNT](state, {food}){
    if (food.count ){
      food.count --
      if (food.count === 0){
        state.cartFoods.splice( state.cartFoods.indexOf(food) , 1 )
      }
    }

  },

  [CLEART_CART](state){

    state.cartFoods.forEach(food => food.count = 0)

    state.cartFoods = []

  },
  [RECEIVE_SEARCH_SHOPS](state, {searchShops}){
    state.searchShops = searchShops
  },

}
