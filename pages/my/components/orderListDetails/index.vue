<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar v-if="item.status !== 'b'" :navType="'标题'" :title="'订单详情'" />
		<NavBar v-else :navType="'solt'" :title="'订单详情'">
			<view class="pt10" style="line-height: 20rpx;">
				<uni-icons type="redo-filled" color="#ffffff" size="20"></uni-icons>
				<view class="text-center text16 col-white">分享</view>
			</view>
		</NavBar>
		<view class="p30 text24">
			<view class="bg-white radius10 text24 p30">
				<view class="flex justify-between">
					<view class="">订单编号</view>
					<view class="">{{item.id}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">订单金额</view>
					<view class="colFF0000">￥{{item.price}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">积分抵扣金额</view>
					<view class="colFF0000">￥{{item.preferential_price}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">实付金额</view>
					<view class="colFF0000">￥{{item.pay_price}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">下单时间</view>
					<view class="">{{item.create_time}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">支付时间</view>
					<view class="">{{item.pay_time}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">收货时间</view>
					<view class="">{{item.over_time}}</view>
				</view>
				<view class="flex justify-between">
					<view class="">订单状态</view>
					<view v-if="item.status=='a'">待支付</view>
					<view v-else-if="item.status=='b'">待拼成</view>
					<view v-else-if="item.status=='c'">待发货</view>
					<view v-else-if="item.status=='d'">待收货</view>
					<view v-else-if="item.status=='e'">已完成</view>
					<view v-else-if="item.status=='f'">已评价</view>
					<view v-else-if="item.status=='g'">售后中</view>
					<view v-else-if="item.status=='x'">售后结束</view>
					<view v-else-if="item.status=='z'">拼团失败</view>
				</view>
			</view>
			
			<!-- 拼单 -->
			<view class="bg-white mt20 radius10 p30">
				<view class="flex text24">
					<view class="">拼团人数</view>
					<view class="">{{item.team_person}}人</view>
				</view>
			</view>
			
			<view class="bg-white mt20 text24 radius10 p30">
				<view class="font-bold">{{item.address_name}}  {{item.address_mobile}}</view>
				<view class="col666666">
					<view class="">{{item.address_sort}}</view>
					<view class="">{{item.address}}</view>
				</view>
			</view>
			
			<!-- 售后信息 -->
			<view v-if="item.aftersale_detail">
				<view v-for="(sh,sh_index) in item.aftersale_detail" :key="sh_index">
					<view class="bg-white mt20 radius10 p30">
						<view class="flex text24 justify-between">
							<view class="">收货状态</view>
							<view class="col666666">{{sh.get_goods=='Y'?'已收到货':'未收到货'}}</view>
						</view>
						<view class="flex mt40 text24 justify-between">
							<view class="">售后原因</view>
							<view class="col666666">{{sh.reason}}</view>
						</view>
					</view>
					<view class="bg-white mt20 radius10 p30">
						<view class="text20">售后描述</view>
						<view class="text24">
							<view style="line-height: 30rpx;">{{sh.des}}</view>
							<view class="flex mt10">
								<view class="w116 h116 radius10 mr10" v-for="(img,img_index) in sh.images" :key="img_index">
									<!-- <image src="@/static/home/sytjspslt1.png" class="w116 h116 radius10" mode=""></image> -->
									<image :src="img" class="w116 h116 radius10" mode=""></image>
								</view>
							</view>
						</view>
					</view>
					<view class="bg-white mt20 radius10 p30">
						<view class="flex ">
							<view class="text20">回寄订单</view>
							<view class="text24 col999999">{{sh.return_transport_number}}</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="bg-white radius10 mb20 mt20" >
				<view class="p25">
					<view class="flex mb20 justify-between items-center" v-for="(iss,index_iss) in item.goods_list" :key="index_iss">
						<view class="w136 h136">
							<!-- <image src="@/static/home/sytjspslt1.png" class="w136 h136 radius10" mode=""></image> -->
							<image :src="iss.cover_image" class="w136 h136 radius10" mode=""></image>
						</view>
						<view class="w-full ml20" style="line-height: 30rpx;">
							<view class="flex justify-between items-center">
								<view class="text20 w370">{{iss.name}}</view>
								<view class="colFF0000 text30">￥{{iss.price}}</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20 w370 col333333">规格:{{iss.size_name}}</view>
								<view class="text28">X ???</view>
							</view>
							<view class="flex mt10 justify-between items-center">
								<view class="text20 w370 col333333">{{item.store_name}}</view>
								<view class="text28"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 售后 -->
			<view class="bg-white flex items-center justify-between radius10 mt20 p30" >
				<view class="flex items-center">
					<view class="col666666 text20">申请金额</view>
					<view class="colFF0000 text36">￥{{item.aftersale_price}}</view>
				</view>
				<view class="font-bold text32 col666666">
					<view>售后中?已退货退款</view>
				</view>
			</view>
		</view>
		
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<!-- 待支付 -->
				<view v-if="item.status == 'a'" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					去支付
				</view>
				<!-- 待拼成 -->
				<view v-else-if="item.status == 'b'" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					取消拼团
				</view>
				<!-- 代发货 -->
				<view v-else-if="item.status == 'c'" class="grid grid-cols-2 text-center text32" style="grid-column-gap:40rpx">
					<view @click="handUrl('/pages/my/components/orderListSH/index')" class="col4DB23F border4DB23F radius10 py10 ">申请售后</view>
					<view class="colFF0000 borderFF0000 radius10 py10 ">催发货</view>
				</view>
				<!-- 待收货 -->
				<view v-else-if="item.status == 'd'" class="grid grid-cols-3 text-center text32" style="grid-column-gap:20rpx">
					<view @click="handUrl('/pages/my/components/orderListSH/index')" class="col4DB23F border4DB23F radius10 py10 ">申请售后</view>
					<view class="col4DB23F border4DB23F radius10 py10 ">查看物流</view>
					<view class="col-white bg4DB23F radius10 py10 ">确认收货</view>
				</view>
				<!-- 已完成 -->
				<view v-else-if="item.status == 'e'" class="grid grid-cols-2 text-center text32" style="grid-column-gap:40rpx">
					<view @click="handUrl('/pages/my/components/orderListSH/index')" class="col4DB23F border4DB23F radius10 py10 ">申请售后</view>
					<view class="col-white bg4DB23F radius10 py10 ">评价</view>
				</view>
				<!-- 售后 -->
				<view v-else-if="item.status == 'g'" class=" text-center text32">
					<view class="colFF0000 borderFF0000 radius10 py10 ">取消售后</view>
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
				option:{},
				
				item:{}//订单详情
			}
		},
		onLoad(option) {
			console.log('option', option);
			this.option = option
			this._getOrderDetail()
		},
		components: {
			NavBar
		},
		methods: {
			// 订单详情
			_getOrderDetail(){
				api.getOrderDetail({
					post_params:{
						user_type:'a',
						order_id:this.option.id
					}
				}).then((res)=>{
					const {data} = res.data
					this.item = data
					console.log('订单详情',data);
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
</style>