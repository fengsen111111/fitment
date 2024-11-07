<template>
	<view>
		<!-- 头部 -->
		<view class="bg_top">
			<view class="flex justify-between col-white">
				<view class="text-center">
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
					<swiper class="swiper-box radius10 h300" :current="lbt_index">
						<swiper-item v-for="(item, index) in info" :key="index">
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
					<view class="mt-10">{{item.text}}</view>
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
			<view class="col4DB23F text20 mt20 text-center">查看更多</view>
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
			<!-- 活动图 -->
			<view class="mt40 grid grid-cols-2" style="grid-column-gap:20rpx">
				<image src="../../static/home/热门推荐活动图片1.png" class="w-full h200 radius10" mode=""></image>
				<image src="../../static/home/热门推荐活动图片2.png" class="w-full h200 radius10" mode=""></image>
			</view>
			<!-- 推荐 -->
			<view class="font-bold text28 col-black mt40">推荐</view>
			<view class="mt20 flex justify-between" style="flex-wrap: wrap;">
				<!-- 商品 -->
				<view>
					<view class="bg-white w340 mb20" v-for="(item,index) in [1,2,3,4]" :key="item">
						<image src="../../static/home/首页推荐商品图示例1.png" class="w340 h340" mode=""></image>
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
						<image @click="handUrl('/pages/home/components/video/index')" src="../../static/home/首页推荐视频封面1.png" class="w340 h604" mode=""></image>
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
		<Tarbar :checkIndex="1" />
	</view>
</template>

<script>
	import Tarbar from '@/components/tarbar/index.vue'
	export default {
		components: {
			Tarbar
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
						url: ''
					},
					{
						img: 'icon_3',
						text: '验房服务',
						url: '/pages/home/components/homeInspection/index'
					},
					{
						img: 'icon_4',
						text: '监理服务',
						url: ''
					},
					{
						img: 'icon_5',
						text: '加入平台',
						url: ''
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
				type_index: 1
			}
		},
		methods: {
			handleItem(index) {
				this.type_index = index
			},
			handLBT(index) {
				this.lbt_index = index
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

	.example::-webkit-scrollbar {
		display: none;
	}
</style>