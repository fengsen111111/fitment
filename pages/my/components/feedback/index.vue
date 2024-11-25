<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'solt'" :title="'反馈与帮助'">
			<view class="">
				<view class="w36 h40" @click="handUrl('/pages/my/components/feedbackContent/index')">
					<image src="@/static/my/feedback/feedback.png" class="w36 h40" mode=""></image>
				</view>
				<view class="text16 col-white">反馈</view>
			</view>
		</NavBar>
		
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">账号与安全的问题</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">隐私问题</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">提现问题</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">资质证照问题</view>
				<uni-icons type="right" @click="handUrl('')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="h170"></view>
			<view class="px44">
				<view class="mb20 flex bg000000 col-white text-center text32 font-bold bg-white p30 radius10 " style="opacity: 0.6;">
					<view class="flex mx-auto">
						<uni-icons type="checkbox-filled" @click="handUrl('')" color="#4DB23F" size="20"></uni-icons>
						<text class="ml20">反馈已提交</text>
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