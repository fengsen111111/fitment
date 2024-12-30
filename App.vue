<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			this.$store.commit('getState') //取出缓存
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import '@/common/index.css';
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
		font-family: PingFang SC, PingFang SC;
		// width: 380px;
		margin: 0 auto;
		font-size: 28rpx;//页面默认字体大小
		font-weight: 400;//页面默认字体加粗
		line-height: 40rpx;//页面默认字体行高
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>