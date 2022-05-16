<template>
<view>
  <view class="box">
    <view class="image-box">
      <view class="title">
        <view>修改头像</view>
      </view>
      <view class="function-box">
        <u-image @click="imageChooseChange" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="140rpx" height="140rpx"></u-image>
      </view>
    </view>
    <view class="normal-box" v-for="(item,index) in local" :key="index">
      <view class="title-box">
        <view style="margin-left: 38rpx">{{ item }}</view>
      </view>
      <view class="function-box">
        <view class="text">{{ testdata[index] }}</view>
        <u-icon size="20" name="arrow-right" style="margin-left: 12rpx"></u-icon>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  name: "Setting.vue",
  data(){
    return{
      local:['修改昵称','手机号','修改密码','关于我们'],
      testdata:['赵襄','13882312283','','1.0.12']
    }
  },
  methods:{
    imageChooseChange(){
      console.log(11123123)
      uni.chooseImage({
        count:1,
        sizeType: ['original', 'compressed'],
        success:res => {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
   .box{
     @include wh(750rpx,auto);
     @include flex-list();
     flex-wrap: wrap;
     align-content: flex-start;
     .image-box{
       @include wh(670rpx,190rpx);
       border-bottom: 1px solid #b5b4b4;
       @include flex-start();
       justify-content: space-between;
       .function-box{
         @include wh(200rpx,140rpx);
         @include flex-between();
         justify-content: flex-end;
       }
       .title{
         @include wh(auto,100%);
         margin-left: 38rpx;
         @include flex-center();
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
       }
     }
     .normal-box{
       @include wh(670rpx,100rpx);
       @include flex-between();
       border-bottom: 1px solid #b5b4b4;
       .title-box{
         @include wh(auto,100%);
         @include flex-center();
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
       }
       .function-box{
         @include wh(auto,100%);
         @include flex-center();
         .text{
           color: rgba(132, 127, 127, 100);
           font-size: 28rpx;
           text-align: left;
           font-family: PingFangSC-regular;
         }
       }
     }
   }
</style>
