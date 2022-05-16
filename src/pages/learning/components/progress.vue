<template>
  <view class="body" :style="'height:' + system.height + 'px;width:'+ system.width +'px;'">
    <view class="progress-box">
      <view class="progress-text">
        <view class="text" style="margin-left: 40rpx;margin-top: 28rpx">进度概览</view>
      </view>
      <view class="progress-canves-box">
        <canvas canvas-id="canvasArcbar1" id="canvasArcbar1" class="charts3"></canvas>
        <canvas canvas-id="canvasArcbar2" id="canvasArcbar2" class="charts4"></canvas>
      </view>
    </view>
    <view class="subjectList" :style="'height:' + system.listHeight + 'px;width:'+ system.width +'px;'">
      <view class="subject-text-box">
        <view class="text" style="margin-left: 40rpx">课程</view>
      </view>
      <view class="list-box-use">
        <u-collapse
            @change="change"
            @close="close"
            @open="open"
        >
          <u-collapse-item
              title="前端入门课程"
              name="Docs guide"
          >
            <view style="width: 100%;height: 100%;background-color: white">
<!--              测试overflow是否生效-->
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
              <class-item @toLearn="toLearn" />
            </view>
<!--            这个样式晚上记得写-->
          </u-collapse-item>
          <u-collapse-item
              title="CSS样式高级"
              name="Variety components"
          >
            <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
          </u-collapse-item>
          <u-collapse-item
              title="JS入门课程"
              name="Numerous tools"
          >
            <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
          </u-collapse-item>
        </u-collapse>
      </view>
    </view>
  </view>
</template>

<script>
import uCharts from '@/js_sdk/u-charts/u-charts'
import classItem from "@/pages/learning/components/classItem";
var _self
var canves1Obj
var canves2Obj
export default {
name: "progress",
  mounted() {
    _self = this;
    this.cWidth3=uni.upx2px(320);//这里要与样式的宽高对应
    this.cHeight3=uni.upx2px(320);//这里要与样式的宽高对应
    this.arcbarWidth=uni.upx2px(24);
    this.createProgress()
    this.getServerData()
  },
  props:['system'],
  components:{
     classItem
  },
  data(){
    return{
      cWidth3:'',//圆弧进度图
      cHeight3:'',//圆弧进度图
      arcbarWidth:'',//圆弧进度图，进度条宽度,此设置可使各端宽度一致
      pixelRatio:1,
      textarea:'',
      serise1:{
        series:[
          {
            name:"当前模块进度",
            data:0.74,
            color:"#45818E"
          }
        ]
      },
      serise2: {
        series: [
          {
            name: "总进度",
            data: 0.23,
            color: "#25b"
          }
        ]
      },
    }
  },
  methods:{
    toLearn(){
      console.log('123rasd')
    },
    change(){
      console.log(1)
    },
    close(){
      console.log(1)
    },
    open(){
      console.log(1)
    },
    createProgress(){
      _self.canves1("canvasArcbar1",this.serise1)
      _self.canves2("canvasArcbar2",this.serise2)
    },

    //这个是测试函数，没啥批用
    getServerData(){
      console.log(123123)
      uni.request({
        url: 'https://www.ucharts.cn/data.json',
        data:{
        },
        success: function(res) {
          // console.log(res.data.data)
          let Arcbar1={series:[]};
          let Arcbar2={series:[]};
          let Arcbar3={series:[]};
          //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
          Arcbar1.series=res.data.data.Arcbar1.series;
          Arcbar2.series=res.data.data.Arcbar2.series;
          Arcbar3.series=res.data.data.Arcbar3.series;
          console.log(Arcbar1)
          console.log(res)
        },
        fail: () => {
          _self.tips="网络错误，小程序端请检查合法域名";
        },
      });
    },
    canves1(canvasId,chartData){
      canves1Obj = new uCharts({
        $this:_self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize:11,
        legend:{show:false},
        background:'#FFFFFF',
        pixelRatio:_self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth3*_self.pixelRatio,
        height: _self.cHeight3*_self.pixelRatio,
        dataLabel: true,
        title: {
          name: Math.round(chartData.series[0].data*100)+'%',
          color: chartData.series[0].color,
          fontSize: 25*_self.pixelRatio
        },
        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15*_self.pixelRatio
        },
        extra: {
          arcbar:{
            type:'default',
            width: _self.arcbarWidth*_self.pixelRatio,//圆弧的宽度
          }
        }
      })
    },
    canves2(canvasId,chartData){
      canves2Obj = new uCharts({
        $this:_self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize:11,
        legend:{show:false},
        background:'#FFFFFF',
        pixelRatio:_self.pixelRatio,
        series: chartData.series,
        animation: true,
        width: _self.cWidth3*_self.pixelRatio,
        height: _self.cHeight3*_self.pixelRatio,
        dataLabel: true,
        title: {
          name: Math.round(chartData.series[0].data*100)+'%',
          color: chartData.series[0].color,
          fontSize: 25*_self.pixelRatio
        },
        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15*_self.pixelRatio
        },
        extra: {
          arcbar:{
            type:'default',
            width: _self.arcbarWidth*_self.pixelRatio,//圆弧的宽度
          }
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.body{
  display: flex;
  justify-content: flex-start;
  background-color: rgba(229, 229, 229, 100);
  flex-wrap: wrap;
  align-content: flex-start;
  .progress-box{
    position: relative;
    @include wh(100%,426rpx);
    margin-top: 16rpx;
    background-color: white;
    .progress-text{
      @include flex-start();
      @include wh(100%,84rpx);
      font-size: 32rpx;
      .text{
        font-size: 36rpx;
        letter-spacing: 2rpx;
        font-weight: bold;
      }
    }
    .progress-canves-box{
      @include wh(100%,342rpx);
      @include flex-center();
      justify-content: space-around;
      .charts3 {
        width: 320rpx;
        height: 320rpx;
        background-color: #FFFFFF;
      }
      .charts4{
        width: 320rpx;
        height: 320rpx;
        background-color: #FFFFFF;
      }
    }
  }
  .subjectList{
    overflow: auto;
    background-color: white;
    margin-top: 18rpx;
    .subject-text-box{
      @include flex-start();
      @include wh(100%,84rpx);
      font-size: 32rpx;
      .text{
        font-size: 36rpx;
        letter-spacing: 2rpx;
        font-weight: bold;
      }
    }
    .list-box-use{
      @include wh(100%,auto);
    }
  }
}
</style>
