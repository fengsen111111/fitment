<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'solt'" :title="'积分记录/收益记录'">
			<view class="pt10">
				<uni-icons type="help" color="#ffffff" class="" size="25"></uni-icons>
			</view>
		</NavBar>
		
		<view class=" text28 p30 ">
			<view class="mb20 bg-white px30 py20 radius10 items-center flex justify-between">
				<view class="">签到获取</view>
				<view class="text-right">
					<view class="colFF0000 text30">+666</view>
					<view class="text20">XXXX-XX-XX XX:XX</view>
				</view>
			</view>
			<view class="mb20 bg-white px30 py20 radius10 items-center flex justify-between">
				<view class="">分享商品获取</view>
				<view class="text-right">
					<view class="col666666 text30">-666</view>
					<view class="text20">XXXX-XX-XX XX:XX</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
			}
		},
		components: {
			NavBar,
		},
		methods: {
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>

<style>
	.example::-webkit-scrollbar {
		display: none;
	}
	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>