<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索'" />
		<view class="bg-white p30 text24 flex justify-between items-center">
			<view class="flex items-center font-bold ">
				<view class="">我的积分</view>
				<view class="ml10 col4DB23F">888888</view>
				<view class="ml10 col-white text20 bg91C42F radius30 px10">获取积分</view>
			</view>
			<view class="col4DB23F ">我的兑换</view>
		</view>

		<view class="px30">
			<view class="flex overflow-auto example mt30">
				<view v-for="item in typeList" class="mr50 text28 text-center " :key="item.id"
					@click="handleItem(item.id)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col999999'">
						{{item.text}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
		</view>
		<view class="mt30 text24 bg-white p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
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
			<view class="py30 bg-white" style="height: 71vh">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in [1,2,3]"
					:key="item">
					<view class="w128 h128">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w128 h128" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view class="border4DB23F text20 col4DB23F px10 radius4 mr10" style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">{{'精品多钻豪华富贵18'+'...'}}</view>
							</view>
							<view class="col333333 text24 ml40">规格:1条</view>
						</view>
						<view class="flex justify-between items-center w-full">
							<view class="">
								<view class="flex col333333 text24">
									<view class="">库存:9999</view>
									<view class="ml40">销量:9999</view>
								</view>
								<view class="flex text28 items-center">
									<view class=" colFF0000 font-bold">积分 6666</view>
									<view class="colFF0000 ml20  font-bold">￥ 6666</view>
								</view>
							</view>
							<view @click="handUrl('/pages/home/components/pointsMallDetail/index')" class="col-white text28 font-bold bg4DB23F px30 radius10 text-center h70"
								style="line-height: 70rpx;">
								兑换
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
				// 分类列表
				typeList: [{
						id: 1,
						text: '项链'
					},
					{
						id: 2,
						text: '衣服'
					},
					{
						id: 3,
						text: '鞋子'
					},
					{
						id: 4,
						text: '饰品'
					},
					{
						id: 5,
						text: '挂件'
					},
					{
						id: 6,
						text: '配饰'
					},
					{
						id: 7,
						text: '鞋子'
					},
					{
						id: 8,
						text: '饰品'
					},
					{
						id: 9,
						text: '挂件'
					},
					{
						id: 10,
						text: '配饰'
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