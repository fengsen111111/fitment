<template>
	<view>
		<NavBar :navType="'标题'" :title="'通知设置'" />
		<view class="p30 text24">
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">点赞通知</view>
					<switch color="#91C42F" :checked="form.star_notice" @change="handdz" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">收藏通知</view>
					<switch color="#91C42F" :checked="form.collection_notice" @change="handsc" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">评论通知</view>
					<switch color="#91C42F" :checked="form.comment_notice" @change="handpl" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">@通知</view>
					<switch color="#91C42F" :checked="form.cycle_notice" @change="handtz" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">关注通知(没有字段)</view>
					<switch color="#91C42F" :checked="false" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">客服通知</view>
					<switch color="#91C42F" :checked="form.service_notice" @change="handkf" style="transform:scale(0.7)"/>
				</view>
			</view>
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">订单通知</view>
					<switch color="#91C42F" :checked="form.order_notice" @change="handdd" style="transform:scale(0.7)"/>
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
				form:{
					star_notice: false,//点赞通知
					collection_notice: false,//收藏通知
					comment_notice: false,//评论通知
					cycle_notice: false,//@通知
					service_notice: false,//客服通知
					order_notice: false,//订单通知
				}
			}
		},
		components: {
			NavBar
		},
		methods: {
			handdd(event){
				console.log('订单通知开关状态:', event.detail.value);
				this.form.order_notice=event.detail.value
			},
			handkf(event){
				console.log('客服通知开关状态:', event.detail.value);
				this.form.service_notice=event.detail.value
			},
			handtz(event){
				console.log('@通知开关状态:', event.detail.value);
				this.form.cycle_notice=event.detail.value
			},
			handpl(event){
				console.log('评论通知开关状态:', event.detail.value);
				this.form.comment_notice=event.detail.value
			},
			handsc(event){
				console.log('收藏通知开关状态:', event.detail.value);
				this.form.collection_notice=event.detail.value
			},
			handdz(event){
				console.log('点赞通知开关状态:', event.detail.value);
				this.form.star_notice=event.detail.value
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