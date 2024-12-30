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
						<view class="ml20 colFF0000 font-bold">{{userInfo.integral?userInfo.integral:0}}</view>
					</view>
					<!-- <view class="col-white text20 px30 font-bold bg91C42F radius10">提现</view> -->
				</view>
			</view>
			
			<view class="mb20 bg-white p30 radius10">
				<view class="flex text24 justify-between items-center">
					<view class="flex items-center">
						<view class="">推荐官保证金</view>
						<view class="ml20 colFF0000 font-bold">{{userInfo.sharer_ensure_money}}</view>
					</view>
					<view class="flex">
						<view class="col-white text20 px30 font-bold bg91C42F radius10">退回</view>
						<view @click="handTxbzj()" class="col-white text20 px30 font-bold bg4DB23F radius10 ml30">提现</view>
					</view>
				</view>
			</view>
			
			<view class="mb20 bg-white p30 radius10">
				<view class="flex text24 justify-between items-center">
					<view class="flex items-center">
						<view class="">收益总余额</view>
						<view class="colFF0000 font-bold ml40">{{userInfo.money}}</view>
					</view>
					<view class="flex">
						<view class="col-white text20 px30 font-bold bg91C42F radius10">退回</view>
						<view @click="handTxye()" class="col-white text20 px30 font-bold bg4DB23F radius10 ml30">提现</view>
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
			
			<!-- 提现金额 -->
			<uni-popup ref="popupMon" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
				<view class="p40">
					<view class="flex justify-between items-center mb30">
						<view class="font-bold text28 text-left">提现</view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
					<view class="">
						<view class="flex justify-between items-center mt25 w-full">
							<view class="bg-white p20 flex items-center w-full radius10">
								<uni-icons type="locked" size="16" color="#999999"></uni-icons>
								<input type="number" v-model="moneyVal" class="ml20 w-full" placeholder="输入提现金额" />
							</view>
						</view>
						<view class="px36 mt77">
							<view @click="_txjeOk" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
						</view>
					</view>
				</view>
			</uni-popup>
			<!-- 输入密码 -->
			<uni-popup ref="popupPas" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
				<view class="p40">
					<view class="flex justify-between items-center mb30">
						<view class="font-bold text28 text-left">提现密码</view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
					<view class="">
						<view class="flex justify-between items-center mt25 w-full">
							<view class="bg-white p20 flex items-center w-full radius10">
								<uni-icons type="locked" size="16" color="#999999"></uni-icons>
								<input type="number" v-model="passwordVal" class="ml20 w-full" placeholder="输入提现密码" />
							</view>
						</view>
						<view class="px36 mt77">
							<view @click="_mmtxOk" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	import api from '@/request/allApi.js'
	export default {
		data() {
			return {
				userInfo:{},//用户信息
				
				moneyVal: '',//余额
				passwordVal: '',//密码
				
				type:1//1余额 2 保证金
				
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
			// 提现密码确定
			_mmtxOk(){
				if(this.type==1){
					// 余额提现
					api.submitSharerWithdrawal({
						post_params:{
							password: this.passwordVal,
							type:'b',
							money: this.moneyVal,
							card_number:'',
							bank_name:'',
							user_name:'',
							payment_image:'',
						}
					}).then((res)=>{
						console.log('余额提现');
					})
				}else{
					// 保证金提现
					api.submitSharerWithdrawal({
						post_params:{
							password: this.passwordVal,
							type:'a',
							money: this.userInfo.sharer_ensure_money,
							card_number:'',
							bank_name:'',
							user_name:'',
							payment_image:'',
						}
					}).then((res)=>{
						console.log('余额提现');
					})
				}
			},
			// 提现金额确定
			_txjeOk(){
			    if(this.moneyVal<=this.userInfo.money){
					this.$refs.popupPas.open('bottom')
				}else{
					uni.showToast({
						title: '余额不足！',
						icon: 'none',
						duration: 2000
					})
				}
			},
			// 提现余额
			handTxye(){
				this.type = 1
				this.$refs.popupMon.open('bottom')
			},
			// 提现保证金
			handTxbzj(){
				this.type = 2
				this.$refs.popupPas.open('bottom')
			},
			// 关闭
			close(){
				this.$refs.popupMon.close()
				this.$refs.popupPas.close()
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