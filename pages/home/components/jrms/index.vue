<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'今日秒杀'" />

		<view class="px30">
			<view class="grid grid-cols-2 text-center mt30">
				<view v-for="item in typeList" class="mr50 text24 text-center " :key="item.id"
					@click="handleItem(item.id)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col666666'">
						{{item.text}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
		</view>
		<view class="mt30 bg-white text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;" @click="handUrl('/pages/home/components/shopDetail/index')" v-for="item in [1,2,3]"
			:key="item">
			<view class="">
				<view class="flex">
					<view class="w180 h180">
						<image src="@/static/home/sytjspslt1.png" class="w180 h180 radius10" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">{{'新中式沙发冬夏两用豪华套装'+'...'}}</view>
							</view>
						</view>
						<view class="flex justify-between items-center w-full mt10">
							<view class="text20">库存:9999</view>
							<view class="text28 font-bold">销量:9999</view>
						</view>
						<view class="flex justify-between items-center w-full mt10">
							<view class="text20">规格:四人沙发</view>
							<view></view>
						</view>
						
						<view v-if="type_index==1" class="mt10 flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="flex items-center" >
								<view class="bg4DB23F text24 font-bold col-white px30 radius10">倒计时</view>
								<view class="border4DB23F text24 font-bold col4DB23F px30 radius10 relative left-16" style="line-height: 37rpx;">
									<!-- XX:XX:XX -->
									<uni-countdown color="#4DB23F" splitorColor="#4DB23F" :font-size="12" :show-day=false :day="1" :hour="1" :minute="12" :second="40" />
								</view>
							</view>
						</view>
						<view v-else class="mt10 flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="flex items-center col666666 bgF5F5F5 radius10 px8 font-bold text20" >
								<view class="">开启时间:</view>
								<view class="">2024-12-12 18:45</view>
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
				// 分类列表
				typeList: [{
						id: 1,
						text: '正在秒杀'
					},
					{
						id: 2,
						text: '暂未开启'
					},
				],
				// 当前分类id
				type_index: 1,

			}
		},
		components: {
			NavBar,
		},
		methods: {
			handleItem(index) {
				this.type_index = index
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
	.example::-webkit-scrollbar {
		display: none;
	}

	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>