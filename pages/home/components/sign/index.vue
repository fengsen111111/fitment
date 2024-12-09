<template>
	<view class="bgSign">
		<view class="flex justify-between col-white pt25 px30">
			<uni-icons type="left" size="30" color="#ffffff" @click="back()"></uni-icons>
			<view class="text36 font-bold">签到中心</view>
			<uni-icons type="help" size="30" color="#ffffff"></uni-icons>
		</view>
		<view class="bg-white mt50 radius20 p30 col91C42F">
			<view class="bg91C42F radius20 p30">
				<uni-calendar :selected="info.selected" :showMonth="false" @change="change"
					@monthSwitch="monthSwitch" />
				<view class="flex px30 bg-white justify-between py30">
					<view class="btn1" @click="_sign('normal')">立即签到</view>
					<view class="btn2" @click="_sign('more')">翻倍签到</view>
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
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				info: {
					selected: [
						{
							date: '2024-12-05',
							info: '+100'
						}
					]
				}
			}
		},
		onLoad(){
			this._getSignList() //获取签到记录
		},
		methods: {
			// 签到
			_sign(str){
				uni.showLoading({
					title: "加载中"
				}) 
				api.sign({
					post_params:{
						sign_type: str
					}
				}).then((res)=>{
					uni.hideLoading()
					uni.showToast({
						title: '签到成功！',
						icon: 'success',
						duration: 2000
					})
				})
			},
			// 获取签到记录
			_getSignList(){
				let str = new Date().getFullYear()+'/'+ Number(new Date().getMonth() + 1)
				console.log('str',str);
				api.getSignList({
					post_params:{
						month:str
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.info.selected = list.map((item)=>{
						return {
							date: item.data,
							info: '+'+item.integral
						}
					})
				})
			},
			back() {
				uni.navigateBack()
			},
			change(e) {
				console.log('change 返回:', e.fulldate)
				// 模拟动态打卡
				// if (this.info.selected.length > 5) return
				// this.info.selected.push({
				// 	date: e.fulldate,
				// 	info: '+100'
				// })
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