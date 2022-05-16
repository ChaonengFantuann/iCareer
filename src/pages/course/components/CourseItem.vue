<template>
  <view class="box">
    <view class="left-box">
      <u-image width="248rpx" height="140rpx" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.aiimg.com%2Fuploads%2Fallimg%2F200519%2F263915-20051ZS114.jpg&refer=http%3A%2F%2Fimg.aiimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648912026&t=9d3d7b86e3f42f9f69bb0ab9414cf04f"></u-image>
    </view>
    <view class="text-box">
      <view class="title">0基础入门：手把手教你前端</view>
      <view class="editer">尚硅谷 | 张XX | 从入门到精通</view>
      <view class="inf-box">
        <view class="left">评分:4.9</view>
        <view class="right">
          <u-icon name="eye" size="17"/>
          <view style="font-size: 24rpx;margin-left: 8rpx;color: #bab8b8">6.1W</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
name: "CourseItem"
}
</script>

<style scoped lang="scss">
    .box{
      @include wh(634rpx,160rpx);
      //border-bottom: 1px solid rgba(187, 187, 187, 100);
      @include flex-between();
      align-items: flex-start;
      .left-box{
        @include wh(248rpx,140rpx);
      }
      .text-box{
        @include wh(354rpx,140rpx);
        .title{
          @include wh(100%,auto);
          color: rgba(16, 16, 16, 100);
          font-size: 28rpx;
          text-align: left;
          font-family: PingFangSC-regular,serif;
        }
        .editer{
          @include wh(100%,auto);
          color: rgba(121, 122, 123, 100);
          font-size: 26rpx;
          text-align: left;
          font-family: PingFangSC-light,serif;
        }
        .inf-box{
          @include wh(100%,auto);
          @include flex-between();
          margin-top: 28rpx;
          .left{
            @include wh(auto,auto);
            color: rgba(121, 122, 123, 100);
            font-size: 24rpx;
            text-align: left;
            font-family: PingFangSC-regular,serif;
          }
          .right{
            @include wh(auto,100%);
            display: flex;
            align-items: center;
            color: black;
            font-size: 24rpx;
            text-align: left;
            font-family: PingFangSC-regular,serif;
          }
        }
      }
    }
</style>
