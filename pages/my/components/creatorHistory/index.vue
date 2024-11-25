<template>
	<view>
		<NavBar :navType="'标题'" :title="'历史记录/圈过/我的收藏'" />
		<view class="p30 text24">
			<view class="flex bg-white radius10">
				<view class="w200 h140">
					<image src="@/static/home/graphic/tw.png" class="w200 h140 radius10" mode=""></image>
				</view>
				<view class="py10 px20">
					<view class="text20 font-bold" style="line-height: 30rpx;">节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间
					</view>
					<view class="flex items-center">
						<image src="@/static/home/区间分类案例2.png" class="w28 h28 radius20" mode="">
						</image>
						<view class="ml10 text20">一只小海螺</view>
					</view>
					<view class="flex items-center justify-between">
						<view class="text20 col666666">XXXX-XX-XX XX:XX</view>
						<view @click="()=>{$refs.popupCZZ.open('bottom')}">
							<view class="bgItem"></view>
							<view class="bgItem"></view>
							<view class="bgItem"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 分享 -->
		<uni-popup ref="popupCZZ" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold text28">分享</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupCZZ.close()}"></uni-icons>
				</view>
				<view class="">
					<view class="grid grid-cols-4">
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/wx.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">微信</view>
						</view>
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/pyq.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">朋友圈</view>
						</view>
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/nbfx.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">微信</view>
						</view>
					</view>
					<view class="grid grid-cols-4 mt60">
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/qxsc.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">取消收藏</view>
						</view>
						<view class="text-center">
							<view class="w60 h60 mx-auto">
								<image src="@/static/my/creatorCenter/sc_2.png" class="w60 h60 radius_bfb50" mode=""></image>
							</view>
							<view class="text28 col333333 mt10">删除</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
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