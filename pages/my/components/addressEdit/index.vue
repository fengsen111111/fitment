<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'收货地址'" />
		<view class="p30">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">定位</view>
					<view class="mt20  items-center justify-between radius10 flex">
						<view class="col999999">四川省-成都市-武侯区-桂溪街道</view>
						<view class="w32 h32">
							<image src="@/static/my/address/dz.png" class="w32 h32" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="p30 mt20 radius10 bg-white text24 col333333">
				<view>
					<view class="font-bold">地址</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" placeholder="输入地址" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">姓名</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10 ">
						<input type="text" placeholder="输入姓名" />
					</view>
				</view>
				<view class="mt40">
					<view class="font-bold">手机号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" placeholder="输入手机号" />
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