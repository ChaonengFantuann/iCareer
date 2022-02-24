<template>
<view>
  <view class="public-header-res1"></view>
  <view class="course-body">
    <view class="search-box">
      <u-search height="58rpx" :clearabled="true" :show-action="false" placeholder="搜索" v-model="keyWord"></u-search>
    </view>
    <view id='itembox' class="item-box">
      <u-tabs activeStyle="font-size:30rpx;" inactiveStyle="font-size:30rpx;" :list="list" @click="tabClick"></u-tabs>
    </view>
    <view class="full-list">
<!--      <courserItem></courserItem>-->
<!--      项目插槽-->
    </view>
  </view>
</view>
</template>

<script>
import courserItem from './components/course-item'
export default {
  name: "index.vue",
  methods:{
    tabClick(e){
      console.log(e)
    },
    itemTap(e){
      console.log(e)
    }
  },
  components:{
    courserItem
  },
  data(){
    return{
      keyWord:'',
      value:10,
      wfList:[
      ],
      list: [{
        name: '关注',
      }, {
        name: '推荐',
      }, {
        name: '电影'
      }, {
        name: '科技'
      }, {
        name: '音乐'
      }, {
        name: '美食'
      }, {
        name: '文化'
      }, {
        name: '财经'
      }, {
        name: '手工'
      }]
    }
  }
}
</script>

<style scoped lang="scss">
    .course-body{
      @include flex-list();
      flex-wrap: wrap;
      .search-box{
        @include flex-center();
        @include wh(706rpx,auto)
      }
      .full-list{
        @include wh(750rpx,1040rpx);
        @include flex-list();
      }
    }
</style>
