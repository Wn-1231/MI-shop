<template>
<div class="detailDIV">
      
      <div class="phoneimg"
       v-for="(phone,index) in phonedetail" :key="index"
       v-if="!phonedetail.action_title && phonedetail.path_type !=='image'   ">
          <a href="#" ><img :src="phone.img_url" alt=""></a>
         
         <!-- 详情 -->
          <div class="detail" v-if="!phone.material_id">
              <!-- 名字 -->
              <div class="Name">
                {{phone.product_name}}
              </div>
              <!-- 简述 -->
              <div class="brief">
                  {{phone.product_brief}}
              </div>
              <!-- 价格 -->
              <div class="Price">
                <span class="PriceNew">￥{{phone.product_price}}起</span>
                <span class="PriceOld">{{phone.product_org_price==phone.product_price? '':`￥${phone.product_org_price}` }}</span>
              </div>
              <!-- 按钮 -->
              <div class="btn">
                  <div class="Button">立即购买</div>
              </div>
          </div>
        
      </div>


      <div class="ti" 
      v-if="phonedetail.action_title">{{phonedetail.action_title}} ></div>
      
      <div class="cells_auto_fill" 
     
          v-if="phonedetail.h">

        <img :src="phonedetail.img_url" alt="">
        
      </div>
</div>

  

 
  
</template>

<script type="text/ecmascript-6">
  export default {
    props:['phonedetail'],

    data(){
      return{
        isimgstyle:this.phonedetail
      }
    }
   
  }
</script>

<style scoped lang="stylus"  rel="stylesheet/stylus">
.detailDIV
  overflow hidden
  padding 3px 6px
  box-sizing border-box
  background-color white
  .phoneimg
    width 50%
    height 253px
    float left
    box-sizing border-box
    padding 2px
    a
      display block
      img 
        width 100%
        height 146px
    .detail
      width 100%
      height 107px  
      box-sizing border-box
      padding 10px 14px
      .Name
        width 100%
        text-align center
        vertical-align middle
        padding-top 5px
        color:rgba(0, 0, 0, 0.87);
        font-size 14.6px
        line-height 16.7px
        text-overflow:ellipsis;
        white-space nowrap
      .brief
        width 100%
        text-align center
        vertical-align middle
        padding-top 5px
        color:rgba(0, 0, 0, 0.54);
        font-size:11.5px;
        line-height:15.6x;
      .Price
        width 100%
        text-align center
        vertical-align middle
        padding-top 5px
        .PriceOld
          text-decoration line-through
          font-size:11.4644px;
          color:rgba(0, 0, 0, 0.54);
          text-decoration-color:rgba(0, 0, 0, 0.54);
          text-decoration-style:solid;
          text-size-adjust:100%;
      .btn
        width 100%
        padding-top 5px
        .Button
          text-align:center;
          vertical-align middle
          line-height:14px;
          font-size:12.5px;
          color:rgb(255, 255, 255);
          background-color:rgb(234, 98, 91);
          padding-bottom:8.3px;
          padding-top:8.3px;
          margin-left:23px;
          margin-right:23px;
          box-sizing:border-box;
          border-radius 4px
  .ti
    width 100%
    height 52px
    color: rgba(0,0,0,.6);   
    text-align: center
    font-size 14.6px
    line-height 52px
    border-top 1px solid  #F1F4F3
  .cells_auto_fill
    width 100%
    height 162px
    padding 8px 0
    background-color:rgb(245, 245, 245)
    img 
      width 100%
      height 100%

</style>
