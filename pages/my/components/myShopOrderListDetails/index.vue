<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'订单详情'" />
		<view class="p30 text24">
			<view class="bg-white radius10 text24 p30">
				<view class="flex justify-between">
					<view class="">订单编号</view>
					<view class="">123456789</view>
				</view>
				<view class="flex justify-between">
					<view class="">订单金额</view>
					<view class="colFF0000">￥100</view>
				</view>
				<view class="flex justify-between">
					<view class="">订单金额</view>
					<view class="colFF0000">￥100</view>
				</view>
				<view class="flex justify-between">
					<view class="">积分抵扣金额</view>
					<view class="colFF0000">￥100</view>
				</view>
				<view class="flex justify-between">
					<view class="">实付金额</view>
					<view class="colFF0000">￥100</view>
				</view>
				<view class="flex justify-between">
					<view class="">下单时间</view>
					<view class="">XXXX-XX-XX XX:XX</view>
				</view>
				<view class="flex justify-between">
					<view class="">支付时间</view>
					<view class="">XXXX-XX-XX XX:XX</view>
				</view>
				<view class="flex justify-between">
					<view class="">收货时间</view>
					<view class="">XXXX-XX-XX XX:XX</view>
				</view>
				<view class="flex justify-between">
					<view class="">订单状态</view>
					<view class="">待拼成</view>
				</view>
			</view>
			
			<!-- 拼单 -->
			<view class="bg-white mt20 radius10 p30">
				<view class="flex text24 justify-between">
					<view class="">拼团人数</view>
					<view class="">666人</view>
				</view>
			</view>
			
			<view class="bg-white mt20 text24 radius10 p30">
				<view class="font-bold">张三  12312341234</view>
				<view class="col666666">
					<view class="">四川省-成都市-武侯区</view>
					<view class="">世纪城天府大道中段588号世纪城天府大道中段588号世纪城天府</view>
				</view>
			</view>
			
			<view class="bg-white mt20 radius10 p30">
				<view class="flex text24 font-bold justify-between">
					<view class="">顺丰快递</view>
					<view class=" ">XXXXXXXXXXXXXXXXX</view>
				</view>
				<!--  -->
				<view class="flex text24 font-bold justify-between">
					<view class="">选择物流</view>
					<uni-icons type="down" color="#4DB23F" size="16"></uni-icons>
				</view>
			</view>
		
			
			<view class="bg-white radius10 mb20 mt20" >
				<view class="p25">
					<view class="flex mb20 justify-between items-center" v-for="item in [1,2]" :key="item">
						<view class="w136 h136">
							<image src="@/static/home/首页推荐商品图示例1.png" class="w136 h136 radius10" mode=""></image>
						</view>
						<view class="w-full ml20" style="line-height: 30rpx;">
							<view class="flex justify-between items-center">
								<view class="text20 w370">左维空间沙发新款胡桃木实木沙发组合客厅大小户型现代简约新中式转角沙发</view>
								<view class="colFF0000 text30">￥6666</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20 w370 col333333">规格:四人沙发</view>
								<view class="text28">X 666</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20 w370 col333333">商家名称</view>
								<view class="text28"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white mt20 radius10 p30">
				<view class="text20">售后原因</view>
				<view class="text24">
					<view style="line-height: 30rpx;">节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间和精力。这种方式让消费者无需亲自寻找不同的装修材料和供应商，而是通过一个整装公司完成所有工作，从而节省大量时间和精力。</view>
					<view class="flex mt10">
						<view class="w116 h116 radius10 mr10" v-for="item in [1,2,3]" :key="item">
							<image src="@/static/home/首页推荐商品图示例1.png" class="w116 h116 radius10" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 售后 -->
			<view class="bg-white flex items-center justify-between radius10 mt20" >
				<view class="flex items-center">
					<view class="col666666 text20">申请金额</view>
					<view class="colFF0000 text36">￥6666</view>
				</view>
				<view class="font-bold">
					<view class="text32 col666666">售后中</view>
					<view class="text32 col666666">已退货退款</view>
				</view>
			</view>
		</view>
		
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<!-- 代发货 -->
				<view class="text28 bg4DB23F col-white text-center py10 radius10">发货</view>
				<!-- 售后 -->
				<view class="flex items-center justify-between text-center">
					<view class="text24 flex items-center">
						<view class="">售后方式</view>
						<view class="ml20 col999999">退款</view>
					</view>
					<view class="flex font-bold text30 col-white items-center">
						<view class="bg91C42F radius10 py10 px36">联系客服</view>
						<view class="bg4DB23F ml30 radius10 py10 px36">同意</view>
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
			return {}
		},
		onLoad(option) {
			console.log('option', option);
		},
		components: {
			NavBar
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
</style>