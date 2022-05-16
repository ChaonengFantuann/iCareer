<template>
  <view>
    <view class="resume-box-out">
      <view class="resume-user-box">
        <view class="left-box" style="width: auto;height: 100%">
          <view class="image-box">
            <u-image width="120rpx" height="120rpx" src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"></u-image>
          </view>
          <view class="name-box">
            <view style="width: 100%;height: auto">
              <view class="name">赵襄</view>
              <view class="local">
                <view class="local-local">天津</view>
                <view style="width: 2rpx;height: 43rpx;background-color:rgba(162, 156, 156, 100);margin-left: 20rpx;margin-right: 20rpx"/>
                <view class="local-sex">男</view>
              </view>
            </view>
          </view>
        </view>
        <view class="icon-box">
          <u-icon @click="toPerson" name="edit-pen" size="32"></u-icon>
        </view>
      </view>
      <view class="resume-experience-box">
        <view style="width: auto;height: 100%">
          <view class="title">教育经历</view>
          <view class="school">XXXX大学</view>
          <view class="scope-skill">软件工程/本科</view>
        </view>
        <view class="icon-box-use">
          <u-icon @click="toTeach" name="arrow-right" size="20"></u-icon>
        </view>
      </view>
<!--      这个等UI来了再说-->
      <view class="resume-price-box">
        <view style="width: auto;height: 100%">
          <view class="title">获奖经历</view>
        </view>
        <view class="icon-box-use">
          <u-icon @click="toActive" name="arrow-right" size="20"></u-icon>
        </view>
      </view>
      <view class="resume-skill-box">
        <view style="width: auto;height: 100%">
          <view class="title">主要经历</view>
        </view>
        <view class="icon-box-use">
          <u-icon @click="toTeach" name="arrow-right" size="20"></u-icon>
        </view>
      </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "resumeShow",
  methods:{
    toPerson(){
      uni.navigateTo({
        url:'/pages/resume/resumeEdit'
      })
    },
    toTeach(){
      uni.navigateTo({
        url:'/pages/resume/resumeFunction'
      })
    },
    toActive(){
      uni.navigateTo({
        url:'/pages/resume/resumeActive'
      })
    }
  }
}
</script>

<style scoped lang="scss">
   .resume-box-out{
     @include wh(100%,auto);
     @include flex-list();
     align-content: flex-start;
     flex-wrap: wrap;
     .resume-user-box{
       @include wh(670rpx,200rpx);
       @include flex-between();
       border-bottom: 1px solid rgba(187, 187, 187, 60);
       .left-box{
         display: flex;
         align-items: center;
         .image-box{
           @include wh(120rpx,120rpx);
         }
         .name-box{
           margin-left: 40rpx;
           @include wh(192rpx,100%);
           @include flex-center();
           flex-wrap: wrap;
           .name{
             @include wh(100%,50rpx);
             color: rgba(16, 16, 16, 100);
             font-size: 36rpx;
             text-align: left;
             font-family: PingFangSC-regular,serif;
           }
           .local{
             @include wh(100%,50rpx);
             color: rgba(132, 127, 127, 100);
             font-size: 28rpx;
             text-align: left;
             font-family: PingFangSC-regular,serif;
             @include flex-start();
           }
         }
         .icon-box{
           @include wh(auto,100%);
           @include flex-center();
         }
       }
     }
     .resume-experience-box{
       @include wh(670rpx,200rpx);
       border-bottom: 1px solid rgba(187, 187, 187, 60);
       @include flex-between();
       .title{
         margin-top: 16rpx;
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         font-family: PingFangSC-regular,serif;
       }
       .school{
         color: rgba(16, 16, 16, 100);
         font-size: 28rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 20rpx;
       }
       .scope-skill{
         color: #847F7F;
         font-size: 30rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 12rpx;
       }
       .icon-box-use{
         @include wh(auto,100%);
         @include flex-center();
       }
     }
     .resume-price-box{
       @include wh(670rpx,200rpx);
       border-bottom: 1px solid rgba(187, 187, 187, 60);
       @include flex-between();
       .title{
         margin-top: 16rpx;
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         font-family: PingFangSC-regular,serif;
       }
       .school{
         color: rgba(16, 16, 16, 100);
         font-size: 28rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 20rpx;
       }
       .scope-skill{
         color: #847F7F;
         font-size: 30rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 12rpx;
       }
       .icon-box-use{
         @include wh(auto,100%);
         @include flex-center();
       }
     }
     .resume-skill-box{
       @include wh(670rpx,200rpx);
       border-bottom: 1px solid rgba(187, 187, 187, 60);
       @include flex-between();
       .title{
         margin-top: 16rpx;
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         font-family: PingFangSC-regular,serif;
       }
       .school{
         color: rgba(16, 16, 16, 100);
         font-size: 28rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 20rpx;
       }
       .scope-skill{
         color: #847F7F;
         font-size: 30rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         margin-top: 12rpx;
       }
       .icon-box-use{
         @include wh(auto,100%);
         @include flex-center();
       }
     }
   }
</style>
