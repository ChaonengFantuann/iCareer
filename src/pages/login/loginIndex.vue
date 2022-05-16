<template>
<view>
  <view class="public-header-res1"></view>
  <view class="loginBox">
    <view class="passwordLogin">
      <view @click="passwordLogin" class="textPassword">密码登录</view>
    </view>
    <view class="bigText">
      <view class="textBIG">手机号登录</view>
    </view>
    <view class="inputBox">
      <u-input
          style="height: 60rpx"
          placeholder="请输入手机号"
          border="bottom"
          v-model="login.phone"
          @change="change"
          fontSize="32rpx"
      >
        <u-text
            text="  +86 "
            slot="prefix"
            margin="0 3px 0 0"
            type="tips"
            v-model:="login.code"
            size="30rpx"
        >  </u-text>
      </u-input>
<!--后置插槽-->
      <u-input
          style="height: 60rpx;margin-top: 24rpx"
          placeholder="请输入验证码"
          border="bottom"
          v-model="value"
          @change="change"
          fontSize="32rpx"
      >
        <template slot="suffix">
          <view @click="getCode" class="codeText">获取验证码</view>
        </template>
      </u-input>
    </view>
    <view class="bottons">
      <u-button @click="Tologin"  :customStyle="styleBotton"  type="primary" text="登录"></u-button>
    </view>
  </view>
</view>
</template>

<script>
export default {
name: "loginIndex.vue",
  data(){
   return{
     login:{
       phone:'',
       code:''
     },
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
    passwordLogin(){
      uni.navigateTo({
        url:'/pages/login/loginPassword'
      })
    },
    Tologin(){
      uni.switchTab({
        url: '/pages/index/index'
      });
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
    .textPassword{
      @include wh(auto,44rpx);
      @include flex-center();
      color: rgba(16, 16, 16, 100);
      font-size: 32rpx;
      font-family: PingFangSC-light,serif;
      margin-left: 564rpx;
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
