<template>
  <view class="box">
    <view class="video-box">
    <video
    :page-gesture="true"
    :initial-time="0"
    src="https://cdn.uviewui.com/uview/resources/video.mp4"
    class="video"
    :vslide-gesture="true"
    :vslide-gesture-in-fullscreen="true"
    :show-mute-btn="true"
    >
     <view style="width: 200rpx;height: 200rpx;background-color: red">123123</view>
    </video>
    </view>
    <view class="detail-box">
      <view class="classtitle">0基础入门：手把手教你前端</view>
      <view class="classcreaters">尚硅谷-黎黎朝</view>
      <view class="course-box">
        <view class="course">评分:4.9</view>
        <view class="watch"><u-icon style="margin-right: 8rpx" name="eye"/>6.1W人看过</view>
      </view>
    </view>
    <view class="induce-box">
      <view class="induce-title">课程简介</view>
      <view class="induce">
        很多人都想通过做生意来获得自己想要的物质条件，因为很多人在自己的一生中，都没有办法逃过金钱。有些人其实比较富有经商头脑，而且也很有创意，能创作一些产品，这种时候其实就需要一些产品的介绍，但是这个方向实在太过于专业，很多文案都没有办法胜任，所以大家在考虑写产品介绍的时候，可以找专业的代理团队，例如阿甘文案，一个好的产品介绍一定要做到以下几点
      </view>
    </view>
    <view class="class-list-box">
      <view class="list-title">
        <view class="text">课程列表 ({{ data.length }})</view>
      </view>
      <view class="list-box">
        <view class="list-item" :key="key" v-for="(index,key) in data">
          <image style="width: 32rpx;height: 32rpx;margin-left: 24rpx" src="../static/bofang.png"></image>
          <view class="number">{{ key+1 }}</view>
          <view class="class-name-box">
            <view class="class-name">{{ index.name }}</view>
          </view>
          <view class="time">{{ index.times }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "LearningVidel",
  data(){
    return{
      data:[
        {
          name:'Vue简介',
          times:'02:15'
        },
        {
          name:'Vue框架安装',
          times: '01:12'
        },
        {
          name:'npm介绍',
          times: '03:55'
        },
        {
          name:'数据读取',
          times: '23:55'
        },
        {
          name:'文件结构讲解',
          times: '15:21'
        },
        {
          name:'循环讲解',
          times: '50:32'
        },
        {
          name:'循环练习',
          times: '44:22'
        },
        {
          name:'数据查看',
          times: '31:52'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
   .box{
     @include wh(100%,auto);
     @include flex-list();
     align-content: start;
     flex-wrap: wrap;
     .video-box{
       .video{
         @include wh(750rpx,372rpx);
       }
     }
     .detail-box{
       margin-top: -9rpx;
       @include wh(700rpx,162rpx);
       position: relative;
       .classtitle{
         @include wh(auto,44rpx);
         position: absolute;
         color: rgba(16, 16, 16, 100);
         font-size: 32rpx;
         text-align: left;
         left: 12rpx;
         top: 14rpx;
       }
       .classcreaters{
         @include wh(auto,36rpx);
         position: absolute;
         left: 16rpx;
         top: 58rpx;
         font-size: 30rpx;
         color: #797A7B;
       }
       .course-box{
         @include wh(500rpx,auto);
         @include flex-start();
         position: absolute;
         left: 16rpx;
         top: 112rpx;
         .course{
           font-size: 23rpx;
           color: #797A7B;
         }
         .watch{
           font-size: 23rpx;
           margin-left: 16rpx;
           display: flex;
           color: #797A7B;
         }
       }
     }
     .induce-box{
       @include wh(100%,auto);
       border-top: 1px solid #E5E5E6;
       @include flex-list();
       flex-wrap: wrap;
       border-bottom: 1px solid #E5E5E6;
       .induce-title{
         @include wh(100%,auto);
         padding-left: 16rpx;
         padding-top: 8rpx;
         padding-bottom: 8rpx;
       }
       .induce{
         @include wh(100%,auto);
         font-size: 25rpx;
         padding-right: 28rpx;
         padding-left: 28rpx;
         padding-bottom: 8rpx;
         color: #4e4e4e;
       }
     }
     .class-list-box{
       @include wh(100%,auto);
       .list-title{
         @include wh(100%,auto);
         .text{
           @include wh(auto,100%);
           margin-left: 16rpx;
           color: rgba(16, 16, 16, 100);
           font-size: 32rpx;
           text-align: left;
           margin-top: 8rpx;
         }
       }
       .list-box{
         @include wh(100%,310rpx);
         overflow: auto;
         margin-top: 8rpx;
         .list-item{
           @include wh(100%,50rpx);
           @include flex-start();
           .number{
             color: rgba(16, 16, 16, 100);
             font-size: 28rpx;
             text-align: left;
             font-weight: bold;
             margin-left: 14rpx;
           }
           .class-name-box{
             @include wh(580rpx,50rpx);
             display: flex;
             align-items: center;
             .class-name{
               color: rgba(16, 16, 16, 100);
               font-size: 28rpx;
               font-weight: bold;
               margin-left: 14rpx;
               @include wh(auto,auto);
             }
           }
           .time{
             color: rgba(16, 16, 16, 100);
             font-size: 24rpx;
           }
         }
       }
     }
   }
</style>
