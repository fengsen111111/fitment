<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'历史浏览'" />
		<view class=" text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<!--  -->
			<view class="">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in dataList"
					:key="item.id">
					<view v-if="item.images" class="w120 h120 " @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)">
						<!-- <image src="@/static/home/sytjspslt1.png" class="w120 h120 " mode=""></image> -->
						<image :src="item.images[0]" class="w120 h120 " mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view v-if="item.self_support=='Y'" class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold" v-if="item.name">{{item.name.length>15?item.name.slice(0,15)+'...':item.name}}</view>
							</view>
						</view>
						<view class="flex justify-between items-center w-full">
							<view class="w-full">
								<view class="flex col333333 text24">
									<view class="">库存:{{item.stock}}</view>
									<view class="ml40">销量:{{item.salled_number}}</view>
								</view>
								<view class="flex col333333 text24">
									<view class="">规格:{{item.size_name}}</view>
								</view>
							</view>
							<view class="colFF0000 text36 font-bold flex w160 ">￥{{item.price}}</view>
						</view>
					</view>
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
				lsjlList: [] ,//历史记录id
				dataList:[]//列表数据
			}
		},
		components: {
			NavBar,
		},
		onShow() {
			console.log('浏览记录id', this.$store.state.lsjlList);
			if (this.$store.state.lsjlList) {
				this.lsjlList = this.$store.state.lsjlList
				this.dataList = []
				this.lsjlList.map((id)=>{
					this._getGoodsDetail(id)
				})
			}
		},
		methods: {
			// 商品详情
			_getGoodsDetail(id) {
				api.getGoodsDetail({
					post_params: {
						id: id
					}
				}).then((res) => {
					const {data} = res.data
					this.dataList.push(data)
				})
			},
			// 
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