<template>
	<view>
		<!-- 头部 -->
		<view class="bg_top">
			<view class="h40"></view>
			<view class="flex justify-between col-white">
				<view class="text-center" @click="handUrl('/pages/home/components/citySel/index')">
					<uni-icons type="location" size="30" color="#FFFFFF"></uni-icons>
					<view class="text20" style="line-height: 20rpx;">成都</view>
				</view>
				<view class="px30 w-4-5" @click="handUrl('/pages/home/components/search/index')">
					<view class="bg-white py14 px20 flex items-center radius50">
						<uni-icons type="search" size="20" color="#999999"></uni-icons>
						<text class="col999999 text28 ml10">输入关键词搜索</text>
					</view>
				</view>
				<view class="text-center" @click="handUrl('/pages/home/components/sign/index')">
					<uni-icons type="calendar" size="30" color="#FFFFFF"></uni-icons>
					<view class="text16" style="line-height: 16rpx;">签到</view>
				</view>
			</view>
			<view class="mt36">
				<uni-swiper-dot class="uni-swiper-dot-box"
					:dots-styles="{selectedBackgroundColor:'#91C42F',backgroundColor:'#999999'}">
					<swiper :autoplay="true" class="swiper-box radius10 h300" :current="lbt_index" @change="swChange">
						<swiper-item @click="handleFwb(item)" v-for="(item, index) in info" :key="index">
							<image src="../../static/home/sylbt.png" class="h300 w-full radius10" mode=""></image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				<view class="flex mt10">
					<view class="flex mx-auto">
						<view class="w20 h6 mr20" @click="handLBT(index)" v-for="(item,index) in info" :key="index"
							:class="lbt_index == index?'bg91C42F':'bg999999'"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="px30">
			<!-- card *5-->
			<view class="p30 radius10 bg-white flex justify-between text16"
				style="box-shadow: 0rpx 3rpx 6rpx 1rpx rgba(0,0,0,0.4);">
				<view class="text-center" @click="handUrl(item.url)" v-for="item in iconList" :key="item.img">
					<view class="">
						<image :src="require('@/static/home/'+item.img+'.png')" class="w50 h50" mode=""></image>
					</view>
					<view class="" style="line-height: 20rpx;">{{item.text}}</view>
				</view>
			</view>
			<!-- 专区 -->
			<view class="flex justify-between mt30">
				<view class="" @click="byPageCli('-')">
					<image src="../../static/home/home_left.png" class="w50 h120" mode=""></image>
				</view>
				<view class="grid grid-cols-3" style="grid-column-gap:10rpx">
					<view class="" v-for="item in byzqList" :key="item.id"
						@click="handUrl('/pages/home/components/byzq/index?id='+item.id)">
						<image :src="item.cover_image" class="w180 h120" mode=""></image>
					</view>
				</view>
				<view class="" @click="byPageCli('+')">
					<image src="../../static/home/home_right.png" class="w50 h120" mode=""></image>
				</view>
			</view>
			<!-- 专区内容  *5-->
			<view class="grid grid-cols-5 mt40">
				<view class="text-center mx-auto w100 text20 col-black mb10" v-for="item in twoTypeList" :key="item.id"
					@click="handUrl('/pages/home/components/shopTypeTwo/index?integral_goods_type_id='+item.id)">
					<view class="">
						<image :src="item.icon" class="w100 h100 radius10" mode=""></image>
					</view>
					<view class="">{{item.name}}</view>
				</view>
			</view>
			<!-- 查看更多 -->
			<view @click="handUrl('/pages/home/components/shopType/index')" class="col4DB23F text20 mt20 text-center">
				查看更多</view>
			<!-- 分类 *4 超出滚动-->
			<view class="flex overflow-auto example mt30">
				<view v-for="item in typeList" class="mr50 text28 text-center " :key="item.id"
					@click="handleItem(item)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col999999'">
						{{item.text}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
				<view v-for="item in spflList" class="mr50 text28 text-center " :key="item.id"
					@click="handleItem(item)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col999999'">
						{{item.name}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
			<!-- 分类 -->
			<view class="mt40 ">
				<view v-if="type_index == 1" class="grid grid-cols-2" style="grid-column-gap:20rpx">
					<image @click="handUrl('/pages/home/components/pointsMall/index')" src="../../static/home/jfhl.png"
						class="w-full h200 radius10" mode=""></image>
					<image @click="handUrl('/pages/home/components/jrms/index')" src="../../static/home/xsms.png"
						class="w-full h200 radius10" mode=""></image>
				</view>
				<view v-else-if="type_index == 2">
					<view class="grid grid-cols-2" style="grid-column-gap:20rpx">
						<image @click="handUrl('/pages/home/components/sign/index')" src="../../static/home/qdyl.png"
							class="w-full h200 radius10" mode=""></image>
						<image @click="handUrl('/pages/home/components/noticeList/index')"
							src="../../static/home/xtgg.png" class="w-full h200 radius10" mode=""></image>
					</view>
					<view class="mt20">
						<Notice :dataList="mrhdList" :type="'mrhd'" />
					</view>
				</view>
				<view v-else>
					<view class="grid grid-cols-5 mt40">
						<view class="text-center mx-auto w100 text20 col-black mb10"
							v-for="item in itemTypeObj.children" :key="item.id"
							@click="handUrl('/pages/home/components/shopTypeTwo/index?integral_goods_type_id='+item.id)">
							<view class="">
								<image :src="item.icon" class="w100 h100 radius10" mode=""></image>
							</view>
							<view class="">{{item.name}}</view>
						</view>
					</view>
					<view v-if="itemTypeObj.children.length==0">分类暂无数据！</view>
				</view>
			</view>
			<!-- 推荐 -->
			<view class="font-bold text28 col-black mt40">推荐</view>
			<view class="mt20 flex justify-between" style="flex-wrap: wrap;">
				<!-- 商品 -->
				<view>
					<view class="bg-white w340 mb20" v-for="(item,index) in tjspList" :key="item.id">
						<!-- <image @click="handUrl('/pages/home/components/graphic/index')"
							src="../../static/home/sytjspslt1.png" class="w340 h340" mode=""></image> -->
						<image @click="handUrl('/pages/home/components/shopDetail/index?id='+item.id)"
							:src="item.cover_image" class="w340 h340" mode=""></image>
						<view class="px20 pb14">
							<view class="col333333 font-bold text28">
								{{item.name.length>20?item.name.slice(0,20)+'...':item.name}}
							</view>
							<view class="colFF0000 font-bold mt10 text28">￥{{item.price}}</view>
							<view class="flex text20 mt10" style="line-height: normal">
								<view class="bg4DB23F col-white px10 radius4" v-if="item.self_support=='Y'">自营</view>
								<view class="ml20 border4DB23F col4DB23F px10 radius4">销量 {{item.salled_number}}</view>
							</view>
							<view class="flex justify-between col666666 text20 mt10">
								<view class="">规格 ‌{{item.size_name}}‌</view>
								<view class="">库存 {{item.stock}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 视频 -->
				<view class="">
					<view class="bg-white w340 mb20" v-for="(item,index) in czzList" :key="item.id">
						<view v-if="item.type=='b'">
							<!-- 视频 -->
							<view class="w340 h575 bg-black" v-if="item.video">
								<image @click="handUrl('/pages/home/components/video/index?id='+item.id)"
									:src="'https://api.qfcss.cn'+item.images[0]" class="w340 h575" mode=""></image>
							</view>
						</view>
						<view v-else>
							<!-- 图片 -->
							<image @click="handUrl('/pages/home/components/graphic/index?id='+item.id)"
								:src="'https://api.qfcss.cn'+item.images[0]" class="w340 h340" mode=""></image>
						</view>
						<view class="px20 col333333 pb14">
							<view class="font-bold text28">{{item.title.length>20?item.title.slice(0,20):item.title}}
							</view>
							<view class="flex justify-between text20 mt10">
								<view class="flex items-center">
									<image src="../../static/home/qjflal2.png" class="w28 h28 radius20" mode="">
									</image>
									<view class="ml10">一只小海螺</view>
								</view>
								<view class="flex items-center">
									<uni-icons type="eye" size="20" color="#4DB23F"></uni-icons>
									<view class="ml10">6666</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="h160"></view>
		</view>
		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="bg-white col-black p30 radius20" style="width: 80vw;">
				<view class="grid grid-cols-3">
					<view class=""></view>
					<view class="text28 text-center">最新公告</view>
					<view class="flex items-center justify-between">
						<view class=""></view>
						<uni-icons type="closeempty" @click="()=>{$refs.popup.close()}" size="20"></uni-icons>
					</view>
				</view>
				<view class="mt20">
					<view class="text36 mb20">{{GGObj.title}}</view>
					<view v-html="GGObj.content">富文本内容</view>
				</view>
			</view>
		</uni-popup>
		<Tarbar :checkIndex="1" />
	</view>
</template>

<script>
	import api from '@/request/allApi.js'
	import Tarbar from '@/components/tarbar/index.vue'
	import Notice from '@/components/notice/index.vue'
	export default {
		components: {
			Tarbar,
			Notice
		},
		onLoad() {
			this._getGoodsTypeList() //商品分类列表
			this._getIndexGoodsTypeList() //商品二级分类
			this._getGoodsActivityList() //包邮专区列表
			this._getActivityList() //每日活动
			this._getUserInfo() //用户信息
			this._getNewNotice() //未读公告
			// this._getBannerList() //轮播图列表
			this._getArticleList() //创作者列表
			this._getGoodsList() //首页推荐商品
		},
		data() {
			return {
				// 轮播索引
				lbt_index: 0,
				// 轮播图片
				info: [{
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					},
					{
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					},
					{
						url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					}
				],
				// icon列表
				iconList: [{
						img: 'icon_1',
						text: '装修服务',
						url: '/pages/home/components/renovationServices/index'
					},
					{
						img: 'icon_2',
						text: '设计服务',
						url: '/pages/login/components/fwbText?type=introduce_b_rich'
					},
					{
						img: 'icon_3',
						text: '验房服务',
						url: '/pages/home/components/homeInspection/index'
					},
					{
						img: 'icon_4',
						text: '监理服务',
						url: '/pages/login/components/fwbText?type=introduce_d_rich'
					},
					{
						img: 'icon_5',
						text: '加入平台',
						url: '/pages/home/components/joinPC/index'
					}
				],
				// 分类列表
				typeList: [{
						id: 1,
						text: '热门推荐'
					},
					{
						id: 2,
						text: '每日活动'
					},
					// 分类
				],
				// 当前分类id
				type_index: 1,
				// 公告
				GGObj: {
					id: '',
					title: '‌',
					create_time: '',
					content: ''
				},

				spflList: [], //商品分类列表

				twoTypeList: [], //二级分类列表
				itemTypeObj: {}, //当前一级分类
				byzqList: [], //包邮专区列表
				byzqAll: [], //所有包邮专区列表

				byPage: 1, //包邮页数

				mrhdList: [], //每日活动列表

				tjspList: [], //推荐商品列表
				czzList: [] //创作者列表
			}
		},
		methods: {
			// 首页推荐商品
			_getGoodsList() {
				api.getGoodsList({
					post_params: {
						index_recommend: 'Y',
						currentPage: 1,
						perPage: 10
					}
				}).then((res) => {
					console.log('首页推荐商品', res.data.data.list);
					this.tjspList = res.data.data.list
				})
			},
			// 创作者列表
			_getArticleList() {
				api.getArticleList({
					post_params: {
						"my_status": "b"
					}
				}).then((res) => {
					console.log('创作者', res.data.data.list);
					this.czzList = res.data.data.list
				})
			},
			byPageCli(type) {
				if (type == '+') {
					if (this.byPage * 3 > this.byzqAll.length) {
						uni.showToast({
							title: '已无更多!',
							icon: 'none',
							duration: 2000
						})
						return false
					} else {
						this.byPage = this.byPage + 1
					}
					// console.log(this.byzqAll.length);
				} else {
					if (this.byPage > 1) {
						this.byPage = this.byPage - 1
					} else if (this.byPage == 1) {
						uni.showToast({
							title: '已到最小页!',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				let index_a = Number(this.byPage - 1) * 3
				let index_b = this.byPage * 3
				const arr = this.byzqAll
				this.byzqList = arr.slice(index_a, index_b)
			},
			// 包邮专区列表
			_getGoodsActivityList() {
				api.getGoodsActivityList({
					post_params: {
						currentPage: 1,
						perPage: 100
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					// console.log('包邮专区列表', list);
					this.byzqAll = list
					this.byzqList = list.slice(0, 3)
				})
			},
			// 二级分类列表
			_getIndexGoodsTypeList() {
				api.getIndexGoodsTypeList({
					post_params: {
						type: 'b'
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					// console.log('二级分类', list);
					this.twoTypeList = list.slice(0, 5)
				})
			},
			// 每日活动
			_getActivityList() {
				api.getActivityList({
					post_params: {
						currentPage: 1,
						perPage: 2
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					// console.log('每日活动', list);
					this.mrhdList = list
				})
			},
			// 轮播图改变
			swChange(e) {
				// console.log('轮播图改变', e.detail.current);
				const {
					current
				} = e.detail
				this.lbt_index = current
			},
			// 商品分类列表
			_getGoodsTypeList() {
				api.getGoodsTypeList().then((res) => {
					// console.log('分类列表', res.data.data);
					const {
						list
					} = res.data.data
					this.spflList = list
				})
			},
			// 轮播图跳转富文本
			handleFwb(item) {
				console.log('item', item);
				uni.navigateTo({
					url: '/pages/home/components/fwbContent/index?id=' + item.id
				})
			},
			// 轮播图列表
			_getBannerList() {
				api.getBannerList({
					post_params: {
						type: 'index'
					}
				}).then((res) => {
					const {
						list
					} = res.data.data
					this.info = list.map((item) => {
						return {
							id: item.id,
							url: item.image,
							jump_type: item.jump_type,
							jump_data: item.jump_data
						}
					})
				})
			},
			// 未读公告
			_getNewNotice() {
				api.getNewNotice().then((res) => {
					const {
						id,
						create_time,
						title,
						content
					} = res.data.data
					this.GGObj = {
						id: id,
						title: title,
						create_time: create_time,
						content: content
					}
					this.$nextTick(() => {
						this.$refs.popup.open('center')
					})
				})
			},
			// 获取用户信息
			_getUserInfo() {
				api.getUserInfo().then((res) => {
					console.log('用户信息', res.data.data);
					const {
						data
					} = res.data
					// 存入本地储存
					uni.setStorageSync('userInfo', JSON.stringify(data))
					// 存入vuex
					this.$store.commit('setUserInfo', data)
				})
			},
			handleItem(item) {
				this.type_index = item.id
				this.itemTypeObj = item //当前一级分类
			},
			handLBT(index) {
				this.lbt_index = index
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
	.bg_top {
		background-image: url('../../static/home/bg.png');
		background-size: 100% 100%;
		padding: 30rpx;
	}

	.checkboxItem {
		width: 96rpx;
		height: 8rpx;
		background: #4DB23F;
	}
</style>