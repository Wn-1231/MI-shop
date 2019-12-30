<template>
 <div class="footer-guide">
    <span class="guide-item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span>
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/category'}" @click="goto('/category')">
      <span>
        <i class="iconfont icon-shapes-2"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/charshop'}" @click="goto('/charshop')">
      <span>
        <i class="iconfont icon-shop-cart-2"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide-item" :class="{on: $route.path==='/my'}" @click="goto('/my')">
      <span>
        <i class="iconfont icon-user"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'MiFooter',

  methods: {
    goto(path) {

     
      if (path === this.$route.path) return
       this.$router.replace(path)
    }
  },
  


    
  }
</script>

<style scoped lang="stylus"  rel="stylesheet/stylus">
.footer-guide
  width 100%
  height 45px
  display flex
  position fixed
  left 0
  bottom 0
  background #FFFFFF
  padding-top 5px
  z-index 99
  .guide-item
    display flex
    flex-direction column
    text-align center
    width 25%
    justify-content space-around
    color #999
    &.on
      color #ff6700
    span
      font-size 13px
      i
        font-size 20px
  
  


 
</style>
