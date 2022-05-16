<template>
<view>
  <view class="box">
    <view v-for="(item,index) in dataTest" :key="index" class="item-box">
      <view class="item-text-name" style="width: auto;height: 100%">
        <view  class="item-name">{{ item }}</view>
        <view class="item-content">{{ data[index] }}</view>
      </view>
      <view class="icon-box" v-if="true">
<!--        <u-icon @click="functionChoose(index)" size="20" name="arrow-right"></u-icon>-->
      </view>
    </view>
    <view class="add-box">
      <view class="add" @click="addResume">
        <u-icon name="plus" color="#CBCBCB" size="35"></u-icon>
      </view>
    </view>
  </view>
    <u-picker @close="control.source = false" closeOnClickOverlay="true" @cancel="control.source = false" :show="control.source" :columns="sourceData"></u-picker>
    <u-picker @close="control.subj = false" closeOnClickOverlay="true" @cancel="control.subj = false" :show="control.subj" :columns="subjData"></u-picker>
</view>
</template>

<script>
export default {
  name: "resumeFunction",
  data(){
    return{
      dataTest:['XXXXXXXX大赛'],
      data:['国家级-二等奖'],
      control:{
        source:false,
        subj:false
      },
      sourceData:[
        ['中专','高中','大专','本科','研究生','博士及以上']
      ],
      subjData:[
          ['网络工程','软件工程','','','','','','']
      ]
    }
  },
  methods:{
    functionChoose(index){
      if(index === 2){
        this.control.source = true
      }
      if(index === 1){
        this.control.subj = true
      }
    },
    addResume(){
      uni.navigateTo({
        url:'/pages/resume/addResume'
      })
    }
  }
}
</script>

<style scoped lang="scss">
     .box{
       @include wh(750rpx,auto);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .item-box{
         @include wh(670rpx,140rpx);
         border-bottom: 1px solid rgba(187, 187, 187, 60);
         @include flex-between();
         .item-text-name{
           .item-name{
             @include wh(auto,40rpx);
             color: rgba(121, 116, 116, 100);
             font-size: 28rpx;
             text-align: left;
             font-family: PingFangSC-light,serif;
             margin-top: 16rpx;
             margin-left: 20rpx;
           }
           .item-content{
             @include wh(auto,50rpx);
             margin-top: 16rpx;
             margin-left: 20rpx;
             color: rgba(16, 16, 16, 100);
             font-size: 36rpx;
             text-align: left;
             font-family: PingFangSC-regular,serif;
           }
           .input-use-me{
             width: 320px;
             margin-top: 16rpx;
             margin-left: 20rpx;
             font-size: 36rpx;
             font-family: PingFangSC-regular,serif;
           }
         }
         .icon-box{
           @include wh(auto,100%);
           @include flex-center();
         }
       }
       .add-box{
         @include wh(100%,150rpx);
         margin-top: 20rpx;
         padding-right: 24rpx;
         padding-left: 24rpx;
         .add{
           @include wh(100%,100%);
           background-color: #efefef;
           border-radius: 8px;
           @include flex-center();
         }
       }
     }
</style>
