<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'资质证照'" />
		
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">资质名称</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">资质名称</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">资质名称</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p20 radius10">
				<view class="text24">已上传资质证照</view>
				<image src="@/static/my/qualifications/zs.png" class="w-full h460 mt20" mode=""></image>
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