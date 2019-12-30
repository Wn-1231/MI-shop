<template>
  <div class="search">

    <div class="searchHeader">
       <div class="back" @click="$router.back()">
         <i class="iconfont icon-arrow3"></i>
       </div>
        <div class="searchInput">
          <input type="text" placeholder="搜索商品名称">
        </div>
        <span>
          <i class="iconfont icon-sousuo1"></i>
        </span>
    </div>

    <!-- img热门 -->
    <div class="hot-Search">
      热门搜索
    </div>
    <div class="search-IMG">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0087312fb580d3b571178fbcb6b27f89.jpg?w=1080&h=300&bg=E2E6EF" alt="">
    </div>

    <div class="search-Key" v-if="search">
      <a href="" 
        :style="{'border': `1px solid ${item.border_n}`, 'background': `${item.back_n}`}"
        v-for="(item,index) in search.data.keywords"
        :key="index">
        {{item.word}}
      </a>
    </div>
    <!-- 常见分类 -->
    <div class="search-promotion-title">常用分类</div>
    <div class="search-title" v-if="search">
      <a href=""  v-for="(item,index) in search.data.hot_class" >
      {{  item.name}}
      </a>
      
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
// import search from "../../mock/search.json";
import { reqHomeSearch } from '../../api/index';
  export default {
    name:'search',
    data(){
      return{
        search:''
      }
    },
    async mounted(){
     let result = await reqHomeSearch()
     // 请求成功后,
      if (result.code===0) {
        this.search = result
         console.log( this.search);

      }
    }
  }
</script>
<style scoped lang="stylus"  rel="stylesheet/stylus">
.search
  width 100%
  overflow hidden
  .searchHeader
    width 100%  
    height 42px
    color #929292
    display flex
    justify-content space-between
    background-color #F2F2F2
    .back
      width 15%
      text-align:center;
      line-height 42px
      i 
        font-size 18px
    .searchInput
      width 70%
      font-size 15px
      line-height 42px
      input 
        width 100%
        height 28px
        outline none 
        padding-left 8px
    span 
      width 15%
      text-align:center;
      line-height 42px
      i 
        font-size 20px
  .hot-Search
    width 100%
    height 42px
    line-height 42px
    color: #3c3c3c;
    text-align: left;
    font-size 13px
    padding-left 16px
  .search-IMG
    width 100%
    height 105px
    img 
      width 100%
      height 100%
  .search-Key
    width 100%
    height 163px
    margin  5px 10px
    box-sizing border-box
    a
      display inline-block
      float left
      padding 7px 10px
      font-size 13px
      color #494545
      box-sizing border-box
      margin 5px
  .search-promotion-title
    padding-left 16px
    width 100%
    height 42px
    font-size 13px
    line-height 42px
  .search-title
    width 100%
    height 65px
    padding-left 16px
    margin-bottom 10px
    box-sizing border-box
    a
      display inline-block
      padding 0 8px
      margin 0 8px 8px 0
      box-sizing border-box
      height 31px
      background-color #F5F5F5
      text-align center
      line-height 31px
      color: rgba(0,0,0,.54);
      









 
</style>
