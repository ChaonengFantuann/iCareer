<template>
  <view class="boxuse">
    <view :key="key" v-for="(classter,key) in classDate">
    <view class="title">
      <view class="text">{{ classter.name }}</view>
      <view class="to-title">筛选大类</view>
    </view>
    <view class="item-box">
      <view class="item-tag" :key="key" v-for="(index,key) in classter.classDetail">{{ index }}</view>
    </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "popupItem",
  data(){
    return{
      classDate:[
        {
          name:'前端',
          classDetail:['前端工程','Vue','JS','HTML','React','前端设计','工程安排','行为规划']
        },
        {
          name:'后端',
          classDetail: ['后端架构','Java','Java高阶','spring','Mysql','Rabbit','后端架构','Java','Java高阶','spring','Mysql','Rabbit']
        },
        {
          name:'UI',
          classDetail: ['设计理念','UI实例','设计进阶','工具初步','工具高阶']
        },
        {
          name:'硬件',
          classDetail: ['单片机','电路设计','python初阶','python高阶','STM单片机']
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
  .boxuse{
    @include wh(500rpx,auto);
    background-color: white;
    border-radius: 10px;
    @include flex-list();
    align-content: start;
    flex-wrap: wrap;
    padding-bottom: 20rpx;
    .title{
      @include wh(100%,auto);
      margin-top: 16rpx;
      @include flex-between();
      margin-bottom: 6rpx;
      .text{
        @include wh(60rpx,100%);
        font-size: 30rpx;
        font-family: 黑体,serif;
        margin-left: 26rpx;
        font-weight: bold;
        color: #45818E;
      }
      .to-title{
        width: 120rpx;
        height: 45rpx;
        font-size: 24rpx;
        margin-right: 20rpx;
        background-color: #fcedd5;
        @include flex-center();
        border-radius: 20rpx;
        color: #ffa500;
      }
    }
    .item-box{
      @include wh(468rpx,auto);
      margin-top: 16rpx;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;
      .item-tag{
        @include wh(140rpx,60rpx);
        background-color: #f8f6f6;
        @include flex-center();
        border-radius: 40px;
        margin-top: 8rpx;
        margin-bottom: 8rpx;
        font-size: 24rpx;
      }
    }
    .item-box:after {
      content: '';
      width: 140rpx;
    }


  }
</style>
