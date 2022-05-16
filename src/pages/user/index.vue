<template>
<view>
  <view class="public-header-res1"></view>
  <view class="labels-use"></view>
  <view class="user-body" :style="'width:'+ system.width +'px;height:'+ system.height +'px;'">
    <view class="user-information">
      <view class="photo">
        <u-image src="https://cdn.uviewui.com/uview/album/1.jpg" radius="6" width="140rpx" height="140rpx"></u-image>
      </view>
      <view class="text">
        <view class="text-up">天空味的半熟芝士</view>
        <view class="text-down">
          <view class="text-class">学历:本科</view>
          <view class="icon-user">
            <u-icon @click="toInformation" size="17" name="arrow-right"/>
          </view>
        </view>
      </view>
    </view>
    <view class="user-function">
      <view class="items">
        <view class="item-icon">
			<image style="width: 69rpx;height: 69rpx;" src="../../static/course-icons.png" mode=""></image>
		    </view>
        <view class="item-text">课程</view>
      </view>
      <view class="items">
        <view class="item-icon">
          <image style="width: 47rpx;height: 73rpx;" src="../../static/power.png" mode=""></image>
        </view>
        <view class="item-text">能力</view>
      </view>
      <view @click="toResume" class="items">
        <view class="item-icon">
          <image style="width: 60rpx;height: 73rpx;" src="../../static/edit.png" mode=""></image>
        </view>
        <view class="item-text">简历</view>
      </view>
      <view class="items">
        <view class="item-icon">
          <image style="width: 73rpx;height: 73rpx;" src="../../static/company.png" mode=""></image>
        </view>
        <view class="item-text">企业</view>
      </view>
    </view>
    <view class="cell-list">
      <u-cell-group>
        <u-cell  url="/pages/user/setting" @click="cellClick" titleStyle="font-size:29rpx;" icon="setting-fill" title="个人设置" :isLink="true"/>
        <u-cell titleStyle="font-size:29rpx;" icon="integral-fill" :clickable="true" title="会员等级" value="新版本"></u-cell>
      </u-cell-group>
    </view>
  </view>
</view>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      system:{
        height: this.$store.state.systemInfo.system.screenHeight-114,
        width:this.$store.state.systemInfo.system.screenWidth
      },
      touch:{
        f:false,
        s:false,
        t:false
      }
    }
  },
  methods:{
    cellClick(e){
      console.log(e)
    },
    toInformation(){
      uni.navigateTo({
        url:'/pages/user/setting'
      })
    },
    toResume(){
      uni.navigateTo({
        url:'/pages/resume/resumeShow'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.labels-use{
  @include wh(100%,50rpx)
}
   .user-body{
     background-color: #EDEDED;
     .user-information{
       background-color: white;
       @include wh(100%,180rpx);
       @include flex-start();
       .photo{
         @include wh(140rpx,140rpx);
         margin-left: 24rpx;
       }
       .text{
         @include wh(538rpx,140rpx);
         margin-left: 24rpx;
         display: flex;
         flex-wrap: wrap;
         .text-up{
           @include wh(100%,70rpx);
           @include flex-between();
           font-size: 38rpx;
           font-weight: bold;
           font-family: 黑体,serif;
         }
         .text-down{
           @include wh(100%,70rpx);
           @include flex-between();
           .text-class{
             font-size: 28rpx;
             color: #727272;
           }
         }
       }
     }
     .user-function{
       margin-top: 32rpx;
       @include wh(100%,auto);
       @include flex-between();
       justify-content: space-around;
       .items{
         border-radius: 15rpx;
         background-color: white;
         @include wh(150rpx,150rpx);
         @include flex-center();
         flex-wrap: wrap;
         .item-icon{
           margin-top: 20rpx;
         }
         .item-text{
           @include wh(100%,auto);
           @include flex-center();
           font-size: 30rpx;
           margin-bottom: 20rpx;
           color: #565555;
         }
       }
     }
     .cell-list{
       background-color: white;
       margin-top: 32rpx;
     }
   }
</style>
