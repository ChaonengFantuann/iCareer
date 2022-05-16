<template>
  <view class="body">
    <view class="title">应届毕业生前端工程设计师</view>
    <view class="itemLocal-box">
      <view class="itembox">
        <view class="itemFont">北京</view>
        <view class="lineUse"/>
        <view class="itemFont">三个月</view>
        <view class="lineUse"/>
        <view class="itemFont">5天/周</view>
      </view>
    </view>
    <view class="tags-box">
      <view class="tags">试用转正</view>
      <view class="tags">双休</view>
      <view class="tags">五险一金</view>
      <view class="tags">底薪制</view>
    </view>
    <view class="productJob-box">
      <view class="title-use">职位描述</view>
      <view class="protects">本项目是相应国家供给侧结构性改革的重大革新项目，目前具有转正机会</view>
    </view>
    <view class="companyAdvice">
      <view class="title-use">公司简介</view>
      <view class="protexts">我们公司当前为全湖北省最厉害的公司，我们有最专业的团队和最专业的攻城狮</view>
    </view>
    <view class="locations">
      <view class="title-use">工作地点</view>
      <view class="company">
        <view class="companylogo">
          <u--image radius="6" :showLoading="true" :src="src" width="60px" height="60px"></u--image>
        </view>
        <view class="companyinduce">
          <view class="companyname">天津天河传媒技术有限公司</view>
          <view class="companydetail">未上市·20-199人·技术运营</view>
        </view>
      </view>
      <view class="maps-use">
        <map style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers"/>
      </view>
    </view>
    <view class="bottom-absolute">
      <u-button color="#45818E" radius="70" style="font-family: 微软雅黑;width: 750rpx;height: 120rpx;font-size: 30px" text="联系HR咨询"></u-button>
    </view>
  </view>
</template>

<script>
  export default {
    name: "companyContent",
    data(){
      return{
        src:'https://cdn.uviewui.com/uview/album/1.jpg',
        latitude:'39.9',
        longitude:'116.3',
        covers: [{
          latitude: 39.9,
          longitude: 116.3,
          iconPath: '../../../static/location.png'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
.lineUse{
  @include wh(2rpx,72%);
  background-color: #847f7f;
}
   .body{
     @include wh(100%,100%);
     @include flex-list();
     align-content: flex-start;
     flex-wrap: wrap;
     position: absolute;
     overflow: auto;
     .title{
       @include wh(100%,auto);
       color: rgba(16, 16, 16, 100);
       font-size: 18px;
       text-align: left;
       font-family: PingFangSC-regular,serif;
       padding-left: 24rpx;
       margin-top: 20rpx;
     }
     .itemLocal-box{
       @include wh(100%,40rpx);
       margin-top: 8rpx;
       padding-left: 24rpx;
       .itembox{
         @include wh(252rpx,100%);
         @include flex-between();
         .itemFont{
           color: rgb(132, 127, 127);
           font-size: 24rpx;
           text-align: left;
           font-family: PingFangSC-regular,serif;
         }
       }
     }
     .tags-box{
       @include wh(100%,75rpx);
       margin-top: 8rpx;
       @include flex-start();
       padding-left: 12rpx;
       .tags{
         @include wh(fit-content,70rpx);
         background-color: #F5F5F5;
         border-radius: 6rpx;
         padding-left: 12rpx;
         padding-right: 12rpx;
         font-size: 26rpx;
         @include flex-center();
         margin-left: 7rpx;
         margin-right: 7rpx;
       }
     }
     .productJob-box{
       margin-top: 16rpx;
       @include wh(100%,auto);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .title-use{
         @include wh(100%,auto);
         padding-left: 24rpx;
       }
       .protects{
         @include wh(710rpx,auto);
         color: rgb(124, 123, 123);
         font-size: 28rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         padding-bottom: 10rpx;
         border-bottom: 1px solid rgb(187, 187, 187);
       }
     }
     .companyAdvice{
       margin-top: 16rpx;
       @include wh(100%,auto);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .title-use{
         @include wh(100%,auto);
         padding-left: 24rpx;
       }
       .protexts{
         @include wh(710rpx,auto);
         color: rgb(124, 123, 123);
         font-size: 28rpx;
         text-align: left;
         font-family: PingFangSC-light,serif;
         padding-bottom: 10rpx;
         border-bottom: 1px solid rgb(187, 187, 187);
       }
     }
     .locations{
       margin-top: 16rpx;
       @include wh(100%,auto);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .title-use{
         @include wh(100%,auto);
         padding-left: 24rpx;
       }
       .company{
         margin-top: 12rpx;
         @include wh(100%,auto);
         padding-left: 24rpx;
         padding-right: 24rpx;
         @include flex-start();
         .companylogo{
           @include wh(auto,auto);
         }
         .companyinduce{
           @include wh(100%,60px);
           @include flex-start();
           flex-wrap: wrap;
           .companyname{
             @include wh(100%,30px);
             font-size: 18px;
             display: flex;
             align-items: center;
             padding-left: 16rpx;
           }
           .companydetail{
             @include wh(100%,30px);
             font-size: 16px;
             display: flex;
             align-items: center;
             padding-left: 16rpx;
           }
         }
       }
       .maps-use{
         @include wh(100%,320rpx);
         padding-left: 24rpx;
         padding-right: 24rpx;
         margin-top: 18rpx;
       }
     }
     .bottom-absolute{
       @include wh(750rpx,120rpx);
       left: 0;
       bottom: 0;
       position: absolute;
     }
   }
</style>
