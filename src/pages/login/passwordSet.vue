<template>
  <view>
    <view class="public-header-res1"></view>
    <view class="loginBox">
      <view class="passwordLogin">
        <u-icon @click="backPage" class="passwordIcon" size="25" name="arrow-left"/>
      </view>
      <view class="bigText">
        <view class="textBIG">设置密码</view>
      </view>
      <view class="inputBox">
        <u-input
            style="height: 60rpx"
            placeholder="请输入密码"
            border="bottom"
            v-model="value"
            @change="change"
            fontSize="32rpx"
        >
          <u-text
              text="  +86 "
              slot="prefix"
              margin="0 3px 0 0"
              type="tips"
              size="30rpx"
          >  </u-text>
        </u-input>
        <!--后置插槽-->
        <u-input
            style="height: 60rpx;margin-top: 24rpx"
            placeholder="确认密码"
            border="bottom"
            v-model="value"
            @change="change"
            fontSize="32rpx"
        >
        </u-input>
      </view>
      <view class="bottons">
        <u-button  :customStyle="styleBotton"  type="primary" text="登录"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "loginIndex.vue",
  data(){
    return{
      value:'',
      styleBotton:{
        borderRadius:'34rpx',
        backgroundColor:'#45818E',
        fontSize:'50rpx',
        letterSpacing:'4px'
      }
    }
  },
  methods:{
    change(e){
      console.log(e)
    },
    getCode(){
      console.log(123123123)
    },
    backPage(){
      uni.navigateBack()
    }
  }
}
</script>

<style scoped lang="scss">
.loginBox{
  @include wh(100%,1265rpx);
  .passwordLogin{
    @include wh(100%,88rpx);
    @include flex-start();
    .passwordIcon{
      @include wh(auto,auto);
      margin-left: 48rpx;
    }
  }
  .bigText{
    @include wh(100%,80rpx);
    @include flex-start();
    margin-top: 84rpx;
    .textBIG{
      @include wh(auto,80rpx);
      @include flex-center();
      margin-left: 48rpx;
      font-size: 56rpx;
      text-align: left;
      font-weight: bold;
      font-family: PingFangSC-regular,serif;
    }
  }
  .inputBox{
    @include wh(662rpx,180rpx);
    margin-top: 68rpx;
    margin-left: 44rpx;
    .codeText{
      font-size: 28rpx;
      color: #134F5C;
    }
  }
  .bottons{
    @include wh(668rpx,68rpx);
    margin-top:72rpx;
    margin-left: 40rpx;
  }
}
</style>
