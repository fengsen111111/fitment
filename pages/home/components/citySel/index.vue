<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索'" @searchVal="searchVal" />
		<view class="p30">
			<view class="flex justify-between items-center">
				<view class="flex items-center">
					<image src="@/static/home/btnBooking/dw.png" class="h20 w16" mode=""></image>
					<view class="text20 ml10">当前位置</view>
				</view>
				<view class="flex items-center">
					<image src="@/static/home/cxdw.png" style="width: 19rpx;height: 19rpx;" mode=""></image>
					<view class="text16 ml5" style="margin-top: 1rpx;">重新定位</view>
				</view>
			</view>
			<view class="grid grid-cols-4 text28 text-center mt20">
				<view class="bg-white radius10 py10">成都</view>
			</view>
			<view class="flex justify-between items-center mt20">
				<view class="flex items-center">
					<image src="@/static/home/rmcs.png" class="h20 w16" mode=""></image>
					<view class="text20 ml10">热门城市</view>
				</view>
				<view></view>
			</view>
			<view class="grid grid-cols-4 text28 text-center mt20" style="grid-column-gap:10rpx">
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
				<view class="bg-white mb10 radius10 py10">成都</view>
			</view>
		</view>
		<view class="p20">
			<view style="height: 65vh;position: relative;">
				<uni-indexed-list :options="list" :show-select="false" @click="bindClick" />
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	import {
		result
	} from './index_new.js'
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				list: result,
			}
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			},
			searchVal(val) {
				if(val){
					const arr = this.list.map(group => {
						const filteredData = group.data.filter(item => item.label.includes(val)); // 筛选包含关键字的label
						return {
							...group,
							data: filteredData
						};
					}).filter(group => group.data.length > 0); // 移除没有符合条件的分组
					// console.log('搜索', val, arr);
					this.list = arr
				}else{
					this.list = result
				}
			}
		}
	}
</script>

<style>
</style>