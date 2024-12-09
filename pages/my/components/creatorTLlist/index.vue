<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'投流订单'" />
		<view class=" text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<view class="flex col666666 text24  items-center">
				<view @click="()=>{indexType='a'}" class="mr50" :class="indexType == 'a'?'col-black border_bot_4DB23F font-bold':''">投流中</view>
				<view @click="()=>{indexType='b'}" :class="indexType == 'b'?'col-black border_bot_4DB23F font-bold':''">已结束</view>
			</view>
			<!--  -->
			<view class="mt50">
				<view class="bg-white mb30 radius10  py10" v-for="item in tlList"
					:key="item.id">
					<view class="flex items-center px30">
						<view class="w200 h140 radius10">
							<image src="@/static/my/myShop/bg.png" class="w200 h140 radius10" mode=""></image>
						</view>
						<view class="ml10 text20 col-black" style="line-height: 30rpx;">
							<!-- 节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时... -->
							{{item.title}}
						</view>
					</view>
					<view class="bg999999 h1 my10"></view>
					<view class="px30">
						<view class="flex justify-between items-center">
							<view class="flex items-center">
								<view class="">提交时间</view>
								<view class="ml20">{{item.create_time}}</view>
							</view>
							<view class="flex">
								<view class="col4988FE" v-if="item.status=='a'">投流中</view>
								<view class="col666666" v-else>已结束</view>
							</view>
						</view>
						<view class="flex justify-between items-center">
							<view class="flex items-center">
								<view class="">地区</view>
								<view class="ml20">成都市</view>
							</view>
							<view class="flex items-center">
								<view class="">投流时间</view>
								<view class="ml20">{{item.time}}</view>
							</view>
							<view class="flex items-center">
								<view class="">价格</view>
								<view class="ml20 colFF0000">￥{{item.price}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				indexType:'a',//
				tlList:[]//数据
			}
		},
		components: {
			NavBar,
		},
		onLoad(){
			this._recommendArticleOrderList()
		},
		methods: {
			_recommendArticleOrderList(){
				api.recommendArticleOrderList({
					post_params:{
						status: this.indexType,
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.tlList = list
					console.log('投流订单',this.tlList);
				})
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