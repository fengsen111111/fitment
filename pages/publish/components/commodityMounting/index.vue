<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索2'" />

		<view class="mt30">
			<view class=" p30 bg-white">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in [1,2,3]" :key="item">
					<view class="w180 h180">
						<image src="@/static/home/sytjspslt1.png" class="w180 h180" mode=""></image>
					</view>
					<view class="ml20">
						<view class="flex items-center">
							<view class="border4DB23F col4DB23F px10 radius4 mr10">自营</view>
							<view class="text30 font-bold">{{'新中式沙发沙发冬夏两用豪华'+'...'}}</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">库存:9999</view>
							<view class="ml40">销量:9999</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">规格:四人沙发</view>
						</view>
						<view class="flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="flex items-center">
								<view class="colFF0000 text24 font-bold">佣金:6666</view>
								<view class="text28 border4DB23F ml10 col4DB23F py10 px30 radius10">挂载</view>
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
	export default {
		data() {
			return {

			}
		},
		components: {
			NavBar
		},
		methods: {}
	}
</script>

<style>
	.btn1 {
		background: linear-gradient(270deg, #4DB23F 0%, #91C42F 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}

	.btn2 {
		background: linear-gradient(134deg, #FA311D 0%, #FF8E34 100%);
		border-radius: 50rpx;
		width: 260rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: bold;
		padding: 25rpx 0rpx;
		color: white;
		font-family: PingFang SC, PingFang SC;
	}

	.bgSign {
		background-image: url('../../../../static/home/sign/bg.png');
		background-size: 100% 100%;
		height: 100vh;
		width: 100%;
	}
</style>