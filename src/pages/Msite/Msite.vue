<template>
  <section class="msite">
    <!--首页头部-->

    <HeaderTop :title="address.name">
      <router-link to="/search" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="!userinfo._id ? '/login':'/userinfo'">
            <span class="header_login_text" v-if="!userinfo._id">登录|注册</span>
         <span class="header_login_text"  v-if="userinfo._id">
           <i class="iconfont icon-person"></i>
         </span>
          </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categories.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categories , index ) in categoriesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category , index ) in categories"  :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>

        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from "../../components/HeaderTop/HeaderTop"
import ShopList from "../../components/ShopList/ShopList"

export default {
    data(){
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(['address','categories','userinfo']),

    // 根据categories 一维数组 生成一个二位数组
    categoriesArr(){
      const {categories} = this

      const arr = []
      let minArr = []

      categories.forEach( c=>{

        if (minArr.length === 8){
          minArr = []
        }
        if (minArr.length === 0){
          arr.push(minArr)
        }
        minArr.push(c)
      })

      return arr
    }
  },
  watch: {
    categories(value ) {

      //界面更新立即调用创建Swiper对象
      this.$nextTick( ()=>{
        // swiper
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        })
      })
    }
  },
  mounted() {

    this.$store.dispatch('getCategories')
    this.$store.dispatch('getShops')

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%

    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px

      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%

        .icon-sousuo
          font-size 25px
          color #fff

      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center

        .header_title_text
          font-size 20px
          color #fff
          display block

      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)

        .header_login_text
          color #fff

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff

      .swiper-container
        width 100%
        height 100%

        .swiper-wrapper
          width 100%
          height 100%

          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap

            .link_to_food
              width 25%

              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0

                img
                  display inline-block
                  width 50px
                  height 50px

              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666

        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
