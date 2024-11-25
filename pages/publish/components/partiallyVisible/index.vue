<template>
	<view>
		<NavBar :navType="'标题'" :title="'部分可见'" />
		<view class="p30 text24">
			<view class="p30 bg-white radius10 flex items-center justify-between mb30" v-for="item in [1,2,3,4,5]"
				:key="item">
				<view class="flex items-center">
					<view class="w60 h60">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w60 h60 radius_bfb50" mode=""></image>
					</view>
					<view class="font-bold ml20 col333333 text28">一只小海螺</view>
				</view>
				<uni-icons type="checkbox-filled" color="#4DB23F" size="20"></uni-icons>
			</view>
		</view>
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					确定
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

		}
	}
</script>

<style>

</style>