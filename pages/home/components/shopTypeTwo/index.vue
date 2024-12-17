<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'商品分类'" />
		<view class="w-full h300">
			<image src="@/static/home/shopType/img.png" class="w-full h300" mode=""></image>
		</view>
		<view class="p15">
			<view class="px16 grid grid-cols-3" style="grid-column-gap:15rpx">
				<view class="w-full h120" v-for="(item,index) in ['jrms','jrxp','jrxjbhh']" :key="item">
					<image @click="handUrl('/pages/home/components/'+item+'/index')"
						:src="require('@/static/home/shopType/icon'+Number(index+1)+'.png')" class="w-full h120"
						mode=""></image>
				</view>
			</view>
		</view>
		<view class="text24 bg-white p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<view class="flex justify-between items-center">
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}">
					<view class="">{{sort=='a'?'综合':'销量优先'}}</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="flex items-center" @click="()=>{$refs.popupPP.open('bottom')}">
					<view class="">{{ppName}}</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view :class="sfzy?'col4DB23F':''" @click="()=>{sfzy=!sfzy}">自营</view>
				<view class="flex items-center">
					<view class="">价格</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" v-model="price_start" class="w70 mx15" />
					</view>
					<view class="ml10">-</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" v-model="price_end" class="w70 mx15" />
					</view>
				</view>
				<view class="bg4DB23F col-white radius10 px20 py5" @click="_getGoodsList()">筛选</view>
			</view>
			<!--  -->
			<view class="py30 bg-white" style="min-height: 57vh">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in shopList"
					:key="item.id">
					<view class="w180 h180" @click="handUrl('/pages/home/components/shopDetail/index')">
						<!-- <image src="@/static/home/首页推荐商品图示例1.png" class="w180 h180" mode=""></image> -->
						<image :src="item.cover_image" class="w180 h180" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view v-if="item.platform_goods=='Y'" class="border4DB23F text20 col4DB23F px10 radius4 mr10"
									style="line-height: 30rpx;">自营</view>
								<!-- <view class="text30 font-bold">{{'新中式沙发冬夏两用豪华套装'+'...'}}</view> -->
								<view class="text30 font-bold">{{item.name.length>13?item.name.slice(0,13)+'...':item.name}}</view>
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
								<view class="flex w-full items-center justify-between">
									<view class="colFF0000 text36 font-bold">￥ {{item.price}}</view>
									<view class="font-bold text28 col-white bg4DB23F radius10 py10 px20">加入购物车</view>
								</view>
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- 普通综合弹窗 -->
		<uni-popup ref="popup" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popup.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20" :class="sort=='a'?'col4DB23F':''" @click="checkSort('a')">综合</view>
					<view class="my20" :class="sort=='b'?'col4DB23F':''" @click="checkSort('b')">销量优先</view>
				</view>
			</view>
		</uni-popup>
		<!-- 品牌弹窗 -->
		<uni-popup ref="popupPP" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<view class="">选择品牌</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupPP.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20" :class="ppIndex==item.id?'col4DB23F':''" @click="checkIndex(item)"
						v-for="item in ppList" :key="item.id">{{item.name}}</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				ppList: [], //品牌
				ppIndex: '',
				ppName:'品牌',//品牌name
				sfzy: false, //是否自营
				integral_goods_type_id: '', //商品分类id
				price_start: '', //价格起
				price_end: '', //价格止  
				sort: 'a' //a综合 b销量优先
			}
		},
		components: {
			NavBar,
		},
		onLoad(option) {
			this.integral_goods_type_id = option.integral_goods_type_id
			this._getGoodsBrandList() //品牌列表
			this._getGoodsList() //商品列表
		},
		methods: {
			checkSort(index){
				this.sort = index
				this.$refs.popup.close()
			},
			checkIndex(item) {
				this.ppIndex = item.id
				this.ppName = item.name
				this.$refs.popupPP.close()
			},
			// 商品品牌列表
			_getGoodsBrandList() {
				api.getGoodsBrandList().then((res) => {
					const {
						list
					} = res.data.data
					this.ppList = list
				})
			},
			// 商品列表
			_getGoodsList() {
				api.getGoodsList({
					post_params: {
						key_word: '', //关键词
						store_id: '', //商家ID  
						integral_goods_type_id: this.integral_goods_type_id, //商品分类ID  
						price_start: this.price_start, //价格起  
						price_end: this.price_end, //价格止  
						platform_goods: this.sfzy ? 'Y' : 'N', //自营商品  Y是 N否  
						brand_id: this.ppIndex, //品牌ID  
						sort: this.sort, //a综合 b销量优先
						currentPage: 1,
						perPage: 10
					}
				}).then((res) => {
					console.log('商品数据', res.data);
					const {list} = res.data.data
					this.shopList = list
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