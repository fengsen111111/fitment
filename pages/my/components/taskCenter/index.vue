<template>
	<view class="bgSign">
		<!-- <uni-nav-bar dark :fixed="true" shadow background-color="#4DB23F" status-bar left-icon="left"
			title="签到中心" @clickLeft="back"></uni-nav-bar> -->
		<view class="flex justify-between col-white pt25 px30">
			<uni-icons type="left" size="30" color="#ffffff" @click="back()"></uni-icons>
			<view class="text36 font-bold">任务中心</view>
			<view class="w15"></view>
		</view>
		
		<view class="bgF5F5F5  mt267" style="border-radius: 30rpx 30rpx 0rpx 0rpx;height: 82vh;">
			<view class="relative px50 top-207">
				<uni-calendar class=" " :selected="info.selected" :showMonth="false" @change="change"
					@monthSwitch="monthSwitch" />
				<view class="flex mt20  justify-between">
					<view class="p25 bg-white radius10 flex items-center">
						<uni-icons type="calendar-filled" size="28" color="#4DB23F"></uni-icons>
						<view class="text28 ml20">分享任务 1/10</view>
					</view>
					<view class="p25 bg-white radius10 flex items-center">
						<uni-icons type="paperplane-filled" size="28" color="#4DB23F"></uni-icons>
						<view class="text28 ml20">发布任务 1/10</view>
					</view>
				</view>
				<view @click="()=>{$refs.popupNew.open('center')}" class="flex justify-between bg-white p25 mt20 radius10 items-center">
					<view class="flex items-center">
						<uni-icons type="personadd-filled" size="28" color="#4DB23F"></uni-icons>
						<view class="text28 ml20" >新用户邀请</view>
					</view>
					<uni-icons type="right" size="20" color="#8D8D8D"></uni-icons>
				</view>
				<view v-for="item in [1,2,3]" :key="item" class="flex justify-between font-bold bg-white p25 mt20 radius10 items-center">
					<view class="flex items-center ">
						<view class="text28">任务描述</view>
					</view>
					<view class="flex">
						<view class="radius10 bgFBB333 col-white px10 py6">去完成</view>
						<view class="radius10 bg4DB23F col-white px10 py6">去分享</view>
						<view class="radius10  col91C42F px10 py6">已完成</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 新用户邀请 -->
		<!-- 新增发票 -->
		<uni-popup ref="popupNew" background-color="#F5F5F5" borderRadius="20rpx 20rpx 20rpx 20rpx">
			<view class="p30">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">邀请二维码</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupNew.close()}"></uni-icons>
				</view>
				<view class="px50 text-center">
					<view class="w538 h538">
						<image src="@/static/home/首页推荐视频封面1.png" class="w538 h538" mode=""></image>
					</view>
					<view class="mt77 col-white font-bold radius10 py17 w-full bg4DB23F">立即分享</view>
					<view class="mt20 col4DB23F font-bold radius10 py17 w-full border4DB23F">保存到手机</view>
				</view>
			</view>
		</uni-popup>
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