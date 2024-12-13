<template>
	<view class="">
		<view class="mb30 bg-white radius10" @click="handUrl('/pages/home/components/noticeListDetails/index')">
			<image src="@/static/home/gg1.png" class="w-full h360" mode=""></image>
			<view class="p20">
				<view class="flex justify-between items-center">
					<view class="text36 font-bold">‌装修的优点</view>
					<view class="text20">‌2024-12-16</view>
				</view>
				<view class="col666666 text20 mt10" style="line-height: 30rpx;">
					‌节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间和精力。这种方式让消费者无需亲自寻找不同的装......
				</view>
			</view>
		</view>
		<view class="mb30 bg-white radius10" @click="handUrl('/pages/home/components/noticeListDetails/index')">
			<image src="@/static/home/gg2.png" class="w-full h360" mode=""></image>
			<view class="p20">
				<view class="flex justify-between items-center">
					<view class="text36 font-bold">‌装修的优点</view>
					<view class="text20">‌2024-12-16</view>
				</view>
				<view class="col666666 text20 mt10" style="line-height: 30rpx;">
					‌节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间和精力。这种方式让消费者无需亲自寻找不同的装......
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			}
		},
	}
</script>

<style>
	
</style>