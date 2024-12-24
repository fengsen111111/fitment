<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'性价比好货'" />
		<view class="mt30 bg-white text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;" v-for="item in list"
			:key="item.id">
			<view class="">
				<view class="flex">
					<view class="w180 h180 relative" @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)">
						<!-- <image src="@/static/home/sytjspslt1.png" class="w180 h180 radius10" mode=""></image> -->
						<image :src="item.cover_image" class="w180 h180 radius10" mode=""></image>
						<view class="absolute text20 col-white top0 px10 radius4" style="background: linear-gradient( 134deg, #FA311D 0%, #FF8E34 100%);line-height: 36rpx;">
							推荐好货
						</view>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view v-if="item.self_support=='Y'" class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">
								<!-- {{'新中式沙发冬夏两用豪华套装'+'...'}} -->
							    	<!-- {{item.name}} -->
									{{item.name.length>13?item.name.slice(0,13)+'...':item.name}}
								</view>
							</view>
						</view>
						<view class="flex justify-between items-center w-full mt10">
							<view class="flex">
								<view class="text20">库存:{{item.stock}}</view>
								<view class="text20 ml40">销量:{{item.salled_number}}</view>
							</view>
							<view class=""></view>
						</view>
						<view class="flex justify-between items-center w-full ">
							<view class="text20">规格:{{item.size_name}}</view>
							<view></view>
						</view>
						<view class=" flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥{{item.price}}</view>
							<view class="bg4DB23F py10 px20 radius10 col-white font-bold" @click="_addCar(item)">加入购物车</view>
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
				// 
				option:{},
				
				list:[]
			}
		},
		components: {
			NavBar,
		},
		onLoad(option){
			this.option = option
			this._getGoodsList()
		},
		methods: {
			_addCar(item){
				uni.showLoading({
					title: "加载中"
				})
				api.addCar({
					post_params:{
						goods_id:item.id,
						number:1
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('加入购物车res.data',res.data);
					if(res.data.code==1){
						uni.showToast({
							title: '加入成功！',
							icon: 'success',
							duration: 4000
						})
					}
				})
			},
			// 商品列表
			_getGoodsList(){
				uni.showLoading({
					title: "加载中"
				})
				api.getGoodsList().then((res)=>{
					uni.hideLoading()
					const {list} = res.data.data
					console.log('性价比好货',list);
					this.list = list
				})
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