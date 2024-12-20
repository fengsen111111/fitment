<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'今日新品'" />

		<view class="px30">
			<view class="grid grid-cols-3 text-center mt30">
				<view v-for="item in typeList" class="mr50 text24 text-center " :key="item.id"
					@click="handleItem(item.id)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col666666'">
						{{item.text}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
		</view>
		<view class="mt30 bg-white text24 p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;" v-for="item in list"
			:key="item.id">
			<view class="">
				<view class="flex">
					<view class="w180 h180" @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)">
						<!-- <image src="@/static/home/sytjspslt1.png" class="w180 h180 radius10" mode=""></image> -->
						<image :src="item.cover_image" class="w180 h180 radius10" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view v-if="item.self_support=='Y'" class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<view class="text30 font-bold">
								<!-- {{'新中式沙发冬夏两用豪华套装'+'...'}} -->
							    	{{item.name}}
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
				// 分类列表
				typeList: [{
						id: 'a',
						text: '今日上新'
					},
					{
						id: 'b',
						text: '最近三日'
					},
					{
						id: 'c',
						text: '最近七日'
					},
				],
				// 当前分类id
				type_index: 'a',

			}
		},
		onLoad(){
			this._getGoodsList()
		},
		components: {
			NavBar,
		},
		methods: {
			// 加入
			_addCar(item){
				api.addCar({
					post_params:{
						goods_id:item.id,
						number:1
					}
				}).then((res)=>{
					console.log('加入购物车res.data',res.data);
				})
			},
			// 商品列表
			_getGoodsList(){
				api.getGoodsList({
					post_params:{
						new_goods: this.type_index
					}
				}).then((res)=>{
					const {list} = res.data.data
					console.log('包邮专区',list);
					this.list = list
				})
			},
			handleItem(index) {
				this.type_index = index
				this._getGoodsList()
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