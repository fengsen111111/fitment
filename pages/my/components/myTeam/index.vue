<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'solt'" :title="'我的团队'">
			<view class="pt10">
				<uni-icons type="help" color="#ffffff" class="" size="25"></uni-icons>
			</view>
		</NavBar>
		
		<view class=" text28 p30 ">
			<view v-for="item in [1,2,3]" :key="item" class="mb20 bg-white px30 py20 radius10 items-center flex justify-between">
				<view class="flex items-center">
					<view class="w48 h48">
						<image src="@/static/home/区间分类案例2.png" class="w48 h48 radius_bfb50" mode=""></image>
					</view>
					<view class="text24 font-bold ml20">一只小海螺</view>
				</view>
				<view class="text-right">
					<view class="text20">邀请时间：XXXX-XX-XX XX:XX</view>
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