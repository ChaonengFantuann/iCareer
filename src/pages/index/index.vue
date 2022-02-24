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
      <view style="width: 600rpx;height: 200rpx;margin-top: 100rpx;border: 1px solid black">
        <u-button @click="firstPage" type="primary" text="月落"></u-button>
      </view>
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        indexKeyword:'',
        swiperList:[
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        ],
			}
		},
		onLoad() {

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
   }
</style>
