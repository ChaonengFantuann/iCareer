<template>
  <view class="box" @click="jobDetail">
    <view class="title">
      <view class="text">{{ infoto.title }}</view>
      <view class="money">{{ infoto.money }}</view>
    </view>
    <view class="tag">
      <view :key="index" v-for="(item,index) in infoto.tags" class="item">{{ item }}</view>
    </view>
    <view class="company">
      <view style="width: auto;height: auto;display: flex">
      <view style="width: auto;height: auto;font-size: 28rpx;margin-left: 3rpx">{{ infoto.company }}</view>
      <view style="width: auto;height: auto;font-size: 28rpx;margin-left: 13rpx">{{ infoto.people }}</view>
      </view>
      <view class="local">
        <view class="text">{{ infoto.address }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "jobItem",
  props:['infoto'],
  methods:{
    jobDetail(){
      this.$emit('jobdetail')
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  @include wh(100%,160rpx);
  @include flex-list();
  align-content: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #F2F2F2;
  margin-top: 10rpx;
  .title{
    @include wh(100%,auto);
    @include flex-start();
    justify-content: space-between;
    .text{
      @include wh(auto,auto);
      font-size: 32rpx;
      font-weight: bold;
    }
    .money{
      color: #45808D;
      @include wh(auto,auto);
      font-size: 28rpx;
      margin-right: 20rpx;
    }
  }
  .tag{
    @include wh(100%,45rpx);
    @include flex-start();
    padding-left: 2rpx;
    margin-top: 6rpx;
    margin-bottom: 6rpx;
    .item{
      @include wh(auto,40rpx);
      @include flex-center();
      border-radius: 5rpx;
      color: #434343;
      font-size: 21rpx;
      background-color: #F5F5F5;
      padding-left: 5rpx;
      padding-right: 5rpx;
      margin-left: 6rpx;
      margin-right: 6rpx;
    }
  }
  .company{
    @include wh(100%,auto);
    @include flex-start();
    justify-content: space-between;
    .local{
      @include wh(auto,auto);
      font-size: 24rpx;
      color: #A9A9A9;
    }
  }
}
</style>
