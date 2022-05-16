<template>
  <view>
    <view class="resume-person-box">
      <view v-for="(item,index) in dataTest" :key="index" class="item-box">
        <view class="item-text-name" style="width: auto;height: 100%">
          <view  class="item-name">{{ item }}</view>
          <view v-if="(index === 1)||(index === 2)||(index === 3)" class="item-content">{{ data[index] }}</view>
          <input v-else class="input-use-me" type="text" v-model="data[index]" />
        </view>
        <view class="icon-box" v-if="true">
          <u-icon @click="functionChoose(index)" size="20" name="arrow-right"></u-icon>
        </view>
      </view>
      <view class="button-box">
        <u-button @click="navigateBack" :customStyle="styleBotton"  type="primary" text="保存"></u-button>
      </view>
    </view>
    <u-datetime-picker @cancel="dataShow = false" @confirm="dataConfirm" :show="dataShow" v-model="timeChoose" mode="date"></u-datetime-picker>
    <u-action-sheet @select="actionSelect" @close="actionShow = false" cancelText="取消" :closeOnClickOverlay="true" :actions="list" :round="10" :title="actionTitle" :show="actionShow"></u-action-sheet>
  </view>
</template>

<script>
export default {
  name: "resumeEdit",
  data(){
    return{
      dataTest:['姓名','出生日期','性别','当前所在城市','手机号码','邮箱'],
      data:['李凡慕千凝','2012-03-01','男','北京','18238483384','10254954834@qq.com'],
      styleBotton:{
        borderRadius:'34rpx',
        backgroundColor:'#45818E',
        fontSize:'50rpx',
        letterSpacing:'4px'
      },
      dataShow:false,
      timeChoose:Number(new Date()),
      actionShow:false,
      actionTitle:'性别选择',
      list:[
        {
          name:'男'
        },
        {
          name:'女'
        }
      ]
    }
  },
  methods:{
    functionChoose(chos){
      console.log(chos)
      if(chos === 1){
        //对应不同功能选择器，在函数内直接开启即可
        this.dataShow = true
      }
      if(chos === 2){
        this.actionShow = true
      }
    },
    dataConfirm(time){
      let timeOut = new Date(time.value).toLocaleDateString().replace(/\//g, "-")
	  // 这个留作疑惑，晚上再处理
      console.log(timeOut)
      this.data[1] = timeOut
      this.dataShow = false
    },
    actionSelect(res){
      console.log(res.name)
      this.data[2] = res.name
    },
    navigateBack(){
      uni.navigateBack()
    }
  }
}
</script>

<style scoped lang="scss">
    .resume-person-box{
      @include wh(100%,auto);
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
      .button-box{
        @include wh(668rpx,68rpx);
        margin-top:72rpx;
        font-family: PingFangSC-regular,serif;
      }
    }
</style>
