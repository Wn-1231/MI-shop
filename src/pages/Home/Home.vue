<template>
  <div class="homeContainer">

    <!-- home头 -->
      <div class="homeHeader">
        
        <div class="header-1">
          <img src="./imgs/logo.png" alt="logo">
          <div class="search">
            <span><i class="iconfont icon-search-" ></i></span>
            <div @click="$router.push('/search')" class="input"> 搜索商品名称</div>
          </div>
          <div class="user">
            <i class="iconfont icon-user"></i>
          </div>
        </div>

        <!-- 头部导航滑动 -->
        <div class="header-2" ref="personWrap" >
            <div class="headerChontainer" ref="personTab">
              <div class="header-nav"
                @click="goHomeRoute(index,nav)"
                 v-for="(nav,index) in navs" 
                :key="nav.page_id"
               >
                <span :class="{on:homeNavIndex ==index}" >{{nav.name}}</span>
              </div>
            </div>
        </div>

        <!-- 点击显示隐藏菜单 -->

        <div class="togglo"
         ref="togglo" 
         @click="clickTogglo"
         >
          <div :style="{'transform': toggloTransform ? 'rotateZ(0deg)':'rotateZ(180deg)'}" >
            <i class='iconfont icon-arrow-down-s-line' > </i>
          </div>
          
        </div>
        <!-- 切换的内容导航 -->
        <transition name="xxx">
            <div class="togglo-blcok" v-show="isTogglo">
              <h3 class="blcok-1" v-show="isTogglo">全部</h3>
              <div class="blcok-2" v-show="isTogglo">
                  <span
                    v-show="isTogglo"
                    :class="{togglo_On:toggloNavindex ==index}"
                    @click="goHomeRoute(index,nav)"
                    v-for="(nav,index) in navs" 
                    :key="nav.page_id">
                    {{nav.name}}
                    </span>
              </div>
            </div>
        </transition>

      </div>

      <!-- home主体滑动的块 -->
      <div class="homeMain" ref="homeMain1">

        <div class="homeMainContent" ref="homeMain" >
            <!-- home推荐 -->
          <div class="recommendMain" >

              <!--首页轮播 -->
              <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in SwiperImg" :key="item.material_id">
                      <img :src="item.img_url" alt="">
                    </div>
                </div>
                <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
              </div>

              <!--轮播下的图片导航  -->
              <div class="navImg-1">
                <a href="#" v-for="(item,index) in navImg1" :key="item.material_id"><img :src="item.img_url" alt="navimg"></a>
              </div>
              <div class="navImg-2">
                  <a href="#" v-for="(item,index) in navImg2" :key="item.material_id"><img :src="item.img_url" alt="navimg"></a>
              </div>

                <!-- 新人一元包邮 -->
              <div class="newPerson">
                <a href="#">
                  <img src="./imgs/1$.jpg" alt="">
                </a>
              </div>

              <!-- 小米mix Alpha -->
              <div class="alpha">
                <a class="alpha-1" href="#"><img src="./imgs/alpha.jpg" alt=""></a>
                <a class="alpha-2" href="#"><img src="./imgs/shouhuan.jpg" alt=""></a>
                <a class="alpha-3" href="#"><img src="./imgs/tehui.jpg" alt=""></a>
              </div> 
                
              <!-- 红米 -->
              <div class="redmi">
                <img src="./imgs/redmi.jpg" alt="">
              </div>

              <!-- 每日精选手机 -->
              <div class="dayxuan">
                <a href="#"><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440" alt=""></a>
              </div>
              <phoneIMG :phonedetail='phonedetail' ></phoneIMG>
              <phoneIMG :phonedetail='phonedetail2'></phoneIMG>
              <phoneIMG :phonedetail='phonedetail3'></phoneIMG>
              <phoneIMG :phonedetail='phonedetail4'></phoneIMG>
              
              <!-- 每日精选电视 -->
              <div class="dayxuan">
                <a href="#"><img src="http://i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp" alt=""></a>
              </div>
              <phoneIMG :phonedetail='miTV1' ></phoneIMG>
              <phoneIMG :phonedetail='miTV2' ></phoneIMG>
              <phoneIMG :phonedetail='miTV3' ></phoneIMG>
              <phoneIMG :phonedetail='miTV4' ></phoneIMG>
              <phoneIMG :phonedetail='miTV5' ></phoneIMG>
              
              <!-- 每日精选笔记本 -->
              <div class="dayxuan">
                <a href="#"><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fa21d026bd0a93b16b38ee20e96cab.jpg?thumb=1&w=720&h=440" alt=""></a>
              </div>
              <phoneIMG :phonedetail='nodebook1' ></phoneIMG>
              <phoneIMG :phonedetail='nodebook2' ></phoneIMG>
              <phoneIMG :phonedetail='nodebook3' ></phoneIMG>
              <phoneIMG :phonedetail='nodebook4' ></phoneIMG>
              <phoneIMG :phonedetail='nodebook5' ></phoneIMG>

              <!-- 每日精选家电 -->
              <div class="dayxuan">
                <a href="#"><img src="http://i8.mifile.cn/v1/a1/3466df89-e534-a68c-6504-2b6e0a704307.webp" alt=""></a>
              </div>
              <phoneIMG :phonedetail='divider1' ></phoneIMG>
              <phoneIMG :phonedetail='divider2' ></phoneIMG>
              <phoneIMG :phonedetail='divider3' ></phoneIMG>
              <phoneIMG :phonedetail='divider4' ></phoneIMG>
              <phoneIMG :phonedetail='divider5' ></phoneIMG>
              

              <!-- 米家智能 -->
              <div class="dayxuan">
                <a href="#"><img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df9f0ec1b502e3f7ca36779c7596c7c4.jpg?thumb=1&w=720&h=440" alt=""></a>
              </div>
              <!-- 智能产品 -->
              <div class="intelligent">
                <a href="">
                  <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c33f008a86c151a1500d44d599351256.jpg?thumb=1&w=360&h=360" alt="">
                </a>
                <a href="" class="aa">
                  <h3>小爱音箱万能遥控版</h3>
                  <p>传统家电秒变智能</p>
                  <div>
                    <span>￥149</span>
                    <span>￥199</span>
                  </div>
                </a>
                <a href="" class="aa">
                  <h3>米家照片打印机</h3>
                  <p>手机即拍即印</p>
                  <div>
                    <span>￥499</span>
                  </div>
                </a>
                <a href="">
                  <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/739c1321d2a05d48c0b8b86cd459c4d4.jpg?thumb=1&w=360&h=360" alt="">
                </a>
                <a href="">
                  <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/efae8106bc194e6a730294c9ee531caf.jpg?thumb=1&w=360&h=360" alt="">
                </a>
                <a href="" class="aa">
                  <h3>小米净水器600G</h3>
                  <p>600加仑大通量，即滤即饮无存水</p>
                  <div>
                    <span>￥2499</span>
                  </div>
                </a>
              </div>

              <phoneIMG :phonedetail='intelligent4' ></phoneIMG> 


              <!-- 更多米家详情img -->
              <div class="moreImg">
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17.webp" alt="">
                </a>
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/b79cb907-3ae4-2a35-6756-b243b386a95a.webp" alt="">
                </a>
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/b883172b-5aa3-7855-678f-c615109ee0a7.webp" alt="">
                </a>
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8.webp" alt="">
                </a>
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/52866372-7fe5-76c2-29a0-9ae32d07b8ff.webp" alt="">
                </a>
                <a href="">
                  <img src="http://i8.mifile.cn/v1/a1/ad91499a-59ab-adc3-8fd5-98aefc1c43b4.webp" alt="">
                </a>

              </div>

              <!--旧换新 -->
              <phoneIMG :phonedetail='old' ></phoneIMG>   
              <!-- 了解小米 -->
              <div class="knowMI">
                <a href="">
                  <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bbb5bac8089d890338b5bf8ff742cbbc.png?thumb=1&w=720&h=106" alt="">
                </a>
              </div>

          </div>
          
          <!-- home手机 -->

          <!-- home电视 -->

          <!-- home笔记本 -->

          <!-- home家电 -->

          <!-- home生活周边 -->

        </div>
      </div>
      
      
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Swiper from "swiper";
import "swiper/css/swiper.css";
import phoneIMG from "../../components/phoneIMG/phoneIMG";
import { reqHomeRecommend } from "../../api/index";
//请求
  export default {
    name:'home',
    data(){
      return{
        lefts:[],
        toggloTransform:true,
        isTogglo:false,
        toggloNavindex:0,                 //显示隐藏导航高亮
        homeNavIndex:0,                   // 滑动导航高亮
        navs:[],              //导航nav数据
        SwiperImg:[],    //轮播图
        navImg1:[],      //小导航图片第一列
        navImg2:[],      //小导航图片第二列
        phonedetail:[],  //前两个手机
        phonedetail2:[], //前两个手机
        phonedetail3:{},
        phonedetail4:{},
        miTV1:[],
        miTV2:[],
        miTV3:[],
        miTV4:{},
        miTV5:{},
        miTVBotton1:[],
        nodebook1:[],
        nodebook2:[],
        nodebook3:[],
        nodebook4:{},
        nodebook5:{},
        divider1:{},
        divider2:[],
        divider3:[],
        divider4:{},
        divider5:{},
        intelligent4:{},  //智能
        old:{},      //以旧换新
        knowMI:{},   //了解小米

      }
    },
      async mounted () {

      this._initLefts()  //获取left位置数组
      this.initScroll()   //new Scroll
      this.$nextTick(() => {
        let timer = setTimeout(() => { // 其实我也不想写这个定时器的，这相当于又嵌套了一层$nextTick，但是不这么写会失败
          if (timer) {
            clearTimeout(timer)
            this.initScroll()
          }
        }, 0)
      })
      
       //请求
       let result = await  reqHomeRecommend()
      // 请求成功后,
      if (result.code===0) {
        let Datas = result.data.data.sections
        this.navs=result.data.tabs
        this.SwiperImg =Datas[0].body.items   //轮播图
        this.navImg1 = Datas[1].body.items      //小导航图片第一列
        this.navImg2 = Datas[2].body.items      //小导航图片第二列
        this.phonedetail = Datas[12].body.items  //前两个手机
        this.phonedetail2 =Datas[14].body.items //前两个手机
        this.phonedetail3 = Datas[16].body.items[0]
        this.phonedetail4 = Datas[18].body.items[0]
        this.miTV1 = Datas[22].body.items
        this.miTV2 = Datas[24].body.items
        this.miTV3 = Datas[26].body.items
        this.miTV4 = Datas[28].body.items[0]
        this.miTV5 = Datas[30].body.items[0]
        this.miTVBotton1 = Datas[28].body.items
        this.nodebook1 = Datas[34].body.items
        this.nodebook2 = Datas[36].body.items
        this.nodebook3 = Datas[38].body.items
        this.nodebook4 = Datas[40].body.items[0]
        this.nodebook5 = Datas[42].body.items[0]
        this.divider1 = Datas[46].body.items
        this.divider2 = Datas[47].body.items
        this.divider3 = Datas[48].body.items
        this.divider4 = Datas[50].body.items[0]
        this.divider5 = Datas[52].body.items[0]
        this.intelligent4 = Datas[60].body.items[0]  //智能
        this.old = Datas[68].body.items[0]      //以旧换新
        this.knowMI = Datas[69].body.items[0]

      }

  },
   watch: {
      /* 
      1. 更新数据
      2. 立即同步调用监视回调函数
      3. 异步更新界面
      */
       SwiperImg () { // categorys变化: [] ==> [...]
        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          // swiper对象必须要在列表数据显示之后创建
          // new Swiper ('.swiper-container', {
          new Swiper (this.$refs.swiper, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          }) 
        })
      } 
    },

    methods: {
    //导航横向滑动newscroll
      initScroll () {
        let eleWidth = 35
        
        this.$refs.personTab.children.forEach((item,index) => {
          eleWidth +=item.clientWidth
        });
        //动态获取导航滑块的宽
        this.$refs.personTab.style.width = eleWidth+'px'

        // //动态获主体滑块的宽
        let homeMainWidth =0
        this.$refs.homeMain.children.forEach((item,index) => {
          homeMainWidth +=item.clientWidth
        });
        this.$refs.homeMain.style.width = homeMainWidth+'px'



        if (!this.leftScroll || this.homeScroll) {
          this.leftScroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,        // 忽略竖直方向的滚动
            eventPassthrough: "vertical"
          })

          //  this.homeScroll = new BScroll(this.$refs.homeMain1, {
          //   startX: 0,
          //   click: true,
          //   scrollX: true,
          //   scrollY: false,        // 忽略竖直方向的滚动
          //   eventPassthrough: "vertical"
          // })
        }else{
          this.leftScroll.refresh()
        }
      },

      //点击导航高亮  并且切还滑块的位置
      goHomeRoute(index,Rpath){
        //高亮
        if (this.toggloNavindex === index) return
        this.toggloNavindex = index
        this.homeNavIndex = index

        console.log(this.lefts);
        //切还滑块的位置
        
        let dist = 0
        for (let i = 0; i < this.lefts.length; i++) {
          
          if (i ==index) {
            dist = this.lefts[i] 
          }
        }
        this.$refs.homeMain.style.transform = `translateX(-${dist}px)`
        console.log();
        
        
      },
       _initLefts () {
        const lefts = []
        let left = 0
        lefts.push(left)
        const lis = Array.prototype.slice.call(this.$refs.homeMain.children)
        lis.forEach(li => {
          left += li.clientWidth
          lefts.push(left)
        })

        // 更新tops数据
        this.lefts = lefts
        console.log('left', lefts)
      },

      //显示隐藏
      clickTogglo(){
        this.toggloTransform = !this.toggloTransform 
        this.isTogglo=!this.isTogglo
      }
  },
    
    components:{
      phoneIMG
    },

  }
