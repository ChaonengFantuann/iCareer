<template>
  <view class="body">
    <view class="line-box">
      <view class="text-box"><view class="text">学习时长</view></view>
      <view class="line-image">
        <canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA" @touchmove="moveLineA" @touchend="touchEndLineA"></canvas>
      </view>
    </view>
    <view class="score-box">
      <view class="title-box"><view class="text">综合评分</view></view>
      <view class="big-score-use">
        <view class="score-item">
          <view class="score">82.63</view>
          <view class="text">学习效益</view>
        </view>
        <view class="line"></view>
        <view class="score-item">
          <view class="score-center">97.22</view>
          <view class="text">综合评分</view>
        </view>
        <view class="line"></view>
        <view class="score-item">
          <view class="score">183.2</view>
          <view class="text">额外积分</view>
        </view>
      </view>
    </view>
    <view class="score-detail">
      <u-cell-group>
        <u-cell title="学习过程" value="4.35"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
        <u-cell title="课程总进度" value="2.33%"></u-cell>
      </u-cell-group>
    </view>
  </view>
</template>


<script>
import uCharts from '@/js_sdk/u-charts/u-charts'
var _self;
var canvaLineA=null;
export default {
  name: "MyTest",
  props:['system'],
  mounted(){
    _self = this
    this.cWidth=uni.upx2px(750);
    this.cHeight=uni.upx2px(420);
    this.showLineA("canvasLineA",this.lineA);
  },
  data(){
    return{
      cWidth:'',
      cHeight:'',
      pixelRatio:1,
      textarea:'',
      lineA:{
        categories:["2.26","2.27","2.28","2.29","2.30"],
        series:[
          {
            data:[12,34,65,33,54],
            name:"学习时间"
          },
          {
            data:[22,31,35,67,43],
            name:"课程进度"
          }
        ]
      }
    }
  },
  methods:{
    touchLineA(e){
      canvaLineA.scrollStart(e);
    },
    moveLineA(e) {
      canvaLineA.scroll(e);
    },
    touchEndLineA(e) {
      canvaLineA.scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvaLineA.touchLegend(e);
      canvaLineA.showToolTip(e, {
        format: function (item, category) {
          return category + ' ' + item.name + ':' + item.data
        }
      });
    },
    showLineA(canvasId,chartData){
      canvaLineA=new uCharts({
        $this:_self,
        canvasId: canvasId,
        type: 'line',
        fontSize:11,
        padding:[15,15,0,15],
        legend:{
          show:true,
          padding:5,
          lineHeight:11,
          margin:5,
        },
        dataLabel:true,
        dataPointShape:true,
        dataPointShapeType:'hollow',
        background:'#FFFFFF',
        pixelRatio:_self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        enableScroll: false,//开启图表拖拽功能
        xAxis: {
          disableGrid:false,
          type:'grid',
          gridType:'dash',
          itemCount:4,
          scrollShow:true,
          scrollAlign:'left'
        },
        yAxis: {
          disabled:true,
          gridType:'dash',
          splitNumber:8,
          min:10,
          max:80,
          format:(val)=>{return val.toFixed(0)+'小时'}//如不写此方法，Y轴刻度默认保留两位小数
        },
        width: _self.cWidth*_self.pixelRatio,
        height: _self.cHeight*_self.pixelRatio,
        extra: {
          line:{
            type: 'straight'
          }
        },
      });
    }
  }
}
</script>

<style scoped lang="scss">
.line{
  @include wh(3rpx,75%);
  background-color: #b7b5b5;
}
  .body{
    background-color: rgba(229, 229, 229, 100);
    @include flex-list();
    align-content: flex-start;
    flex-wrap: wrap;
    @include wh(100%,100%);
    overflow: auto;
    .line-box{
      background-color: white;
      @include wh(750rpx,530rpx);
      margin-top: 16rpx;
      .text-box{
        margin-top: 10rpx;
        @include wh(100%,68rpx);
        margin-bottom: -10rpx;
        @include flex-start();
        .text{
          margin-top: 8rpx;
          @include wh(auto,auto);
          font-size: 36rpx;
          margin-left: 40rpx;font-weight: bold;
        }
      }
      .line-image{
        @include wh(750rpx,420rpx);
        margin-top: 16rpx;
        .charts{
          @include wh(750rpx,420rpx)
        }
      }
    }
    .score-box{
      @include wh(750rpx,auto);
      padding-bottom: 20rpx;
      background-color: white;
      margin-top: 16rpx;
      .title-box{
        @include wh(100%,auto);
        margin-top: 10rpx;
        margin-bottom: -10rpx;
        @include flex-start();
        .text{
          margin-top: 8rpx;
          @include wh(auto,auto);
          font-size: 36rpx;
          margin-left: 40rpx;font-weight: bold;
        }
      }
      .big-score-use{
        @include wh(100%,220rpx);
        margin-top: 20rpx;
        @include flex-start();
        justify-content: space-around;
        .score-item{
          @include wh(230rpx,100%);
          position: relative;
          @include flex-center();
          .score{
            @include wh(100%,auto);
            @include flex-center();
            font-size: 40rpx;
            margin-bottom: 30rpx;
          }
          .score-center{
            @include wh(100%,auto);
            @include flex-center();
            font-size: 53rpx;
            margin-bottom: 45rpx;
            color: #45818E;
          }
          .text{
            @include wh(auto,auto);
            @include flex-center();
            font-size: 30rpx;
            position: absolute;
            bottom: 15rpx;
          }
        }
      }
    }
    .score-detail{
      @include wh(100%,auto);
      background-color: white;
      margin-top: 16rpx;
      overflow: auto;
    }
  }
</style>
