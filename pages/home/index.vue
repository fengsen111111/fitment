<template>
	<view>
		<!-- 头部 -->
		<view class="bg_top">
			<view class="flex justify-between col-white">
				<view class="text-center" @click="handUrl('/pages/home/components/citySel/index')">
					<uni-icons type="location" size="30" color="#FFFFFF"></uni-icons>
					<view class="text20 mt-16">成都</view>
				</view>
				<view class="px30 w-4-5" @click="handUrl('/pages/home/components/search/index')">
					<view class="bg-white py14 px20 flex items-center radius50">
						<uni-icons type="search" size="20" color="#999999"></uni-icons>
						<text class="col999999 text28 ml10">输入关键词搜索</text>
					</view>
				</view>
				<view class="text-center" @click="handUrl('/pages/home/components/sign/index')">
					<uni-icons type="calendar" size="30" color="#FFFFFF"></uni-icons>
					<view class="text16  mt-16">签到</view>
				</view>
			</view>
			<view class="mt36">
				<uni-swiper-dot class="uni-swiper-dot-box"
					:dots-styles="{selectedBackgroundColor:'#91C42F',backgroundColor:'#999999'}">
					<swiper class="swiper-box radius10 h300" :current="lbt_index" @change="swChange">
						<swiper-item @click="handleFwb(item)" v-for="(item, index) in info" :key="index">
							<image src="../../static/home/首页轮播图.png" class="h300 w-full radius10" mode=""></image>
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
				<view class="">
					<image src="../../static/home/home_left.png" class="w50 h120" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/home/首页区间分类1.png" class="w180 h120" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/home/首页区间分类2.png" class="w180 h120" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/home/首页区间分类3.png" class="w180 h120" mode=""></image>
				</view>
				<view class="">
					<image src="../../static/home/home_right.png" class="w50 h120" mode=""></image>
				</view>
			</view>
			<!-- 专区内容  *5-->
			<view class="grid grid-cols-5 mt40">
				<view class="text-center mx-auto w100 text20 col-black mb10" v-for="item in zqnrList" :key="item.img">
					<view class="">
						<image :src="require('@/static/home/区间分类案例'+item.img+'.png')" class="w100 h100 radius10"
							mode=""></image>
					</view>
					<view class="mt-10">{{item.text}}</view>
				</view>
			</view>
			<!-- 查看更多 -->
			<view  @click="handUrl('/pages/home/components/shopType/index')" class="col4DB23F text20 mt20 text-center">查看更多</view>
			<!-- 分类 *4 超出滚动-->
			<view class="flex overflow-auto example mt30">
				<view v-for="item in typeList" class="mr50 text28 text-center " :key="item.id"
					@click="handleItem(item.id)">
					<view style="white-space: nowrap;" :class="type_index == item.id?'font-bold':'col999999'">
						{{item.text}}
					</view>
					<view class="checkboxItem mx-auto" v-if="type_index == item.id"></view>
				</view>
			</view>
			<!-- 分类 -->
			<view class="mt40 ">
				<view v-if="type_index == 1" class="grid grid-cols-2" style="grid-column-gap:20rpx">
					<image @click="handUrl('/pages/home/components/pointsMall/index')" src="../../static/home/jfhl.png" class="w-full h200 radius10" mode=""></image>
					<image @click="handUrl('/pages/home/components/jrms/index')" src="../../static/home/xsms.png" class="w-full h200 radius10" mode=""></image>
				</view>
				<view v-else-if="type_index == 2">
					<view  class="grid grid-cols-2" style="grid-column-gap:20rpx">
						<image @click="handUrl('/pages/home/components/sign/index')" src="../../static/home/qdyl.png" class="w-full h200 radius10" mode=""></image>
						<image @click="handUrl('/pages/home/components/noticeList/index')" src="../../static/home/xtgg.png" class="w-full h200 radius10" mode=""></image>
					</view>
					<view class="mt20">
						<Notice />
					</view>
				</view>
				<view v-else>
					分类
				</view>
			</view>
			<!-- 推荐 -->
			<view class="font-bold text28 col-black mt40">推荐</view>
			<view class="mt20 flex justify-between" style="flex-wrap: wrap;">
				<!-- 商品 -->
				<view>
					<view class="bg-white w340 mb20" v-for="(item,index) in [1,2,3,4]" :key="item">
						<image @click="handUrl('/pages/home/components/graphic/index')"
							src="../../static/home/首页推荐商品图示例1.png" class="w340 h340" mode=""></image>
						<view class="px20 pb14">
							<view class="col333333 font-bold">新中式沙发冬夏两用</view>
							<view class="colFF0000 font-bold mt10">￥6666</view>
							<view class="flex text20 mt10" style="line-height: normal">
								<view class="bg4DB23F col-white px10 radius4">自营</view>
								<view class="ml20 border4DB23F col4DB23F px10 radius4">销量 6.6w</view>
							</view>
							<view class="flex justify-between col666666 text20 mt10">
								<view class="">规格 ‌四人沙发‌</view>
								<view class="">库存 8888</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 视频 -->
				<view class="">
					<view class="bg-white w340 mb20" v-for="(item,index) in [1,2,3]" :key="item">
						<image @click="handUrl('/pages/home/components/video/index')"
							src="../../static/home/首页推荐视频封面1.png" class="w340 h575" mode=""></image>
						<view class="px20 col333333 pb14">
							<view class="font-bold">现代北欧风格多功能伸 缩茶几</view>
							<view class="flex justify-between text20 mt10">
								<view class="flex items-center">
									<image src="../../static/home/区间分类案例2.png" class="w28 h28 radius20" mode="">
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
					<view class="text28 text-center">公告</view>
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
			Tarbar,Notice
		},
		created() {
			this.$nextTick(() => {
				this.$refs.popup.open('center')
			})
			this._getUserInfo() //用户信息
			this._getNewNotice() //未读公告
			this._getBannerList() //轮播图列表
			this._getGoodsTypeList()//商品分类列表
			this._getActivityList()//每日活动
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
				// 专区内容列表
				zqnrList: [{
						img: '1',
						text: '异型沙发‌',
						url: ''
					},
					{
						img: '2',
						text: '转角沙发',
						url: ''
					},
					{
						img: '3',
						text: '直排沙发',
						url: ''
					},
					{
						img: '4',
						text: '弧形沙发',
						url: ''
					},
					{
						img: '5',
						text: '模块沙发',
						url: ''
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
					{
						id: 3,
						text: '美妆精选'
					},
					{
						id: 4,
						text: '家具精选'
					},
					{
						id: 5,
						text: '设计交集'
					},
					{
						id: 6,
						text: '美妆精选'
					},
					{
						id: 7,
						text: '家具精选'
					},
					{
						id: 8,
						text: '设计交集'
					}
				],
				// 当前分类id
				type_index: 1,
				// 公告
				GGObj: {
					id: 'id',
					title: '‌装修的优点',
					create_time: '发布时间 ',
					content: '<view>富文本详情</view><br /><view>富文本详情</view><br /><view>富文本详情</view><br /><view>富文本详情</view><br /><view>富文本详情</view><br /><view>富文本详情</view><br />'
				},
				
				spflList:[]//商品分类列表
			}
		},
		methods: {
			// 每日活动
			_getActivityList(){
				api.getActivityList({
					post_params:{
						currentPage:1,
						perPage:10
					}
				}).then((res)=>{
					const {list} = res.data.data
					console.log('每日活动',list);
				})
			},
			// 轮播图改变
			swChange(e){
				console.log('轮播图改变',e.detail.current);
				const {current} = e.detail
				this.lbt_index = current
			},
			// 商品分类列表
			_getGoodsTypeList(){
				api.getGoodsTypeList().then((res)=>{
					console.log('分类列表',res.data);
					const {list} =res.data.data
					this.spflList = list
				})
			},
			// 轮播图跳转富文本
			handleFwb(item){
				console.log('item',item);
				uni.navigateTo({
					url: '/pages/home/components/fwbContent/index?id='+item.id
				})
			},
			// 轮播图列表
			_getBannerList() {
				api.getBannerList({
					post_params:{
						type:'index'
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
				})
			},
			// 获取用户信息
			_getUserInfo() {
				api.getUserInfo().then((res) => {
					console.log('用户信息', res.data);
					const {
						data
					} = res.data
					// 存入本地储存
					uni.setStorageSync('userInfo', JSON.stringify(data))
					// 存入vuex
					this.$store.commit('setUserInfo', data)
				})
			},
			handleItem(index) {
				this.type_index = index
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