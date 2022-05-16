<template>
  <view class="box" @click="toDetail">
    <view class="image-space">
      <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="240rpx" height="180rpx" radius="11rpx"></u-image>
    </view>
    <view class="text-space">
      <view class="title">前端0基础学习路线概览</view>
      <view class="tagbox">
        <view class="tag">适合新手</view>
        <view class="tag">Vue</view>
        <view class="tag">0基础</view>
        <view class="tag">32课时</view>
      </view>
      <view class="teacher">主讲人:李力超</view>
      <view class="bottom">
        <view class="left">7632人关注过</view>
        <view class="right">免费学习</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
name: "classRoomItem",
  methods:{
    toDetail(){
      console.log(123123)
      uni.navigateTo({
        url:'/pages/learning/LearningDetail'
      })
    }
  }
}
</script>

<style scoped lang="scss">
   .box{
     @include wh(700rpx,200rpx);
     @include flex-start();
     justify-content: space-between;
     border-bottom: 1px solid #acacac;
     .image-space{
       @include wh(240rpx,180rpx);
     }
     .text-space{
       position: relative;
       @include wh(448rpx,180rpx);
       display: flex;
       align-content: flex-start;
       flex-wrap: wrap;
       justify-content: flex-start;
       .teacher{
         font-size: 22rpx;
       }
       .bottom{
         position: absolute;
         bottom: 0;
         @include wh(100%,auto);
         @include flex-between();
         .left{
           @include wh(auto,auto);
           font-size: 24rpx;
           color: #7a7979;
         }
         .right{
           @include wh(auto,auto);
           font-size: 27rpx;
           color: #45818E;
           font-family: '华文中宋',serif;
         }
       }
       .title{
         @include wh(100%,auto);
         font-size: 30rpx;
         color: black;
       }
       .tagbox{
         @include wh(100%,auto);
         @include flex-start();
         margin-bottom: 3rpx;
         margin-top: 3rpx;
         .tag{
           @include wh(auto,36rpx);
           padding-left: 5rpx;
           padding-right: 5rpx;
           font-size: 20rpx;
           border-radius: 8rpx;
           background-color: #F5F5F5;
           margin-left: 5rpx;
           margin-right: 5rpx;
         }
       }
     }
   }
</style>
