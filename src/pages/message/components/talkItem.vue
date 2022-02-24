<template>
<view>
  <view @click="touched" class="talk-box" :style="'background-color: ' + (touch ? '#EFEFEF' : 'white')   ">
    <view class="photo">
      <u-image width="110rpx" :fade="false" height="110rpx" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></u-image>
    </view>
    <view class="text-box">
      <view class="text-up">
        <view class="name">爱吃介子的乌冬面</view>
        <view class="time">17:24</view>
      </view>
      <view class="text-down">
        <view class="text-in">我们这次的产品已经通过所有的常规测试，可以进行基本挂载和操作行为管控，请用户注意</view>
        <view class="number-circule">
          <u-badge bgColor="#FF0000" type="error" max="99" :value="value"></u-badge>
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  name: "talkItem",
  data(){
    return{
      value:1,
      touch:false
    }
  },
  methods:{
    touched(){
      console.log(111111)
      this.touch = true
      setTimeout(()=>{
        this.touch = false
      },200)
    }
  }
}
</script>

<style scoped lang="scss">
   .talk-box{
     @include wh(750rpx,140rpx);
     border-bottom: 1rpx solid #F7F7F7;
     @include flex-center();
     .photo{
       @include wh(110rpx,110rpx);
     }
     .text-box{
       margin-left: 12rpx;
       @include wh(574rpx,110rpx);
       display: flex;
       flex-wrap: wrap;
       .text-up{
         @include wh(100%,55rpx);
         @include flex-between();
         .name{ font-size: 30rpx; }
         .time{
           font-size: 25rpx;
           color: #9A9A9A;
         }
       }
       .text-down{
         @include wh(100%,55rpx);
         @include flex-between();
         .text-in{
           @include wh(450rpx,40rpx);
           overflow: hidden;
           font-size: 26rpx;
         }
         .number-circule{
           @include wh(auto,auto);
           margin-right: 16rpx;
         }
       }
     }
   }
</style>
