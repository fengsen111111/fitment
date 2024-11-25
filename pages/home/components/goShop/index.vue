<template>
	<view class=" h100vh ">
		<view class="w-full bg-white">
			<view class="flex  pt38 w-full items-center pb14 justify-between">
				<view class="flex">
					<view class="w15"></view>
					<uni-icons type="left" size="30" @click="()=>{uni.navigateBack()}" color="#000000"></uni-icons>
				</view>
				<view class="w15"></view>
				<view class="flex text-center">
					<view class="">
						<view class="w40 h40">
							<image src="@/static/home/shopDetails/kf.png" class="w40 h40" mode=""></image>
						</view>
						<view class="text16">客服</view>
					</view>
					<view class="w30"></view>
				</view>
			</view>
			<!--  -->
			<view class="px40">
				<view class=" flex justify-between w-full items-center">
					<view class="flex items-center">
						<view class="w80 h80">
							<image src="@/static/home/shopDetails/shopImg.png" class="w80 h80" mode=""></image>
						</view>
						<view class="ml20" @click="()=>{$refs.popupShop.open('bottom')}" >
							<view class="flex" style="line-height: 30rpx;">
								<view class="font-bold text24">商家名称</view>
								<view class="font-bold text20 px10 ml20 col4DB23F border4DB23F radius4">自营</view>
							</view>
							<view class="flex">
								<uni-icons type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
								<uni-icons type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
								<uni-icons type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
								<uni-icons type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
								<uni-icons type="star-filled" color="#FF0000" class="mr10" size="16"></uni-icons>
								<view class="col666666 text24 mr10 ml10">评分</view>
								<view class="colFF0000 font-bold">5.0</view>
							</view>
						</view>
					</view>
					<view class="">
						<view class=" bg4DB23F col-white text24 radius10 px36 ">关注</view>
						<view class="text24 col666666">关注量:6666</view>
					</view>
				</view>
				<view class="bgF5F5F5 text24 mt20 px20 py10 radius10 flex justify-between items-center">
					<view class="flex items-center">
						<view class="w28 h30">
							<image src="@/static/home/shopDetails/fw.png" class="w28 h30" mode=""></image>
						</view>
						<view class=" col333333 ml10">店铺服务</view>
					</view>
					<view class="col666666">退货包运费·全场包邮·7天无理由退货</view>
				</view>
				<view class="h10"></view>
			</view>

		</view>
		<!--  -->
		<view class="bg-white mt10 items-center py20 px40 flex justify-between">
			<view class="text20">
				<view class="col-black font-bold">商家地址</view>
				<view class="col666666 mt-10">成都市高新区世纪城天府大道中段588号</view>
			</view>
			<view class="text-center">
				<view class="w28 h32 mx-auto">
					<image src="@/static/home/shopDetails/dt.png" class="w28 h32 mt5" mode=""></image>
				</view>
				<view class="col4DB23F text16">888km</view>
			</view>
		</view>
		<view class="mt20 bg-white p20">
			<view class="flex justify-evenly col666666">
				<view class="font-bold text28 col-black border_bot_4DB23F">全部商品</view>
				<view class="text28">分类</view>
				<view class="text28">评价</view>
				<view class="text28">视频</view>
			</view>
			<view class="flex justify-between items-center mt30">
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}" >
					<view class="">综合</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="flex items-center" @click="()=>{$refs.popup.open('bottom')}" >
					<view class="">品牌</view>
					<image class="w15 h10 ml10" src="@/static/home/pointsMall/bottom.png" mode=""></image>
				</view>
				<view class="">自营</view>
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
				<view class="bg4DB23F col-white radius10 px20 py5">筛选</view>
			</view>
		</view>
		<!--  -->
		<view class="mt15 px30 grid grid-cols-2"  style="grid-column-gap:30rpx">
			<view class="bg-white w340 mb20" v-for="(item,index) in [1,2,3,4]" :key="item">
				<image @click="handUrl('/pages/home/components/graphic/index')" src="@/static/home/首页推荐商品图示例1.png" class="w340 h340" mode=""></image>
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
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popup.close()}"></uni-icons>
				</view>
				<view class="px20">
					<view class="my20 col4DB23F">综合</view>
					<view class="my20">销量优先</view>
				</view>
			</view>
		</uni-popup>
		<!-- 店铺信息 -->
		<uni-popup ref="popupShop" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="w15"></view>
					<view class="">
						<view class="flex">
							<view class="flex mx-auto h60 items-center">
								<image src="@/static/home/shopDetails/shopImg.png" class="w60 h60" mode=""></image>
								<view class="text24 col333333 ml20">商家名称</view>
							</view>
						</view>
						<view class="flex items-center">
							<view class="text20 col666666">综合体验:</view>
							<uni-icons type="star-filled" color="#FF0000" class="ml10" size="16"></uni-icons>
							<uni-icons type="star-filled" color="#FF0000" class="ml10" size="16"></uni-icons>
							<uni-icons type="star-filled" color="#FF0000" class="ml10" size="16"></uni-icons>
							<uni-icons type="star-filled" color="#FF0000" class="ml10" size="16"></uni-icons>
							<uni-icons type="star-filled" color="#FF0000" class="ml10" size="16"></uni-icons>
						</view>
					</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupShop.close()}"></uni-icons>
				</view>
				<view class="px20 text24 col666666">
					<view class=" col-black text28 font-bold">服务保障</view>
					<view class="mt20">退货包运费</view>
					<view class="text20" style="line-height: 25rpx;">消费者购买的商品，订单发货后90天内申请退货退款或换货，将按照物 流首重费用补贴退货运费</view>
					<view class="mt20">坏了包赔</view>
					<view class="text20" style="line-height: 25rpx;">若发现支持该服务的商品有变质、腐烂、破损等情况，可在24小时内申请退款，商家将在24小时内处理退款申请</view>
					<view class="mt20">全场包邮</view>
					<view class="text20" style="line-height: 25rpx;">所有商品包邮(偏远地区除外)</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				// 分类列表

			}
		},
		components: {
			NavBar,
		},
		methods: {
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