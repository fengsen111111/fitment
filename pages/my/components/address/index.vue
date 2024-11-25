<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'收货地址'" />
		<view class="p30 text24">
			<view class="bg-white radius10 mb20" v-for="item in [1,2,3]" :key="item">
				<view class="p20">
					<view class="col-black font-bold">张三 12312341234</view>
					<view class="col666666">四川省-成都市-武侯区 世纪城天府大道中段588号</view>
				</view>
				<view class="bg999999 h1"></view>
				<view class="p20 flex justify-between">
					<view class="flex">
						<uni-icons type="circle" size="16"></uni-icons>
						<uni-icons type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
						<view class="ml10">默认收货地址</view>
					</view>
					<view class="flex">
						<view class="colFF0000 borderFF0000 radius10 px28">删除</view>
						<view @click="handUrl('/pages/my/components/addressEdit/index')" class="col-white bg4DB23F radius10 ml40 px28">修改</view>
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
			NavBar
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
</style>