<template>
	<view>
    <view class="state_div">

    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        name:this.$store.state.user.name
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
   .state_div{
     height: $nav-top-height;
     width: 100%;
     background-color: red;
   }
</style>
