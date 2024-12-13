
<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'设置'" />
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相册权限</view>
				<switch color="#91C42F" @change="xcqxCli"  :checked="system.xcqx" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">位置权限</view>
				<switch color="#91C42F" @change="weqxCli" :checked="system.wzqx" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相机权限</view>
				<switch color="#91C42F" @change="xjqxCli" :checked="system.xjqx" style="transform:scale(0.7)"/>
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">剪切板读取权限</view>
				<switch color="#91C42F" @change="dqqxCli" :checked="system.jqbdqqx" style="transform:scale(0.7)"/>
			</view>
			<view class="h170"></view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				system: {}//权限管理
			}
		},
		components: {
			NavBar,
		},
		onLoad(){
			console.log('权限',this.$store.state.system);
			const {system} = this.$store.state
			this.system = system
		},
		methods: {
			xcqxCli(event){
				console.log('相册权限:', event.detail.value);
				this.system.xcqx = event.detail.value
				this.$store.commit('setSystem',this.system)
			},
			weqxCli(event){
				console.log('位置权限:', event.detail.value);
				this.system.wzqx = event.detail.value
				this.$store.commit('setSystem',this.system)
			},
			xjqxCli(event){
				console.log('相机权限:', event.detail.value);
				this.system.xjqx = event.detail.value
				this.$store.commit('setSystem',this.system)
			},
			dqqxCli(event){
				console.log('剪切板读取权限:', event.detail.value);
				this.system.jqbdqqx = event.detail.value
				this.$store.commit('setSystem',this.system)
			},
		},
		
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