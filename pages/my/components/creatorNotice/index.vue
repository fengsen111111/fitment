<template>
	<view>
		<NavBar :navType="'标题'" :title="'通知设置'" />
		<view class="p30 text24">
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">点赞通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">收藏通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">评论通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">@通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">关注通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">客服通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">订单通知</view>
					<switch color="#91C42F" checked="true" style="transform:scale(0.7)"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {}
		},
		components: {
			NavBar
		},
		methods: {

			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	.bgItem {
		background-color: #666666;
		width: 4rpx;
		height: 4rpx;
		margin-bottom: 4rpx;
	}
</style>