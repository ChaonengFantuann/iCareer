<template>
  <view class="body">
    <view class="public-header-res1"></view>
    <view class="search-box">
      <u-search @clickIcon="filters" searchIcon="grid-fill" height="60rpx" :clearabled="true" :show-action="false" placeholder="搜索" v-model="indexKeyword"></u-search>
    </view>
    <view class="item-box">
      <classRoomItem></classRoomItem>
    </view>
    <u-popup :duration="300" mode="left" :closeOnClickOverlay="true" :show="popuseShow" @close="popusClose">
      <view class="props-use">
        <view class="picker-nav"/>
        <view class="box1">
          <popupItem></popupItem>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
import classRoomItem from "@/pages/learning/components/classRoomItem";
import popupItem from "@/pages/learning/components/popupItem";
export default {
  name: "LearningRoom",
  components: {
    classRoomItem, popupItem
  },
  data() {
    return {
      indexKeyword: '',
      popuseShow: false
    }
  },
  methods: {
    filters() {
      this.popuseShow = true
    },
    popusClose(){
      this.popuseShow = false
      console.log('关闭')
    }
  }
}
</script>

<style scoped lang="scss">
.body{
  @include wh(100%,auto);
  @include flex-list();
  align-content: flex-start;
  flex-wrap: wrap;
  .search-box{
    @include wh(370px,100%);
  }
  .item-box{
    @include wh(100%,auto);
    @include flex-list();
    align-content: flex-start;
    flex-wrap: wrap;
    padding-top: 10rpx;
  }
  .props-use{
    width: auto;
    height: auto;
    @include flex-list();
    align-content: start;
    flex-wrap: wrap;
    .picker-nav{
      width: 100%;
      height: 69rpx;
      background-color: #7F7F7F;
    }
    .box1{
      position: absolute;
      left: 0;
      top: 69rpx;
      width: 500rpx;
      height: 100%;
      overflow: auto;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: #F2F2F2;

    }
  }
}

</style>
