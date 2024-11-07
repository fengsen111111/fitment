<template>
	<view class="bgSign">
		<!-- <uni-nav-bar dark :fixed="true" shadow background-color="#4DB23F" status-bar left-icon="left"
			title="签到中心" @clickLeft="back"></uni-nav-bar> -->
		<view class="flex justify-between col-white pt25 px30">
			<uni-icons type="left" size="30" color="#ffffff" @click="back()"></uni-icons>
			<view class="text36 font-bold">签到中心</view>
			<uni-icons type="help" size="30" color="#ffffff"></uni-icons>
		</view>

		<view class="bg-white mt50 radius20 p30 col91C42F">
			<view class="bg91C42F radius20 p30">
				<uni-calendar class="" :selected="info.selected" :showMonth="false" @change="change"
					@monthSwitch="monthSwitch" />
				<view class="flex px30 bg-white justify-between pb30">
					<view class="btn1">立即签到</view>
					<view class="btn2">翻倍签到</view>
				</view>
				<view class="col-white  text32 mt40 flex items-center justify-between">
					<view class="font-bold">我的积分</view>
					<view class="flex items-center">
						<view class="font-bold">9999</view>
						<uni-icons type="right" size="26" color="#ffffff" class="ml10"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="px40">
			<view class="mt30 bg-white p30 flex justify-between radius10 items-center" v-for="item in [1,2,3]" :key="item">
				<view class="text28 font-bold">任务描述</view>
				<view class="col-white text20 bgFBB333 radius10 px10">去完成</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					selected: []
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				if (this.info.selected.length > 5) return
				this.info.selected.push({
					date: e.fulldate,
					info: '+100'
				})
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			}
		}
	}
</script>

<style>
	.btn1{
		background: linear-gradient( 270deg, #4DB23F 0%, #91C42F 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}
	.btn2{
		background: linear-gradient( 134deg, #FA311D 0%, #FF8E34 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}
	.bgSign {
		background-image: url('../../../../static/home/sign/bg.png');
		background-size: 100% 100%;
		height: 100vh;
		width: 100%;
	}
</style>