<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'搜索'" @searchVal="searchVal" />
		<view class="bg-white p30 text24 flex justify-between items-center">
			<view class="flex items-center font-bold ">
				<view class="">我的积分</view>
				<view class="ml10 col4DB23F">{{userInfo.integral}}</view>
				<view class="ml10 col-white text20 bg91C42F radius30 px10">获取积分</view>
			</view>
			<view class="col4DB23F" @click="handUrl('/pages/home/components/myRedemptions/index')">我的兑换</view>
		</view>

		<view class="px30">
			<view class="flex overflow-auto example mt30">
				<view v-for="item in typeList" class="mr50 text28 text-center " :key="item.id"
					@click="handleItem(item.id)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col999999'">
						{{item.name}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
		</view>
		<view class="mt30 text24 bg-white p30" style="border-radius: 20rpx 20rpx 0rpx 0rpx;">
			<view class="flex justify-between items-center">
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}" >
					<view class="">{{sort=='a'?'综合':'销量优先'}}</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="flex items-center" @click="()=>{$refs.popupPP.open('bottom')}" >
					<view class="">品牌</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view :class="sfzy?'col4DB23F':''" @click="()=>{sfzy=!sfzy}">自营</view>
				<view class="flex items-center">
					<view class="">价格</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" class="w70 mx15" />
					</view>
					<view class="ml10">-</view>
					<view class="bgF9F9F9 py10 radius10 ml10">
						<input type="text" class="w70 mx15" />
					</view>
				</view>
				<view class="bg4DB23F col-white radius10 px20 py5" @click="_getIntegralGoodsList()">筛选</view>
			</view>
			<!--  -->
			<view class="py30 bg-white" style="height: 71vh">
				<view class="flex pb30 mb30" style="border-bottom: 1px solid #999999;" v-for="item in jfspList"
					:key="item.id">
					<view class="w128 h128">
						<!-- <image src="@/static/home/sytjspslt1.png" class="w128 h128" mode=""></image> -->
						<image :src="item.cover_image" class="w128 h128" mode=""></image>
					</view>
					<view class="ml20 w-full">
						<view class="flex items-center justify-between">
							<view class="flex items-center">
								<view v-if="item.platform_goods=='Y'" class="border4DB23F text20 col4DB23F px10 radius4 mr10" style="line-height: 30rpx;">自营</view>
								<!-- <view class="text30 font-bold">{{'精品多钻豪华富贵18'+'...'}}</view> -->
								<view v-if="item.name" class="text30 font-bold">{{item.name.length>8?item.name.slice(0,8):item.name}}</view>
							</view>
							<view class="col333333 text24 ml40">规格:{{item.size_name}}</view>
						</view>
						<view class="flex justify-between items-center w-full">
							<view class="">
								<view class="flex col333333 text24">
									<view class="">库存:{{item.stock}}</view>
									<view class="ml40">销量:{{item.salled_number}}</view>
								</view>
								<view class="flex text28 items-center">
									<view class=" colFF0000 font-bold">积分 {{item.integral}}</view>
									<view class="colFF0000 ml20  font-bold">￥ {{item.price}}</view>
								</view>
							</view>
							<view @click="handUrl('/pages/home/components/pointsMallDetail/index')" class="col-white text28 font-bold bg4DB23F px30 radius10 text-center h70"
								style="line-height: 70rpx;">
								兑换
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
				// 分类列表
				typeList: [{
						id: 1,
						name: '项链'
					},
					{
						id: 2,
						name: '衣服'
					},
					{
						id: 3,
						name: '鞋子'
					},
					{
						id: 4,
						name: '饰品'
					},
					{
						id: 5,
						name: '挂件'
					},
					{
						id: 6,
						name: '配饰'
					},
					{
						id: 7,
						name: '鞋子'
					},
					{
						id: 8,
						name: '饰品'
					},
					{
						id: 9,
						name: '挂件'
					},
					{
						id: 10,
						name: '配饰'
					},
				],
				type_index: 1,// 当前分类id
				key_word:'',//关键词
				price_start:'',//价格起
				price_end:'',//价格止
				sfzy: false, //是否自营
				ppIndex:'',//品牌ID  
				sort: 'a' ,//a综合 b销量优先
				ppList:[],//品牌列表
				
				jfspList:[],//积分商品列表
				
				userInfo:{},//用户信息
				
			}
		},
		components: {
			NavBar,
		},
		created(){
			this.userInfo = this.$store.state.userInfo
			this._getIntegralGoodsTypeList()//积分商品分类列表
			this._getIntegralGoodsBrandList()//积分商品品牌列表
			this._getIntegralGoodsList()//获取积分商品列表
		},
		methods: {
			// 搜索
			searchVal(val){
				console.log('搜索内容',val);
				this.key_word = val
				this._getIntegralGoodsList()//获取积分商品列表
			},
			// 获取积分商品列表
			_getIntegralGoodsList(){
				api.getIntegralGoodsList({
					post_params:{
						key_word: '', //关键词
						integral_goods_type_id: this.type_index, //积分商品分类ID 
						price_start: this.price_start, //价格起  
						price_end: this.price_end, //价格止  
						platform_goods: this.sfzy ? 'Y' : 'N', //自营商品  Y是 N否  
						brand_id: this.ppIndex, //品牌ID  
						sort: this.sort, //a综合 b销量优先
						currentPage: 1,
						perPage: 10
					}
				}).then((res)=>{
					const {list} = res.data.data
					this.jfspList = list
				})
			},
			// 积分商品品牌列表
			_getIntegralGoodsBrandList(){
				api.getIntegralGoodsBrandList().then((res)=>{
					const {list} = res.data.data
					this.ppList = list
				})
			},
			// 积分商品分类列表
			_getIntegralGoodsTypeList(){
				api.getIntegralGoodsTypeList().then((res)=>{
					const {list} = res.data.data
					this.typeList = list
					this.type_index = list[0].id
				})
			},
			checkSort(index){
				this.sort = index
				this.$refs.popup.close()
			},
			checkIndex(item) {
				this.ppIndex = item.id
			},
			handleItem(index) {
				this.type_index = index
				this._getIntegralGoodsList()//获取积分商品列表
			},
			handUrl(url){
				uni.navigateTo({
					url:url
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