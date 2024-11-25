<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'反馈'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">反馈内容</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						 <textarea class="textarea" v-model="txt" placeholder="输入遇到的问题"></textarea>
					</view>
					<view class="mt20">
						<image src="../../../../static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
						</image>
					</view>
				</view>
			</view>
		</view>
		<view class="w-full fixed bottom0">
			<view class="bg-white  py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					保存
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
			}
		},
		components: {
			NavBar
		},
		methods: {
			
		}
	}
</script>

<style>
</style>