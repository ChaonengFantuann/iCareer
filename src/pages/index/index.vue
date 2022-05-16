<template>
	<view>
    <view class="public-header-res1"></view>
    <view class="index-body">
      <view class="search-box">
        <u-search height="74rpx" :clearabled="true" :show-action="false" placeholder="搜索" v-model="indexKeyword"></u-search>
      </view>
      <view class="swiper-box">
        <u-swiper
            @click="swiperClick"
            height="175"
            :list="swiperList"
            indicator
            indicatorMode="dot"
            circular
        ></u-swiper>
      </view>
      <view class="gray-collapes" />
      <view class="hot-line-advice-box">
        <view class="nav-top-advice">
          <view class="hot-line-title">热门岗位学习路线</view>
          <view class="icon-box">
            更多
            <u-icon name="arrow-right"></u-icon>
          </view>
        </view>

        <view class="item-box-advice">
          <view class="line-box">
            <view style="width: 300rpx;height: 3rpx;background-color: #F2F2F2"></view>
            <view style="width: 300rpx;height: 3rpx;background-color: #F2F2F2"></view>
          </view>
          <view class="item-box" >
            <view class="icon-space"><u-image radius="6" src="https://img1.baidu.com/it/u=3214878879,2657787747&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" width="80rpx" height="80rpx"></u-image></view>
            <view class="text-space">
              <view class="name">后端工程师</view>
               <view class="skill">适用难度:普通</view>
              </view>
           </view>
          <view style="width: 3rpx;height: 120rpx;background-color: #F2F2F2" />
          <view class="item-box">
            <view class="icon-space"><u-image radius="6" src="https://cdn.uviewui.com/uview/album/1.jpg" width="85rpx" height="85rpx"></u-image></view>
            <view class="text-space">
              <view class="name">网站设计师</view>
              <view class="skill">适用难度:高级</view>
            </view>
          </view>
          <view class="item-box">
            <view class="icon-space"><u-image radius="6" src="https://img2.baidu.com/it/u=491725677,1323726954&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="85rpx" height="85rpx"></u-image></view>
            <view class="text-space">
              <view class="name">前端工程师</view>
              <view class="skill">适用难度:简单</view>
            </view>
          </view>
          <view style="width: 3rpx;height: 120rpx;background-color: #F2F2F2" />
          <view class="item-box">
            <view class="icon-space"><u-image radius="6" src="https://img2.baidu.com/it/u=1223813030,70154980&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" width="85rpx" height="85rpx"></u-image></view>
            <view class="text-space">
              <view class="name">运维工程师</view>
              <view class="skill">适用难度:中等</view>
            </view>
          </view>
         </view>
       </view>
      <view class="gray-collapes" />
      <view class="job-inf-box">
        <view class="nav-top-advice">
          <view class="hot-line-title">岗位信息</view>
          <view class="icon-box">
            大厅
            <u-icon name="arrow-right"></u-icon>
          </view>
        </view>
        <view class="job-out-box">
          <jobItem :infoto="item" v-for="(item,index) in jobList" :key="index" @jobdetail="toDetailJob"></jobItem>
        </view>
      </view>
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import jobItem from "@/pages/index/components/jobItem";
	export default {
	  components:{ jobItem },
		data() {
			return {
				title: 'Hello',
        indexKeyword:'',
        jobList:[
          {
            title:'前端视觉设计师',
            money:'8K-9K',
            tags:['JAVA','C#','网络运维'],
            company:'字节跳动',
            people:'5-12人',
            address:'天津市河西区'
          },
          {
            title:'高级产品经理',
            money:'1.5K',
            tags:['产品','前端','设计'],
            company:'晨光优品',
            people:'4人',
            address:'上海市桃浦区'
          },
          {
            title:'网络运维工程师',
            money:'4K',
            tags:['网络','维护','Python'],
            company:'TP-Link',
            people:'1人',
            address:'北京市朝阳区'
          },
          {
            title:'后端JAVA工程师',
            money:'2.4K',
            tags:['JSP','Java'],
            company:'阿里巴巴',
            people:'1人',
            address:'北京市东城区'
          }
        ],
        swiperList:[
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        ],
			}
		},
		onLoad() {

		},
    onPullDownRefresh(){
      setTimeout(()=>{
        uni.stopPullDownRefresh()
      },1000)
    },
		methods: {
      swiperClick(e){
        this.$refs.uToast.show({
						type: 'default',
						title: '结束后跳转标签页',
						message: "this is a test",
						url: '/pages/componentsB/tag/tag',
						iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/jump.png',
						complete(){
							console.log(123123123)
						}
					})
      },
      toDetailJob(){
        uni.navigateTo({
          url:'/pages/company/companyContent'
        })
      },
      firstPage(){
        uni.navigateTo({
          url:'/pages/login/loginIndex'
        })
      }
		}
	}
</script>

<style lang="scss">
   .index-body{
     @include wh(100%,auto);
     @include flex-center();
     .search-box{
       @include wh(370px,100%);
     }
     .swiper-box{
       margin-top: 16rpx;
       @include wh(706rpx,auto);
     }
     .gray-collapes{
       @include wh(100%,16rpx);
       background-color: #F2F2F2;
     }
     .hot-line-advice-box{
       @include wh(750rpx,414rpx);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .nav-top-advice{
         @include wh(100%,40rpx);
         margin-top: 36rpx;
         @include flex-between();
         .hot-line-title{
           @include wh(224rpx,40rpx);
           color: rgba(16, 16, 16, 100);
           font-size: 28rpx;
           font-family: PingFangSC-regular,serif;
           margin-left: 36rpx;
         }
         .icon-box{
           @include wh(auto,40rpx);
           display: flex;
           margin-right: 36rpx;
           font-size: 28rpx;
         }
       }
       .item-box-advice{
         .line-box{
           top: 120rpx;
           @include wh(100%,28rpx);
           position: absolute;
           align-items: center;
           display: flex;
           justify-content: space-around;
         }
         position: relative;
         @include wh(690rpx,268rpx);
         margin-top: 34rpx;
         display: flex;
         justify-content: space-around;
         align-content: space-around;
         flex-wrap: wrap;
         .item-box{
           @include wh(300rpx,120rpx);
           @include flex-center();
           justify-content: space-around;
           .icon-space{
             @include wh(85rpx,85rpx);
           }
           .text-space{
             display: flex;
             align-content: space-evenly;
             flex-wrap: wrap;
             @include wh(172rpx,80rpx);
             .name{
               @include wh(auto,50rpx);
               font-size: 28rpx;
             }
             .skill{
               @include wh(auto,auto);
               font-size: 21rpx;
             }
           }
         }
       }
     }
     .job-inf-box{
       @include wh(100%,auto);
       @include flex-list();
       align-content: flex-start;
       flex-wrap: wrap;
       .nav-top-advice{
         @include wh(100%,40rpx);
         margin-top: 36rpx;
         @include flex-between();
         .hot-line-title{
           @include wh(224rpx,40rpx);
           color: rgba(16, 16, 16, 100);
           font-size: 28rpx;
           font-family: PingFangSC-regular,serif;
           margin-left: 36rpx;
         }
         .icon-box{
           @include wh(auto,40rpx);
           display: flex;
           font-size: 28rpx;
           margin-right: 36rpx;
         }
       }
       .job-out-box{
         margin-top: 32rpx;
         @include wh(706rpx,auto);
         @include flex-list();
         align-content:flex-start;
         flex-wrap: wrap;
       }
     }
   }
</style>
