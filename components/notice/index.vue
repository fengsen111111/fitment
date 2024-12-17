<template>
	<view class="">
		<!-- 公告列表和每日活动 -->
		<view v-for="item in dataList" :key="item.id" class="mb30 bg-white radius10" @click="handUrl(item)">
			<image :src="item.cover_image" class="w-full h360" mode=""></image>
			<view class="p20">
				<view class="flex justify-between items-center">
					<view class="text36 font-bold">‌{{item.title}}</view>
					<view class="text20">{{item.create_time}}</view>
				</view>
				<view class="col666666 text20 mt10 multi-line-ellipsis" style="line-height: 30rpx;">
				   <view v-html="item.content"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array,
				default: () => []
			},
			type: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		methods: {
			handUrl(item) {
				console.log('type', this.$props.type);
				uni.navigateTo({
					url: '/pages/home/components/noticeListDetails/index?id=' + item.id + '&type=' + this.$props
						.type
				})

			}
		},
	}
</script>

<style>
	.multi-line-ellipsis {
		display: -webkit-box;
		/* 设置为伸缩盒模型 */
		-webkit-box-orient: vertical;
		/* 垂直方向排列子元素 */
		overflow: hidden;
		/* 隐藏超出部分 */
		-webkit-line-clamp: 2;
		/* 限制显示的行数，这里是2行 */
		text-overflow: ellipsis;
		/* 超出部分显示省略号 */
	}
</style>