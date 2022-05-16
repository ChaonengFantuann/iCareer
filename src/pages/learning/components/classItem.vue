<template>
<view class="body">
  <view class="box">
    <view class="item-box">
      <view class="left-use">
        <view class="icon-yes-no"/><view style="font-size: 26rpx">1.1{{' ' +name}}</view>
      </view>
      <view class="right-use">
        <u-icon @click="clickEye" size="19" name="eye"></u-icon>
      </view>
    </view>
  </view>
</view>
</template>

<script>
export default {
name: "classItem",
  data(){
    return{
      name:"初始前端,认识前端的基础结构"
    }
  },
  methods:{
    clickEye(){
      this.$emit('toLearn')
    }
  }

}
</script>

<style scoped lang="scss">
  .body{
    @include wh(100%,60rpx);
    background-color: white;
    .box{
      @include wh(100%,100%);
      background-color: white;
      .item-box{
        @include wh(100%,100%);
        @include flex-between();
        .left-use{
          @include wh(auto,100%);
          @include flex-center();
          .icon-yes-no{
            @include wh(30rpx,30rpx);
            border-radius: 20rpx;
            background-color: rgba(69, 129, 142, 100);
            @include flex-center();
            margin-right: 15rpx;
          }
        }
        .right-use{

        }
      }
    }
  }
</style>
