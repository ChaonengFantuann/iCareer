<template>
<view class="box">
  <view class="image-use">
    <u-image radius="8" :showLoading="true" src="https://cdn.uviewui.com/uview/album/1.jpg" width="160rpx" height="160rpx"></u-image>
  </view>
  <view class="right">
    <view class="text-use-box">
      <view class="text-up">{{ content.name }}</view>
      <view class="text-mid">
        <view style="">试题难度:{{ content.diffculte }}</view>
        <view style="margin-left: 20rpx">推荐时间:{{ content.doTime }}</view>
      </view>
      <view class="text-down">{{ content.time }}</view>
    </view>
  </view>
  <u-line style="margin-left: 45rpx" length="88%" color="rgba(193, 193, 193, 100)"></u-line>
</view>
</template>

<script>
export default {
  name: "TestItem",
  props:['content']
}
</script>

<style scoped lang="scss">
   .box{
     @include wh(100%,200rpx);
     margin-top: 10rpx;
     margin-bottom: 10rpx;
     @include flex-start();
     flex-wrap: wrap;
     .image-use{
       @include wh(160rpx,160rpx);
       margin-right: 18rpx;
       margin-left: 20rpx;
     }
     .right{
       @include wh(500rpx,160rpx);
       display: flex;
       flex-wrap: wrap;
       .text-use-box{
         @include wh(100%,auto);
         @include flex-start();
         align-content: space-between;
         flex-wrap: wrap;
         .text-up{
           @include wh(100%,auto);
           font-size: 32rpx;
           font-weight: bold;
         }
         .text-mid{
           @include wh(100%,auto);
           @include flex-start();
         }
         .text-down{
           color: rgb(193, 189, 189);
         }
       }

     }
   }
</style>
