<template>
<div class="app">
  <router-view></router-view>

  <FooterGuide v-show="$route.meta.showFooter" />
</div>
</template>

<script>

import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide";


export default {
  components:{
      FooterGuide
  },
  mounted() {

    // action 方式一
    //this.$store.dispatch('getAddress')

    // action 方式二
    this.getAddress();

    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
