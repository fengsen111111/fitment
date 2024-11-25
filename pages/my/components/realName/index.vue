<template>
	<view>
		<NavBar :navType="'标题'" :title="'实名认证'" />
		<view class="p30 text24">
			<view class="p30 radius10 bg-white text24 col333333">
				<view>
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
				<view class="mt40">
					<view class="font-bold">身份证号</view>
					<view class="mt20 bgF5F5F5 py20 px30 radius10">
						<input type="text" placeholder="输入身份证号" />
					</view>
				</view>
			</view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
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
			return {}
		},
		components: {
			NavBar
		},
		methods: {

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