/*
通过mutation间隔更新state的多个方法的对象
 */

import  {
  RECEIVE_ADDRESS ,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORIES,
  RECEIVE_USERINFO,
  RESET_USERINFO ,

  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS ,
  DECREAMENT_FOOD_COUNT ,
  INCREAMENT_FOOD_COUNT,
  CLEART_CART ,
  RECEIVE_SEARCH_SHOPS
} from  './mutations-types'

import  {
  reqAddress ,
  reqFoodCategories ,
  reqShopList ,
  reqUserInfo ,
  reqLogout ,
  reqShopGoods ,
  reqShopInfo ,
  reqShopRatings ,
  reqSearchShop
} from '../api'

export  default {

  async getAddress({commit,state}){

    const  geohash = state.latitude +',' + state.longitude
    const result = await reqAddress(geohash)

    if (result.code === 0){
      const address = result.data

      commit(RECEIVE_ADDRESS , {address})
    }

  },

  async getCategories({commit}){

    const result = await reqFoodCategories()

    if (result.code === 0){
      const categories = result.data

      commit(RECEIVE_CATEGORIES , {categories})
    }

  },

  async getShops({commit,state}){
    const {latitude,longitude } = state
    const result = await reqShopList()

    if (result.code === 0){
      const shops = result.data

      commit(RECEIVE_SHOPS , {shops})
    }

  },

  recordUser({commit}, userInfo){
    commit(RECEIVE_USERINFO, {userInfo})
  },

  async getUserInfo ({commit}){
    const result = await reqUserInfo()
    if (result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },

  async logout({commit}){
    const result = await reqLogout()
    if (result.code === 0){
      commit(RESET_USERINFO)
    }
  } ,

  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if (result.code === 0){
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO , {info})
    }
  },

  async getShopGoods({commit} , callback){
    const result = await reqShopGoods()
    if (result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS , {goods})

      callback &&  callback()
    }
  },

  async getShopRatings({commit}, callback){
    const result = await reqShopRatings()
    if (result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS , {ratings})

      callback &&  callback()
    }
  },

  updateFoodCount({commit}, {isAdd , food}){
    if (isAdd) {
      commit(INCREAMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREAMENT_FOOD_COUNT, {food})
    }
  },

  cleartCart({commit} ){
    commit(CLEART_CART)
  },

  async searchShops({commit , state}, keyword){
    const  geohash = state.latitude +',' + state.longitude
    const result = await reqSearchShop(geohash , keyword)
    if (result.code === 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS , {searchShops})
    }
  },
}
