<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'申请售后'" />
		<view class="p30 text24">
			<!-- 售后信息 -->
			<view class="">
				<view class="bg-white mt20 radius10 p30">
					<view class="flex text24 justify-between">
						<view class="">收货状态</view>
						<view class="flex items-center" @click="()=>{$refs.popupStatus.open('bottom')}">
							<view class="col666666">选择状态</view>
							<uni-icons type="right" color="#666666" class="ml10" size="16"></uni-icons>
						</view>
					</view>
					<view class="flex mt40 text24 justify-between">
						<view class="">申请原因</view>
						<view class="flex items-center" @click="()=>{$refs.popupSQ.open('bottom')}">
							<view class="col666666">选择原因</view>
							<uni-icons type="right" color="#666666" class="ml10" size="16"></uni-icons>
						</view>
					</view>
				</view>
				<view class="bg-white mt20 radius10 p30">
					<view class="flex text20 justify-between">
						<view class="">售后原因</view>
						<view class=" colFF0000">请填写售后原因</view>
					</view>
					<view class="text24">
						<view class="bgF9F9F9 p20 mt10 radius10">
							<textarea placeholder="输入原因" />
						</view>
						<view class="flex mt10">
							<view class="w116 h116 radius10 mr10" v-for="item in [1,2,3]" :key="item">
								<image src="@/static/home/sytjspslt1.png" class="w116 h116 radius10" mode=""></image>
							</view>
						</view>
					</view>
				</view>
				<view class="bg-white mt20 radius10 p30">
					<view class="flex text20 justify-between">
						<view class="">回寄订单</view>
						<view class=" colFF0000">订单号不能为空</view>
					</view>
					<view class="text24">
						<view class="bgF9F9F9 p20 mt10 radius10">
							<input placeholder="输入快递公司输入订单号" />
						</view>
					</view>
				</view>
			</view>
			
			<view class="bg-white radius10 mb20 mt20" >
				<view class="p25">
					<view class="font-bold">商品详情</view>
					<view class="flex mt20 justify-between items-center" v-for="item in [1,2]" :key="item">
						<view class="flex items-center">
							<view class="">
								<uni-icons type="circle" size="20"></uni-icons>
								<br />
								<uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
							</view>
							<view class="w136 h136 ml10">
								<image src="@/static/home/sytjspslt1.png" class="w136 h136 radius10" mode=""></image>
							</view>
						</view>
						<view class="w-full ml20" style="line-height: 30rpx;">
							<view class="flex justify-between items-center">
								<view class="text20 ">左维空间沙发新款胡桃木实木沙发组合客厅大小户型现代简约新中式转角沙发</view>
								<view class="colFF0000 text30">￥6666</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20  col333333">规格:四人沙发</view>
								<view class="text28">X 666</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20  col333333">商家名称</view>
								<view class="text28"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="w-full fixed bottom0">
			<view class="bg-white flex justify-between items-center p20">
				<view class="flex text20 items-center">
					<view class="flex">
						<uni-icons type="circle" size="16"></uni-icons>
						<uni-icons type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
					</view>
					<view class="ml10">全选</view>
					<view class="ml30">申请金额</view>
					<view class="ml10 text32 colFF0000 font-bold">￥6666</view>
				</view>
				
				<view class="col-white bg4DB23F radius10 py10 px44">确认申请</view>
			</view>
		</view>
		
		<!-- 收货状态 -->
		<uni-popup ref="popupStatus" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="">收货状态</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupStatus.close()}"></uni-icons>
				</view>
				<view class="px20 mt30">
					<view class="my20 flex justify-between">
						<view class="">已收到货</view>
						<uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="my20 flex justify-between">
						<view class="">未收到货</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 申请原因 -->
		<uni-popup ref="popupSQ" background-color="#fff" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center">
					<view class="">申请原因</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupSQ.close()}"></uni-icons>
				</view>
				<view class="px20 mt30">
					<view class="my20 flex justify-between">
						<view class="">不想要了</view>
						<uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="my20 flex justify-between">
						<view class="">看到更便宜的商品</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="my20 flex justify-between">
						<view class="">商品款式选错了</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="my20 flex justify-between">
						<view class="">收货地址/手机号填错了</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="my20 flex justify-between">
						<view class="">有优惠未使用</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="my20 flex justify-between">
						<view class="">缺货</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="my20 flex justify-between">
						<view class="">其他原因</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
				</view>
			</view>
		</uni-popup>
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