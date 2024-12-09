<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'反馈'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">反馈内容</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						 <textarea class="textarea" v-model="question" placeholder="输入遇到的问题"></textarea>
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
				<view @click="_submitOpinion()" class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					保存
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
				type:'',//类型
				question:'',//内容
				images:[]//图片
			}
		},
		onLoad(option){
			this.type = option.type
		},
		components: {
			NavBar
		},
		methods: {
			_submitOpinion(){
				uni.showLoading({
					title: "加载中"
				})
				api.submitOpinion({
					post_params:{
						type: this.type,
						question: this.question,
						images:[]
					}
				}).then((res)=>{
					uni.hideLoading()
					console.log('提交成功');
				})
			}
		}
	}
</script>

<style>
</style>