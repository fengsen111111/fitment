<template>
	<view class="tarBarClass text12 grid grid-cols-5">
		<view @click="handleCheck(item)" class="text-center" v-for="item in tarbarList" :key="item.id">
			<view class="relative left8" v-if="item.id == 3">
				<view class="bg-white half-circle absolute ">
					<image :src="item.url" mode="" class="w120 h120"></image>
				</view>
			</view>
			<view v-else>
				<image v-if="checkIndex==item.id" :src="item.checkUrl" mode="" class="iconAll"></image>
				<image v-else :src="item.url" mode="" class="iconAll"></image>
				<view class="text20 mt-10" :class="checkIndex==item.id?'col91C42F':''">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			checkIndex: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				route: '',
				tarbarList: [{
						id: 1,
						text: '首页',
						url: require('@/static/tarbar/tarbar1.png'),
						checkUrl: require('@/static/tarbar/tarbar1_check.png'),
						path: '/pages/home/index',
					},
					{
						id: 2,
						text: '社区',
						url: require('@/static/tarbar/tarbar2.png'),
						checkUrl: require('@/static/tarbar/tarbar2_check.png'),
						path: '/pages/community/index',
					},
					{
						id: 3,
						text: '发布',
						url: require('@/static/tarbar/fb.png'),
						checkUrl: '',
						path: '/pages/publish/index',
					},
					{
						id: 4,
						text: '消息',
						url: require('@/static/tarbar/tarbar3.png'),
						checkUrl: require('@/static/tarbar/tarbar3_check.png'),
						path: '/pages/message/index',
					},
					{
						id: 5,
						text: '我的',
						url: require('@/static/tarbar/tarbar4.png'),
						checkUrl: require('@/static/tarbar/tarbar4_check.png'),
						path: '/pages/my/index',
					},
				]
			}
		},
		created() {
			const pages = getCurrentPages();
			const page = pages[pages.length - 1];
			// console.log('底部生命周期', page.route);
			this.route = page.route
		},
		methods: {
			handleCheck(item) {
				if (item.path == '/' + this.route) {
					return
				}
				console.log('item', item.path);
				uni.navigateTo({
					url: item.path
				})
			}
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
		top: -45px;
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