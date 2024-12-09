<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'性价比好货'" />
		<view class="mt30 bg-white text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;" v-for="item in [1,2,3]"
			:key="item">
			<view class="">
				<view class="flex">
					<view class="w180 h180 relative">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w180 h180 radius10" mode=""></image>
						<view class="absolute text20 col-white top0 px10 radius4" style="background: linear-gradient( 134deg, #FA311D 0%, #FF8E34 100%);line-height: 36rpx;">
							推荐好货
						</view>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">{{'新中式沙发冬夏两用豪华套装'+'...'}}</view>
							</view>
						</view>
						<view class="flex justify-between items-center w-full mt10">
							<view class="flex">
								<view class="text20">库存:9999</view>
								<view class="text20 ml40">销量:9999</view>
							</view>
							<view class=""></view>
						</view>
						<view class="flex justify-between items-center w-full ">
							<view class="text20">规格:四人沙发</view>
							<view></view>
						</view>
						<view class=" flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="bg4DB23F py10 px20 radius10 col-white font-bold">加入购物车</view>
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
				// 分类列表
				typeList: [{
						id: 1,
						text: '今日上新'
					},
					{
						id: 2,
						text: '最近三日'
					},
					{
						id: 3,
						text: '最近七日'
					},
				],
				// 当前分类id
				type_index: 1,

			}
		},
		components: {
			NavBar,
		},
		methods: {
			handleItem(index) {
				this.type_index = index
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
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