<template>
	<view>
		<NavBar :navType="'标题'" :title="'提现设置'" />
		<view class="p30 text24">
			<view class=" bg-white px30 py20 radius10 mb20 items-center">
				<view class="flex justify-between">
					<view class="mt10 text28">设置提现密码</view>
					<switch @click="handle()" color="#91C42F" :checked="szmm" style="transform:scale(0.7)"/>
				</view>
			</view>
			
			<view class="px36 mt236">
				<view class="flex items-center text30 bg636363 col-white text-center radius10 py30">
					<view class="flex mx-auto">
						<uni-icons type="checkbox-filled" size="30" color="#4DB23F"></uni-icons>
						<view class="ml30">设置成功</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 验证 -->
		<uni-popup ref="popupYZ" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="grid grid-cols-3 items-center mb30">
					<view class="font-bold text28 text-left">新增发票</view>
					<view class="text24 colFF0000 text-center">验证码错误</view>
					<view class="flex justify-between">
						<view class="w15"></view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25">
						<view class="bg-white p20 flex items-center radius10" style="width: 60%;">
							<uni-icons type="locked" size="16"></uni-icons>
							<input type="text" class="ml20" placeholder="输入验证码" />
						</view>
						<view class="bg4DB23F radius10 py20 px40 col-white font-bold ">
							发送验证码
						</view>
					</view>
					<view class="px36 mt77">
						<view  @click="()=>{$refs.popupPas.open('bottom')}" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 输入密码 -->
		<uni-popup ref="popupPas" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold text28 text-left">输入密码</view>
					<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25 w-full">
						<view class="bg-white p20 flex items-center w-full radius10">
							<uni-icons type="locked" size="16" color="#999999"></uni-icons>
							<input type="text" class="ml20 w-full" placeholder="输入密码" />
						</view>
					</view>
					<view class="px36 mt77">
						<view @click="()=>{$refs.popupPasTwo.open('bottom')}" class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 再次输入 -->
		<uni-popup ref="popupPasTwo" background-color="#F5F5F5" borderRadius="20rpx 20rpx 0rpx 0rpx">
			<view class="p40">
				<view class="grid grid-cols-3 items-center mb30">
					<view class="font-bold text28 text-left">再次输入</view>
					<view class="text24 colFF0000 text-center">密码不一致</view>
					<view class="flex justify-between">
						<view class="w15"></view>
						<uni-icons type="closeempty" size="20"  @click="close()"></uni-icons>
					</view>
				</view>
				<view class="">
					<view class="flex justify-between items-center mt25 w-full">
						<view class="bg-white p20 flex items-center w-full radius10">
							<uni-icons type="locked" size="16" color="#999999"></uni-icons>
							<input type="text" class="ml20 w-full" placeholder="输入密码" />
						</view>
					</view>
					<view class="px36 mt77">
						<view class="bg4DB23F col-white font-bold text32 py17 radius10 text-center">确定</view>
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
			return {
				szmm:false
			}
		},
		components: {
			NavBar
		},
		methods: {
			handle(){
				this.szmm = !this.szmm
				console.log('this.szmm',this.szmm);
				this.$refs.popupYZ.open('bottom')
			},
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			close(){
				this.$refs.popupYZ.close()
				this.$refs.popupPas.close()
				this.$refs.popupPasTwo.close()
			}
		}
	}
</script>

<style>
	.bgItem {
		background-color: #666666;
		width: 4rpx;
		height: 4rpx;
		margin-bottom: 4rpx;
	}
</style>