<template>
	<view>
		<uni-nav-bar dark :fixed="true" shadow background-color="#4DB23F" status-bar left-icon="left"
			title="发布" @clickLeft="back"></uni-nav-bar>
		<view class="p30">
			<view class="grid text-center grid-cols-2 text30" style="grid-column-gap:20rpx">
				<view class="bg-white p20 radius10">
					<image src="../../static/publish/img.png" class="w280 h256" mode=""></image>
					<view class="mt30 font-bold">发布图文</view>
				</view>
				<view class="bg-white p20 radius10">
					<image src="../../static/publish/video.png" class="w280 h256" mode=""></image>
					<view class="mt30 font-bold">发布视频</view>
				</view>
			</view>
			
			<view class="px36 mt236">
				<view class="flex items-center text30 bg-black col-white text-center radius10 py30">
					<view class="flex mx-auto">
						<uni-icons type="checkbox-filled" size="30" color="#4DB23F"></uni-icons>
						<view class="ml30">内容审核中</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			back() {
				console.log('返回')
				uni.navigateBack()
			},
		}
	}
</script>

<style>

</style>