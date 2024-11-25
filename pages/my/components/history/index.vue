<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'历史浏览'" />
		<view class=" text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<!--  -->
			<view class="">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in [1,2,3]"
					:key="item">
					<view class="w120 h120 " @click="handUrl('/pages/home/components/shopDetail/index')">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w120 h120 " mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view class="border4DB23F text20 col4DB23F px10 radius4 mr10" style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">{{'新中式沙发冬沙夏两用豪华套装装'+'...'}}</view>
							</view>
						</view>
						<view class="flex justify-between items-center w-full">
							<view class="w-full">
								<view class="flex col333333 text24">
									<view class="">库存:9999</view>
									<view class="ml40">销量:9999</view>
								</view>
								<view class="flex col333333 text24">
									<view class="">规格:四人沙发</view>
								</view>
							</view>
							<view class="colFF0000 text36 font-bold flex w160 ">￥6666</view>
						</view>
					</view>

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