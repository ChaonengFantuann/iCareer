<template>
<view class="bodys" :style="'height:'+ system.bodyHeight +'px;width:'+ system.width +'px;'">
  <view class="public-header-res1"/>
  <view class="message-box">
    <view class="function-nav-box">
      <view class="message-div">
        消息
        <view class="number">(18)</view>
      </view>
      <view class="function-clean" @click="cleanAllNullRead">
        <u-icon name="eye" size="15" color="#A09D98"></u-icon>
        <view class="text">清除未读</view>
      </view>
    </view>
    <view id="talk-box-id" class="talk-box" :style="'height:'+ system.height +'px;width:'+ system.width +'px'">
      <view class="talk-function">
         <view class="icon" style="margin-left: 12px">
           <u-icon color="#C8C8C8" style="margin-right: 12px" name="bell" size="25"></u-icon>
           <u-icon color="#C8C8C8" style="margin-right: 12px" name="order" size="25"></u-icon>
         </view>
         <view class="icon" style="margin-right: 15px">
           <u-icon color="#C8C8C8" name="reload" size="25"></u-icon>
         </view>
       </view>
      <view class="talk-item-box" :style="'width:'+ system.width +'px;height:'+ system.talkHigh +'px;'">
        <talk-item v-for="(item,index) in talks" :key="index" :talkContent="item" ref="items" @click="itemClick"></talk-item>
      </view>
    </view>
  </view>
</view>
</template>

<script>
import talkItem from "@/pages/message/components/talkItem";
export default {
  name: "index.vue",
  mounted() {
     this.talkHighGet()
  },
  components:{
    talkItem
  },
  data(){
     return{
       system:{
         bodyHeight: this.$store.state.systemInfo.system.screenHeight-56,
         height: this.$store.state.systemInfo.system.screenHeight-134,
         width:this.$store.state.systemInfo.system.screenWidth,
         talkHigh:0
       },
       talks:[
         {
           user:'绿环公司HR-张先生',
           time:'13:22',
           content:'您好，您的简历和我们岗位需求很相近，有兴趣了解一下么'
         },
         {
           user:'列数集团人事-李先生',
           time:'09:22',
           content:'王同学，我们有份岗位很适合您'
         },
         {
           user:'中国石化-孙女士',
           time:'刚刚',
           content:'同学你好，我是中国石化，你想深入了解下运维岗位吗'
         },
         {
           user:'北京化工-秦女士',
           time:'昨天',
           content:'同学你好,你想深入了解下化工开发岗位吗'
         }
       ]
     }
  },
  methods:{
    cleanAllNullRead(){
        console.log('clean-all')
    },
    talkHighGet(){
      const query = uni.createSelectorQuery().in(this);
      query.select('#talk-box-id').boundingClientRect(data => {
        this.system.talkHigh = data.height - 50
      }).exec();
    },
    itemClick(){
      console.log(111111)
       this.$refs.items.touched()
    }
  }
}
</script>

<style scoped lang="scss">
   .message-box{
     @include wh(100%,auto);
     @include flex-center();
     .function-nav-box{
       @include wh(100%,34px);
       @include flex-start();
       .message-div{
         //消息字体
         @include flex-center();
         @include wh(auto,auto);
         margin-left: 12px;
         color: rgba(16, 16, 16, 100);
         font-size: 22px;
         font-family: 黑体,serif;
         font-weight: bold;
         .number{ font-size: 14px;font-weight: normal }
       }
       .function-clean{
         margin-left: 12px;
         @include wh(auto,20px);
         @include flex-center();
         .text{ font-size:14px;color: #a09d98
         }
       }
     }
     .talk-box{
       background-color: white;
       margin-top: 8px;
       overflow: auto;
       border-radius: 20px 20px 0 0 ;
       .talk-function{
         @include wh(100%,50px);
         @include flex-between();
         .icon{
           @include wh(auto,auto);
           @include flex-center();
         }
       }
       .talk-item-box{
         @include flex-list();
         overflow: auto;
         flex-wrap: wrap;
         align-content: start;
       }
     }
   }
   .bodys{
     background-color: #E9E1DF;
     overflow: hidden;
   }
</style>
