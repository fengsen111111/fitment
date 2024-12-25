<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'提交预约'" />
		<view class="p30 text28 ">
			<view>
				<view class="font-bold">姓名</view>
				<view class="mt20 bg-white py20 px30 radius10 ">
					<input type="text" v-model="post_params.name" placeholder="输入姓名" />
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">联系电话</view>
				<view class="mt20 bg-white py20 px30 radius10">
					<input type="number" v-model="post_params.mobile" placeholder="输入联系电话" />
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">小区名称</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" style="width:90%" v-model="post_params.community" placeholder="输入小区名称" />
					<image src="../../../../static/home/btnBooking/dw.png" class="w22 h28" mode=""></image>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">预约时间</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" disabled style="width:90%" v-model="post_params.time" placeholder="输入预约时间" />
					<image src="../../../../static/home/btnBooking/rl.png" @click="()=>{$refs.myPicker.show();}"
						class="w32 h30" mode="">
					</image>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">装修模式</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" disabled v-model="post_params.decoration_model.name" placeholder="输入装修模式" />
					<image src="../../../../static/home/btnBooking/dsj.png"
						@click="()=>{$refs.popupMode.open('bottom')}" class="w30 h20" mode=""></image>
				</view>
			</view>
			<view>
				<!-- 时间框 -->
				<buuug7-simple-datetime-picker ref="myPicker" @submit="handleSubmit" :start-year="2000" :end-year="2099"
					:time-init="1688860800000" :time-hide="[true, true, true, true, true, false]"
					:time-label="['年', '月', '日', '时', '分', '秒']" />
				<!-- 装修模式框 -->
				<uni-popup ref="popupMode" type="bottom" border-radius="10px 10px 0 0">
					<view class="bgF9F9F9 p30" style="border-radius: 10px 10px 0 0;">
						<view class="flex justify-between items-center">
							<view class="text28 font-bold">装修模式</view>
							<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupMode.close()}"></uni-icons>
						</view>
						<view @click="handleZxms(item)"
							class="flex bg-white radius10 justify-between items-center mt30 p30"
							v-for="item in zxmsList" :key="item.id">
							<view class="text30">{{item.name}}</view>
							<uni-icons v-if="post_params.decoration_model.id == item.id" type="checkbox-filled"
								color="#4DB23F" size="20"></uni-icons>
						</view>
					</view>
				</uni-popup>
				<!-- 提交预约 -->
				<uni-popup ref="popupBtn" type="bottom" border-radius="10px 10px 0 0">
					<view class="bgF9F9F9 p30 radius20" style="width: 80vw;border-radius: 10px 10px 0 0;">
						<view class="grid grid-cols-3 items-center">
							<view class="w15"></view>
							<view class="text30 text-center font-bold">提交成功</view>
							<uni-icons type="closeempty" style="text-align: right" size="20"
								@click="()=>{$refs.popupBtn.close()}"></uni-icons>
						</view>
						<view class="mt120 text-center">
							<uni-icons type="checkbox-filled" size="100" color="#4DB23F"></uni-icons>
						</view>
						<view class="mt30 text30 px30">
							您的预约我们已收到，24小时内专业顾问 将与您取得联系请注就听来电!
						</view>
						<view class="mt100 text-center">
							{{time}}秒后转到首页
						</view>
						<view @click="handUrl('/pages/home/index')" class="bg4DB23F radius10 font-bold col-white text-center py17 mt20">
							立即跳转
						</view>
					</view>
				</uni-popup>
			</view>
			<view class="h116"></view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="flex mb20">
				<view class="flex mx-auto text24 px30">
					<uni-icons v-if="check" @click="()=>{check = false}" type="circle" size="16"></uni-icons>
					<uni-icons v-else @click="()=>{check = true}" type="checkbox-filled" size="16"
						color="#4DB23F"></uni-icons>
					<view class="ml10">已查看并同意</view>
					<view class="col4DB23F">《装修服务协议》</view>
					<!-- @click="handUrl('/pages/login/components/fwbText?type=user_rich')" -->
					<view class="col4DB23F">《装修服务隐私协议》</view>
				</view>
			</view>
			<view class="bg-white  py20 px75">
				<view @click="_submitService()"
					class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					提交
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
				check: true,
				birthday: "", //时间选择
				
				// 参数
				post_params: {
					"type": "a", //a装修服务介绍 b设计服务介绍  c验房服务介绍  d监理服务介绍  
					"name": "",
					"mobile": "",
					"community": "",
					"community_location": "",
					"time": "",
					"decoration_plan_money": "",
					"decoration_model": {},
					"check_home_model": "",
					zxfg: {
						id: 1,
						name: '装修风格1',
						image: 'zxfg'
					}
				},
				zxmsList: [{
						id: 1,
						name: '模式1'
					},
					{
						id: 2,
						name: '模式2'
					},
					{
						id: 3,
						name: '模式3'
					}
				],
				time: 5,//倒计时
				timer: '', //计时器

			}
		},
		components: {
			NavBar
		},
		watch: {
			time(newVal, oldVal) {
				if (newVal == 0) {
					clearInterval(this.timer); //清除定时器
				    uni.navigateTo({
				    	url:'/pages/home/index'
				    })
				}
			}
		},
		methods: {
			// 跳转首页
			handUrl(url){
				uni.navigateTo({
					url:url
				})
			},
			// 选择装修风格
			handleZxfg(item) {
				this.post_params.zxfg = item
				this.$refs.popupStyle.close()
			},
			// 选择装修模式
			handleZxms(item) {
				this.post_params.decoration_model = item
				this.$refs.popupMode.close()
			},
			// 装修风格
			_getDecorationStylesList() {
				api.getDecorationStylesList().then((res) => {
					const {
						list
					} = res.data.data
					this.zxfgList = list
				})
			},
			// 选择时间
			handleSubmit(e) {
				// {year: "2023", month: "07", day: "11", hour: "15", minute: "21", seconds: '55'}
				this.post_params.time = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`;
			},
			// 提交预约
			_submitService(){
				if (!this.post_params.mobile) {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 2000
					})
					return false
				} else {
					// 手机号格式验证（中国大陆手机号）
					const regex = /^1[3-9]\d{9}$/;
					if (this.post_params.mobile && !regex.test(this.post_params.mobile)) {
						uni.showToast({
							title: '手机号格式错误',
							icon: 'none',
							duration: 2000
						})
						return false
					}
				}
				if (this.check) {
					uni.showToast({
						title: '请勾选协议',
						icon: 'none',
						duration: 2000
					})
					return false
				}
				api.submitService({
					post_params:{
						type:'a', //a装修服务介绍 b设计服务介绍  c验房服务介绍  d监理服务介绍
						name: this.post_params.name, //姓名  
						mobile:this.post_params.mobile,//手机号  
						community:this.post_params.community,//小区名称  
						community_location:this.post_params.community_location,//小区定位  
						time:this.post_params.time,//预约时间  
						decoration_plan_money:this.post_params.decoration_plan_money,//装修预算：a,b  
						decoration_model:this.post_params.decoration_model,//装修模式：a,b  
						check_home_model:this.post_params.check_home_model//验房模式：c  
					}
				}).then((res)=>{
					console.log('提交结束',res.data);
					this.$refs.popupBtn.open('center')
					this.timer = setInterval(() => {
						this.time = this.time - 1
					}, 1000);
				}).catch((res)=>{
					console.log('提交失败',res);
					this.$refs.popupBtn.open('center')
					this.timer = setInterval(() => {
						this.time = this.time - 1
					}, 1000);
				})
				
			}
		}
	}
</script>

<style>
</style>