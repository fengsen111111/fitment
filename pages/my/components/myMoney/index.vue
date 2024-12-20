<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'solt'" :title="'我的钱包'">
			<view class="pt10">
				<uni-icons type="help" color="#ffffff" class="" size="25"></uni-icons>
			</view>
		</NavBar>
		
		<view class=" text28 p30 ">
			
			<view class="mb20 bg-white p30 radius10">
				<view class="flex text30 justify-between items-center">
					<view class="flex items-center">
						<view class="">积分总余额</view>
						<view class="ml20 colFF0000 font-bold">{{userInfo.integral}}</view>
					</view>
					<view class="col-white text20 px30 font-bold bg91C42F radius10">提现</view>
				</view>
			<!-- 	<view class="flex mt20 text24 justify-between">
					<view class="">收益总余额</view>
					<view class="">666666</view>
				</view> -->
			</view>
			
			<view class="mb20 bg-white p30 radius10">
				<view class="flex text24 justify-between items-center">
					<view class="flex items-center">
						<view class="">推荐官保证金</view>
						<view class="ml20 colFF0000 font-bold">{{userInfo.sharer_ensure_money}}</view>
					</view>
					<view class="flex">
						<view class="col-white text20 px30 font-bold bg91C42F radius10">退回</view>
						<view class="col-white text20 px30 font-bold bg4DB23F radius10 ml30">提现</view>
					</view>
				</view>
			</view>
			
			<view class="mb20 bg-white p30 radius10">
				<view class="flex text24 justify-between items-center">
					<view class="flex items-center">
						<view class="">收益总余额</view>
						<view class="colFF0000 font-bold ml40">？？？</view>
					</view>
					<view class="flex">
						<view class="col-white text20 px30 font-bold bg91C42F radius10">退回</view>
						<view class="col-white text20 px30 font-bold bg4DB23F radius10 ml30">提现</view>
					</view>
				</view>
			</view>
			
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">积分记录</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/pointsRecords/index?title=积分记录')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">收益记录</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/pointsRecords/index?title=收益记录')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">我的团队</view>
				<uni-icons type="right" @click="handUrl('/pages/my/components/myTeam/index')" color="#666666" size="20"></uni-icons>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="">保证金规则</view>
				<uni-icons type="right"  @click="handUrl('/pages/login/components/fwbText?type=ensure_rule')" color="#666666" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				userInfo:{}//用户信息
			}
		},
		created(){
			if(this.$store.state.userInfo){
				this.userInfo = this.$store.state.userInfo
			}
		},
		components: {
			NavBar,
		},
		methods: {
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