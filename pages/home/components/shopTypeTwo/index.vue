<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'商品分类'" />
		<view class="w-full h300">
			<image src="@/static/home/shopType/img.png" class="w-full h300" mode=""></image>
		</view>
		<view class="p15">
			<view class="px16 grid grid-cols-3" style="grid-column-gap:15rpx">
				<view class="w-full h120" v-for="item in [1,2,3]" :key="item">
					<image :src="require('@/static/home/shopType/icon'+item+'.png')" class="w-full h120" mode=""></image>
				</view>
			</view>
		</view>
		<view class=" text24 bg-white p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<view class="flex justify-between items-center">
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}" >
					<view class="">综合</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}" >
					<view class="">品牌</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="">自营</view>
				<view class="flex items-center">
					<view class="">价格</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" class="w70 mx15" />
					</view>
					<view class="ml10">-</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" class="w70 mx15" />
					</view>
				</view>
				<view class="bg4DB23F col-white radius10 px20 py5">筛选</view>
			</view>
			<!--  -->
			<view class="py30 bg-white" style="min-height: 57vh">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in [1,2,3]"
					:key="item">
					<view class="w180 h180" @click="handUrl('/pages/home/components/shopDetail/index')">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w180 h180" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view class="border4DB23F text20 col4DB23F px10 radius4 mr10" style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">{{'新中式沙发冬夏两用豪华套装'+'...'}}</view>
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
								<view class="flex w-full items-center justify-between">
									<view class="colFF0000 text36 font-bold">￥ 6666</view>
									<view class="font-bold text28 col-white bg4DB23F radius10 py10 px20">加入购物车</view>
								</view>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popup.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20 col4DB23F">综合</view>
					<view class="my20">销量优先</view>
				</view>
			</view>
		</uni-popup>
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