</script>

<style scoped lang="stylus"  rel="stylesheet/stylus">
.homeContainer
  width 100%
  height 100%
  .homeHeader
    position fixed
    z-index 55
    top 0
    left 0
    width 100%
    height 74px
    background rgb(242, 242, 242)
    .header-1
      height 44px
      display flex
      justify-content space-between
      align-items center
      box-sizing border-box
      padding 5px 12px 5px 13px
      img 
        width 25px
        height 17px
      .search
        width 271px
        height 33px
        padding-left 30px
        box-sizing border-box
        position relative
        background-color white
        span 
          position: absolute;
          left: 8px;
          top: 10px;
          color #C5C5C5
        .input 
          width 100%
          height 100%
          font-size 15px
          color: #C5C5C5
          outline none 
          line-height 33px
      .user
        i 
          font-size 20px
          color: #C5C5C5
    .header-2
      width 100%
      height 30px
      overflow hidden
      border-right 1px solid #fff
      
      .headerChontainer
        display flex
        width 1000px
        height 100%
        align-items center
        .header-nav
          padding 0 14px
          font-size 14px
          height 100%
          flex-shrink 0
          white-space: nowrap;
          vertical-align middle
          span 
            display inline-block
            height 100%
            line-height 28px
            box-sizing border-box
            color:rgb(116, 116, 116);
            font-size:13.5px
            &.on
              color: rgb(237, 91, 0);
              border-bottom 2px solid rgb(237, 91, 0);
    .togglo
      position absolute
      background rgb(242, 242, 242)
      top 43px
      right 0px
      width 35px
      height 29px
      z-index 99
      line-height 29px
      text-align center
      div
        transition transform 300ms
        i
          color #C2C2C2
          font-size 20px
          
    .togglo-blcok
      width 100%
      height 135px
      padding 0 13px
      position absolute
      z-index 10
      box-sizing border-box
      background #bfa
      top 43px
      background rgb(242, 242, 242)
      &.xxx-enter-active, .xxx-leave-active 
        transition: all 200ms;
      &.xxx-enter, .xxx-leave-to 
        height 0px
        opacity 0
    


      .blcok-1
        width 100%
        height 29px
        padding-top 13px
        color rgb(60, 60, 60)
        line-height 29px
        // box-sizing border-box
        font-size 15px
      .blcok-2
        span
          margin 7px
          display block
          float left
          width 20.9%
          height 30px
          line-height 30px
          border-radius 5px
          text-align center
          vertical-align middle
          color:rgb(60, 60, 60);
          font-size 13px
          background-color #FFFFFF
          box-sizing border-box
          border 0.5px solid rgb(229, 229, 229);
          &.togglo_On
            border 1px solid rgb(255, 103, 0)
            color rgb(255, 103, 0)
            background-color rgb(253, 224, 213)

        
  
  
  .homeMain
    padding-top 74px
    overflow hidden
    width 100%
    .homeMainContent
      display flex
      transition all 300ms
      .recommendMain
        width 100vw
        background-color rgb(245, 245, 245)
        padding-bottom 50px
        float left
        display inline-block
        .swiper-container
          width 100vw
          height 187px
          overflow hidden
          .swiper-wrapper
            height 100%
            .swiper-slide
              height 187px
              img 
                width 100vw
                height 100%
        .navImg-1
          width 100%
          height 79px
          img 
            width 20%
            height 100%
            float left
        .navImg-2
          width 100%
          height 79px
          img 
            width 20%
            height 100%
            float left
        .newPerson
          width 100%
          height 134px
          padding 8px 0
          background-color rgb(245, 245, 245);
          a
            img 
              width 100%
              height 145.9px
        .alpha
          width 375.2px
          height 265px
          .alpha-1
            width 50%
            height 100%
            float left
            padding 1px
            box-sizing border-box
            img 
              width 100%
              height 100%
          .alpha-2 
            width 50%
            height 50%
            float left
            padding 1px
            box-sizing border-box
            img 
              width 100%
              height 100%
          .alpha-3
            width 50%
            height 50%
            float left
            padding 1px
            box-sizing border-box
            img 
              width 100%
              height 100%
        .redmi
          width 100%
          height 162px
          padding 8px 0
          img 
            width 100%
            height 100%
        .dayxuan
          width 100%
          height 230px
          margin-bottom 3px
          a
            img 
              width 100%
              height 100%
        .intelligent
          width 100%
          height 187*3px
          a
            display block
            float left
            width 50%
            height 187px
            box-sizing border-box
            &.aa
              padding 33px 6px 0 16px
            h3
              color:rgba(0, 0, 0, 0.87);
              font-size:14.5px;
              
            p
              color:rgba(0, 0, 0, 0.54);
              line-height:18px
              text-align:left;
              font-size:11.5px;
              margin-top 3px
              margin-bottom 10px
            div
              span
                &:first-child
                  color red
            img 
              width 100%  
              height 100%

            
        .moreImg
          width 100%
          height 500px
          a
            display block
            float left
            overflow hidden
            box-sizing border-box
            width 50%
            padding 0.5px 1px
            img 
              width 100%
              height 100%
        .knowMI
          width 100%
          height 55px
          a
            img
              width 100%
              height 100%









  
</style>
