<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'solt'" :title="title">
			<view class="pt10">
				<uni-icons type="help" color="#ffffff" class="" size="25"></uni-icons>
			</view>
		</NavBar>
		
		<view class=" text28 p30 ">
			<view class="mb20 bg-white px30 py20 radius10 items-center flex justify-between" v-for="item in dataList" :key="item.id">
				<view class="">{{item.name}}</view>
				<view class="text-right">
					<view class="colFF0000 text30">{{item.type=='a'?'+':'-'}}{{item.number}}</view>
					<view class="text20">{{item.create_time}}</view>
				</view>
			</view>
			<!-- <view class="mb20 bg-white px30 py20 radius10 items-center flex justify-between">
				<view class="">分享商品获取</view>
				<view class="text-right">
					<view class="col666666 text30">-666</view>
					<view class="text20">XXXX-XX-XX XX:XX</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				title:'',
				
				dataList:[]//数据
			}
		},
		onLoad(option){
			this.title = option.title
		},
		components: {
			NavBar,
		},
		methods: {
			// 积分记录
			_getIntegralRecords(){
				api.getIntegralRecords({
					post_params:{
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.dataList = list
					console.log('积分记录',list);
				})
			},
			// 收益记录列表
			_getMoneyRecords(){
				api.getMoneyRecords({
					post_params:{
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.dataList = list
					console.log('收益记录',list);
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