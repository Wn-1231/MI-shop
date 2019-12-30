<template>
  <div id="app">
    <!-- 点击回到顶部 -->
    <a class="backTop">
      <a href="" class="a1">
        <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a5bd951d960c0ad6ea2c54770edfb2ff.gif" alt="">
      </a>  
      <a href="#" class="red-wallet">
        <i class="iconfont icon-double-arrow-up-"></i>
      </a>    
    </a>
    <router-view></router-view>
    
    <transition name="fade">
      <MiFooter v-show="isHomeFooter" ></MiFooter>
    </transition>
  </div>
</template>

<script>
import MiFooter from "./components/MiFooter/MiFooter.vue";
export default {
  name: 'app',
  components: {
    MiFooter
  },
  data(){
    return{
      isHomeFooter:true
    }
  },
  mounted(){
    
  },
  watch:{
    '$route.path': function (newVal, oldVal) {

      if (newVal == '/search') {
        this.isHomeFooter = false
      } else {
        this.isHomeFooter = true
      }
    }

  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  .backTop
    width 59px
    height 105px
    display block
    right 10px
    z-index 999
    position fixed
    bottom 55px
    .a1
      width 58px
      height 58px
      display block
      img 
        width 100%
        height 100%
    .red-wallet
      display block
      background-color #FEFEFE
      width 36px
      height 36px
      border-radius 50%
      line-height 36px
      text-align center
      margin 0 auto
      i
        color #CACACA
  .fade-enter-active, .fade-leave-active 
        transition: all 200ms;
  .fade-enter, .fade-leave-to 
        height 0px
        opacity 0

    


  // /* 显示的过渡样式 */
  //   .fade-enter-active {
  //     transition: all 1s;
  //   }
  //   /* 隐藏的过渡样式 */
  //   .fade-leave-active {
  //     transition: all 5s;
  //   }

  //   /* 隐藏时的样式 */
  //   .fade-enter, .yyy-leave-to {
  //     opacity: 0;
  //     transform: translateX(20px);
  //   }


</style>
