<template>
  <view class="body" :style="'height:' + system.height + 'px;width:'+ system.width +'px;'">
    <view class="test-box">
      <TestItem :content="item" v-for="(item,index) in faceLab" :key="index" ></TestItem>
    </view>
  </view>
</template>

<script>
import TestItem from "@/pages/learning/components/TestItem";
export default {
  name: "FaceTurn",
  components:{
    TestItem
  },
  props:['system'],
  data(){
    return{
      faceLab:[
        {
          name:'阿里巴巴后端笔试春-A',
          diffculte:'B',
          doTime:'1.5小时',
          time:'2022-01-23'
        },
        {
          name:'腾讯前端笔试-22A-D2',
          diffculte:'A',
          doTime:'2小时',
          time:'2021-11-23'
        },
        {
          name:'奇安信网络中心拓扑',
          diffculte:'C',
          doTime:'0.2小时',
          time:'2021-12-23'
        },
        {
          name:'华为运维云计算-A-CX0102D',
          diffculte:'A',
          doTime:'3小时',
          time:'2022-02-23'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .body{
      overflow: auto;
      @include flex-list();
      align-content: flex-start;
      background-color: rgb(255, 255, 255);
      .test-box{
        @include wh(100%,auto);
        background-color: white;
        margin-top: 16rpx;
        @include flex-list();
        align-content: start;
        flex-wrap: wrap;
      }
    }
</style>
