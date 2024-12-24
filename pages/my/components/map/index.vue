<template>
	<map-Point @commitCheck="commitCheck" :mapKey='mapKey' :Radius='Radius' :showResetting='showResetting'
		:configData='configData'></map-Point>
</template>
<script>
	export default {
		data() {
			return {
				mapKey: 'd31a5e61de12b4536b873e5ee5c05589',
				address: '',
				latitude: '',
				longitude: '',
				orientationIco: '',//定位图标
				showResetting: true,
				Radius: '',
				// 微信公众号jsSdk配置
				configData: {
				}
			};
		},
		methods: {
			commitCheck(e) {
				console.log('确认选点位置',e);
				uni.setStorageSync('xdwz',JSON.stringify(e))
				uni.navigateBack()
			}
		}
	};
</script>