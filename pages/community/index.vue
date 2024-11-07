<template>
	<view>
		<!-- 头部 -->
		<view class="p30">
			<view class="flex justify-between col4DB23F">
				<view class="text-center flex items-center">
					<uni-icons type="location" size="24" color="#4DB23F"></uni-icons>
					<view class="text24">成都</view>
				</view>
				<view class="flex text-center text30 font-bold col999999">
					<view class="" @click="handleType(1)">
						<view :class="type_index == 1?'col-black':''">关注</view>
						<view class="checkboxItem mx-auto" v-if="type_index == 1"></view>
					</view>
					<view class="ml85" @click="handleType(2)">
						<view class="" :class="type_index == 2?'col-black':''">发现</view>
						<view class="checkboxItem mx-auto" v-if="type_index == 2"></view>
					</view>
				</view>
				<view class="text-center">
					<uni-icons type="search" size="28" color="#4DB23F"></uni-icons>
				</view>
			</view>
		</view>
		<view class="px30 ">
			<view class="flex text24 font-bold col999999">
				<view @click="handleTitle(1)" :class="title_index == 1?'col-black':''">推荐话题</view>
				<view @click="handleTitle(2)" :class="title_index == 2?'col-black':''" class="mx74">热门话题</view>
				<view @click="handleTitle(3)" :class="title_index == 3?'col-black':''" class="">最新话题</view>
			</view>
			<view class="flex justify-between mt30" style="flex-wrap: wrap;">
				<!-- 视频 -->
				<view class="bg-white w340 mb20" v-for="(item,index) in [1,2,1,2,1,2]" :key="index">
					<image :src="require('@/static/community/社区'+item+'.png')" class="w340 h540" mode=""></image>
					<view class="px20 col333333 pb14">
						<view class="font-bold">节省时间和精力‌：通过选择全屋整装或整装装修</view>
						<view class="flex justify-between text20 mt10">
							<view class="flex items-center">
								<image src="../../static/home/区间分类案例2.png" class="w28 h28 radius20" mode="">
								</image>
								<view class="ml10">一只小海螺</view>
							</view>
							<view class="flex items-center">
								<uni-icons type="eye" size="20" color="#4DB23F"></uni-icons>
								<view class="ml10">6666</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="h140"></view>
		</view>
		<Tarbar :checkIndex="2" />
	</view>
</template>

<script>
	import Tarbar from '@/components/tarbar/index.vue'
	export default {
		components: {
			Tarbar
		},
		data() {
			return {
				// 当前分类id
				type_index: 1,
				title_index:1//当前标题
			}
		},
		methods: {
			handleType(index) {
				this.type_index = index
			},
			handleTitle(index) {
				this.title_index = index
			},
		}
	}
</script>

<style>
	.bg_top {
		background-image: url('../../static/home/bg.png');
		background-size: 100% 100%;
		padding: 30rpx;
	}

	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}

	.example::-webkit-scrollbar {
		display: none;
	}
</style>