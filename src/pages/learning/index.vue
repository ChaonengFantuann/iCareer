<template>
<view class="bodys">
  <view class="public-header-res1"></view>
  <view class="learn-body">
    <view id="users" class="subsection-box">
      <u-tabs class="testtab" @click="tabClick" @change="tabChange"  lineColor="#45818E" :inactiveStyle="tab.unstyle" :activeStyle="tab.style" :list="list" :current="tab.current"></u-tabs>
    </view>
    <view class="swiper-box">
       <swiper class="swipers" :style="'height:' + system.height + 'px;width:'+ system.width +'px;'" :current="swiper.current" :circular="true" @change="swiperChange" >
         <swiper-item >
            <Progress :system="system"/>
         </swiper-item>
         <swiper-item>
           <FaceTurn :system="system"/>
         </swiper-item>
         <swiper-item>
           <MyTest :system="system"/>
         </swiper-item>
       </swiper>
    </view>
  </view>
</view>
</template>

<script>
import Progress from "@/pages/learning/components/progress.vue";
import FaceTurn from "@/pages/learning/components/FaceTurn";
import MyTest from "@/pages/learning/components/MyTest";
export default {
    name: "index.vue",
  mounted() {
  },
  components:{
      Progress, FaceTurn, MyTest
  },
  data(){
      return{
        system:{
          height: this.$store.state.systemInfo.system.screenHeight-137,
          width:this.$store.state.systemInfo.system.screenWidth,
          listHeight:this.$store.state.systemInfo.system.screenHeight-(231+137)
        },
        swiper:{ current:0 },
        tab:{
          current:0,
          style:{ fontSize:'16px', color:"#45818E", weight:'64px',marginRight:'18px',marginLeft:'18px'},
          unstyle:{ fontSize:'16px' ,weight:'64px',marginRight:'18px',marginLeft:'18px' }
        },
        list: [{
          name: '学习进度',
        }, {
          name: '面试真题',
        }, {
          name: '自我评估'
        }]
      }
  },
  methods:{
    swiperChange(e){
      this.tab.current = e.detail.current
    },
    tabChange(e){
      this.swiper.current = e.index
    },
    tabClick(e){
      this.swiper.current = e.index
    }
  }
}
</script>

<style scoped lang="scss">
.bodys{
  @include wh(100%,100%);
}
   .learn-body{
     @include wh(100%,auto);
     @include flex-center();
     overflow: hidden;
     .subsection-box{
       @include wh(auto,auto);
     }
     .swiper-box{
       @include wh(auto,auto);
       .swipers{
       }
     }
   }
   //下面的CSS是测试代码，生产中给删了
   .swiper-test{
     @include wh(100%,100%);
   }
   .swiper-test1{
     @include wh(100%,100%);
     background-color: rgba(229, 229, 229, 100);
   }
</style>
