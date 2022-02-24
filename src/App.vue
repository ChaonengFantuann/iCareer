<script>
import store from './store'
	export default {
		onLaunch: function() {
      uni.getSystemInfo({
        success(res){
          console.log(res)
          store.state.systemInfo.system = res
        }
      })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
@import "~uview-ui/index.scss";
	/*每个页面公共css */
</style>
