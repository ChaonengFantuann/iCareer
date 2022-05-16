<template>
  <view class="course-box">
    <view class="public-header-res1"></view>
    <view class="search-box-use">
      <u-search height="74rpx" :clearabled="true" :show-action="false" placeholder="搜索" v-model="indexKeyword"></u-search>
    </view>
    <view class="boardcase-box">
      <u--image :showLoading="true" radius="9" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109250022255053-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648903500&t=908cfb5304b41545d7734bd7411dae87" width="660rpx" height="256rpx" @click="boardClick"></u--image>
    </view>
    <view class="function-box-top">
      <view v-for="(item,index) in itemAray" :key="index" class="item-box-fuc">
        <view class="icon-space"><image style="width: 48rpx;height: 48rpx;" :src="'../../static/'+itemPhoto[index]+'.png'" mode=""></image></view>
        <view class="text-space">{{ item }}</view>
      </view>
    </view>
    <view class="function-box-down">
      <view @click="toSourceRoom(index)" v-for="(item,index) in smallIconArray" :key="index" class="item-box-down">
        <view class="icon-space-down"><image style="width: 48rpx;height: 48rpx;" :src="'../../static/'+smallPhoto[index]+'.png'"></image></view>
        <view class="text-space-down">{{ item }}</view>
      </view>
    </view>
    <view class="user-action-align">
      <view class="text-title">精品课</view>
      <view class="title-swiper">
        <u-swiper
            @click="swiperClick"
            height="140"
            :list="swiperList"
            indicator
            indicatorMode="dot"
            circular
        ></u-swiper>
      </view>
    </view>
    <view class="class-inf-box">
      <view class="text">必修课</view>
    </view>
    <view class="class-content-box">
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
      <CourseItem></CourseItem>
    </view>
  </view>
</template>

<script>
import CourseItem from "@/pages/course/components/CourseItem";
export default {
  name: "index.vue",
  components:{ CourseItem },
  data(){
    return{
      indexKeyword:'',
      swiperList:[
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ],
      itemAray:['必修课','进阶课','实践课','技能课'],
      smallIconArray:['后端','产品','运营','更多'],
      itemPhoto:['bixiu','jinjie','shijian','jineng'],
      smallPhoto:['houduan','chanpin','yunying','gengduo']
    }
  },
  onPullDownRefresh(){
    setTimeout(()=>{
      uni.stopPullDownRefresh()
    },1000)
  },
  methods:{
    boardClick(){
      console.log(123)
    },
    swiperClick(){
      console.log(123)
    },
    toSourceRoom(index){
      console.log(index)
      if(index === 3){
        console.log(123)
        uni.navigateTo({
          url:'/pages/learning/LearningRoom'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .course-box{
    @include flex-list();
    @include wh(750rpx,auto);
    align-content: flex-start;
    flex-wrap: wrap;
    .search-box-use{
      @include wh(370px,100%);
    }
    .boardcase-box{
      @include wh(660rpx,256rpx);
      margin-top: 32rpx;
    }
    .function-box-top{
      @include wh(660rpx,138rpx);
      margin-top: 34rpx;
      @include flex-between();
      .item-box-fuc{
        @include wh(90rpx,138rpx);
        @include flex-list();
        flex-wrap: wrap;
        .icon-space{
          @include wh(90rpx,90rpx);
          @include flex-center();
          background-color: rgb(201, 224, 233);
          border-radius: 90rpx;
        }
        .text-space{
          @include wh(90rpx,40rpx);
          margin-top: 8rpx;
          color: rgba(16, 16, 16, 100);
          font-size: 28rpx;
          font-family: PingFangSC-regular,serif;
        }
      }
    }
    .function-box-down{
      @include flex-between();
      @include wh(640rpx,104rpx);
      margin-top: 64rpx;
      .item-box-down{
        @include wh(56rpx,104rpx);
        @include flex-list();
        align-content: flex-start;
        flex-wrap: wrap;
        .icon-space-down{
          @include wh(56rpx,56rpx);
          @include flex-center();
        }
        .text-space-down{
          @include wh(auto,40rpx);
          margin-top: 8rpx;
		  color: rgba(16, 16, 16, 100);
		  font-size: 28rpx;
		  text-align: left;
        }
      }
    }
    .user-action-align{
      @include wh(660rpx,352rpx);
      margin-top: 46rpx;
      .text-title{
        @include wh(84rpx,40rpx);
        color: rgba(16, 16, 16, 100);
        font-size: 28rpx;
        text-align: left;
        font-family: PingFangSC-regular,serif;
      }
      .title-swiper{
        @include wh(660rpx,280rpx);
        margin-top: 32rpx;
      }
    }
    .class-inf-box{
      margin-top: 32rpx;
      @include wh(750rpx,40rpx);
      .text{
        color: rgba(16, 16, 16, 100);
        font-size: 28rpx;
        text-align: left;
        font-family: PingFangSC-regular,serif;
        margin-left: 50rpx;
      }
    }
    .class-content-box{
      @include wh(634rpx,700rpx);
      @include flex-list();
      align-content: flex-start;
      margin-top: 34rpx;
      flex-wrap: wrap;
    }
  }
</style>
