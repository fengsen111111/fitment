<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'提交预约'" />
		<view class="p30 text28 ">
			<view>
				<view class="font-bold">姓名</view>
				<view class="mt20 bg-white py20 px30 radius10 ">
					<input type="text" placeholder="输入姓名" />
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">联系电话</view>
				<view class="mt20 bg-white py20 px30 radius10">
					<input type="text" placeholder="输入联系电话" />
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">小区名称</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" placeholder="输入小区名称" />
					<image src="../../../../static/home/btnBooking/dw.png" class="w22 h28" mode=""></image>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">预约时间</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" placeholder="输入预约时间" />
					<image src="../../../../static/home/btnBooking/rl.png" @click="openPicker" class="w32 h30" mode="">
					</image>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">装修模式</view>
				<view class="mt20 bg-white py20 px30 radius10 flex items-center justify-between">
					<input type="text" placeholder="输入装修模式" />
					<image src="../../../../static/home/btnBooking/dsj.png" @click="openMode" class="w30 h20" mode=""></image>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">装修风格</view>
				<view class="mt20 relative" @click="openStyle">
					<image src="../../../../static/home/btnBooking/bk.png" class="w200 h200" mode=""></image>
					<view class="col999999 absolute  top_bfb38 left_bfb6">点击选择</view>
				</view>
			</view>
			<view class="mt40">
				<view class="font-bold">我喜欢的</view>
				<view class="mt20">
					<image src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
					</image>
				</view>
			</view>
			<view class="flex mt65 text24 px30">
				<uni-icons type="circle" size="16"></uni-icons>
				<uni-icons type="checkbox-filled" size="16" color="#4DB23F"></uni-icons>
				<view class="ml10">已查看并同意</view>
				<view class="col4DB23F">《装修服务协议》</view>
				<view class="col4DB23F">《装修服务隐私协议》</view>
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
							<uni-icons type="closeempty" size="20" @click="closeMode"></uni-icons>
						</view>
						<view class="flex bg-white radius10 justify-between items-center mt30 p30" v-for="item in [1,2,3]" :key="item">
							<view class="text30">模式一</view>
							<uni-icons type="checkbox-filled" color="#4DB23F" size="20" ></uni-icons>
						</view>
					</view>
				</uni-popup>
				<!-- 装修模式框 -->
				<uni-popup ref="popupStyle" type="bottom" border-radius="10px 10px 0 0">
					<view class="bgF9F9F9 p30" style="border-radius: 10px 10px 0 0;">
						<view class="flex justify-between items-center">
							<view class="text28 font-bold">装修风格</view>
							<uni-icons type="closeempty" size="20" @click="closeStyle"></uni-icons>
						</view>
						<view class="radius10 grid grid-cols-3">
							<view class="w200  mt30 " v-for="item in [1,2,3,4,5,6]" :key="item">
								<image src="@/static/home/btnBooking/zxfg.png" class="w200 h200 radius10" mode=""></image>
								<view class="text36 font-bold mt10 text-center">中式风格</view>
							</view>
						</view>
					</view>
				</uni-popup>
				<!-- 提交预约 -->
				<uni-popup ref="popupBtn" type="bottom" border-radius="10px 10px 0 0">
					<view class="bgF9F9F9 p30 radius20" style="width: 80vw;border-radius: 10px 10px 0 0;">
						<view class="grid grid-cols-3 items-center">
							<view class="w15"></view>
							<view class="text30 text-center font-bold">提交成功</view>
							<uni-icons type="closeempty" style="text-align: right" size="20" @click="closeBtn"></uni-icons>
						</view>
						<view class="mt120 text-center">
							<uni-icons type="checkbox-filled" size="100" color="#4DB23F"></uni-icons>
						</view>
						<view class="mt30 text30 px30">
							您的预约我们已收到，24小时内专业顾问 将与您取得联系请注就听来电!
						</view>
						<view class="mt100 text-center">
							X秒后转到首页
						</view>
						<view class="bg4DB23F radius10 font-bold col-white text-center py17 mt20">
							立即跳转
						</view>
					</view>
				</uni-popup>
			</view>
			<view class="h116"></view>


		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view @click="openBtn" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					提交
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				birthday: "", //时间选择
			}
		},
		components: {
			NavBar
		},
		methods: {
			openBtn() {
				this.$refs.popupBtn.open('center')
			},
			closeBtn(){
				this.$refs.popupBtn.close()
			},
			openStyle() {
				this.$refs.popupStyle.open('bottom')
			},
			closeStyle(){
				this.$refs.popupStyle.close()
			},
			openMode() {
				this.$refs.popupMode.open('bottom')
			},
			closeMode(){
				this.$refs.popupMode.close()
			},
			// 打开picker
			openPicker() {
				this.$refs.myPicker.show();
			},
			handleSubmit(e) {
				// {year: "2023", month: "07", day: "11", hour: "15", minute: "21", seconds: '55'}
				this.birthday = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}:${seconds}`;
			},
		}
	}
</script>

<style>
</style>