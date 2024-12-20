<template>
	<view>
		<NavBar :navType="'标题'" :title="title" />
		<view class="p30 text24">
			<view class="flex bg-white radius10 mb20" v-for="item in dataList" :key="item.id">
				<view class="w200 h140">
					<!-- <image src="@/static/home/graphic/tw.png" class="w200 h140 radius10" mode=""></image> -->
					<image :src="item.image" class="w200 h140 radius10" mode=""></image>
				</view>
				<view class="py10 px20">
					<view class="text20 font-bold" style="line-height: 30rpx;">
						<!-- 节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间 -->
						{{item.title}}
					</view>
					<view class="flex items-center">
						<!-- <image src="@/static/home/qjflal2.png" class="w28 h28 radius20" mode=""></image> -->
						<image :src="item.head_image" class="w28 h28 radius20" mode=""></image>
						<view class="ml10 text20">{{item.nickname}}</view>
					</view>
					<view class="flex items-center justify-between">
						<view class="text20 col666666">{{item.create_time}}</view>
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
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				title:'',
				
				dataList:[]//数据列表
			}
		},
		components: {
			NavBar
		},
		onLoad(option){
			this.title = option.title
			this._getArticleList()
		},
		methods: {
			_getArticleList(){
				api.getArticleList({
					collect:'Y'//我的收藏
				}).then((res)=>{
					const {list} = res.data.data
					this.dataList = list
					console.log('数据列表',this.dataList);
				})
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
	.bgItem {
		background-color: #666666;
		width: 4rpx;
		height: 4rpx;
		margin-bottom: 4rpx;
	}
</style>