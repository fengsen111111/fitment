<template>
	<view class="">
		<view class="bg4DB23F" v-if="navType=='搜索'">
			<view class="flex pt25 px30  items-center pb14 justify-between">
				<uni-icons type="left" size="30" style="margin-left: -10rpx;" @click="back()" color="#ffffff"></uni-icons>
				<view class="bg-white flex items-center py10 px20 radius40">
					<uni-icons type="search" size="20" color="#999999" class="mt5"></uni-icons>
					<input type="text" placeholder="输入搜索内容" class=" w55vw text28" />
				</view>
				<view class="bg91C42F col-white font-bold text28 px30 py10 radius40">搜索</view>
			</view>
		</view>
		<view class="bg4DB23F" v-else-if="navType=='标题'">
			<view class="pt25 px30 grid grid-cols-3 pb20 justify-between">
				<uni-icons type="left" size="30" style="text-align: left;margin-left: -10rpx;" @click="back()" color="#ffffff"></uni-icons>
				<view class="text-center text36 font-bold col-white">{{title}}</view>
				<view class="w15"></view>
			</view>
		</view>
		<view class="bg4DB23F" v-else-if="navType=='搜索2'">
			<view class="flex pt25 px30  items-center pb14 justify-between">
				<uni-icons type="left" size="30" style="margin-left: -10rpx;" @click="back()" color="#ffffff"></uni-icons>
				<view class="bg-white flex items-center py10 px20 radius40">
					<uni-icons type="search" size="20" color="#999999" class="mt5"></uni-icons>
					<input type="text" placeholder="输入搜索内容" class=" w55vw text28" />
				</view>
				<view class="w140"></view>
				<!-- <view class="bg91C42F col-white font-bold text28 px30 py10 radius40">搜索</view> -->
			</view>
		</view>
		<view class="" v-else-if="navType=='solt'">
			<view class="bg4DB23F">
				<view class="pt25 px30 grid grid-cols-3 pb20 items-center">
					<uni-icons type="left" size="30" style="text-align: left;margin-left: -10rpx;" @click="back()" color="#ffffff"></uni-icons>
					<view class="text-center text36 font-bold col-white">{{title}}</view>
					<view style="text-align: center;line-height: 30rpx;" class="flex justify-between">
						<view class="w15"></view>
						<slot></slot>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navType: {
				type: String,
				default: '搜索' //
			},
			title:{
				type:String,
				default:''
			}
		},
		data() {
			return {
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
		},
	}
</script>

<style>
	.half-circle {
		width: 120rpx;
		/* 设置宽度 */
		height: 60rpx;
		/* 设置高度（高度为宽度的一半） */
		background-color: white;
		/* 设置背景颜色 */
		border-radius: 65rpx 65rpx 0 0;
		/* 上半部分圆角 */
		box-shadow: 0 -3rpx 6rpx rgba(0, 0, 0, 0.2);
		padding: 10rpx;
		top: -46px;
	}

	.border_BY {
		border-radius: 50% 50% 0 0;
	}

	.shadow_tarbar {
		box-shadow: 0rpx -3rpx 6rpx 1rpx rgba(0, 0, 0, 0.4);
	}

	image {
		will-change: transform
	}

	.iconAll {
		width: 40rpx;
		height: 40rpx;
	}

	.tarBarClass {
		width: 100%;
		/* width: 380px; */
		position: fixed;
		bottom: 0px;
		/* border-top: 1px solid #D7D9EC; */
		background-color: #fff;
		padding: 20rpx 0rpx;
		border-radius: 20rpx 20rpx 0px 0px;
		box-shadow: 0rpx -3rpx 6rpx 1rpx rgba(0, 0, 0, 0.2);
	}
</style>