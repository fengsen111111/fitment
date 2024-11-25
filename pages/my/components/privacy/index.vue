
<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'设置'" />
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相册权限</view>
				<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">位置权限</view>
				<switch color="#91C42F" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相机权限</view>
				<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">剪切板读取权限</view>
				<switch color="#91C42F" style="transform:scale(0.7)"/>
			</view>
			
			<view class="h170"></view>
			<!-- <view class="mb20 colFF0000 text-center bg-white p30 radius10 ">
				退出登陆
			</view> -->
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