<template>
	<view>
		<NavBar :navType="'标题'" :title="'发布图文'" />
		<view class="px30 text24">
			<view class="bg-white mt30 radius10 p20 flex justify-between">
				<view class="font-bold">发布位置</view>
				<view class="">四川·成都</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="font-bold">标题</view>
				<view class="mt20 px20 py14 bgF5F5F5 radius10">
					<input type="text" placeholder="输入标题" />
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class=" flex justify-between">
					<view class="font-bold">话题</view>
					<view class="text20 col4DB23F" @click="handUrl('/pages/publish/components/topicSearch/index')">添加</view>
				</view>
				<view class="flex col4DB23F">
					<view class="mr30">话题名称</view>
					<view class="mr30">话题名称</view>
					<view class="mr30">话题名称</view>
					<view class="mr30">话题名称</view>
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="flex justify-between">
					<view class="font-bold">挂载商品</view>
					<view class="text20 col4DB23F" @click="handUrl('/pages/publish/components/commodityMounting/index')">添加</view>
				</view>
				<view class="flex mt30">
					<view class="w180 h180">
						<image src="@/static/home/首页推荐商品图示例1.png" class="w180 h180" mode=""></image>
					</view>
					<view class="ml20">
						<view class="flex items-center">
							<view class="border4DB23F col4DB23F px10 radius4 mr10">自营</view>
							<view class="text30 font-bold">{{'新中式沙发冬夏两用豪华'+'...'}}</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">库存:9999</view>
							<view class="ml40">销量:9999</view>
						</view>
						<view class="flex col333333 text20">
							<view class="">规格:四人沙发</view>
						</view>
						<view class="flex justify-between items-center">
							<view class="text36 colFF0000 font-bold">￥6666</view>
							<view class="text28 border4DB23F col4DB23F py10 px30 radius10">取消</view>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white mt30 radius10 p20">
				<view class="font-bold">输入内容</view>
				<view class="mt20 px20 py14 bgF5F5F5 radius10">
					<textarea type="text" placeholder="输入内容" />
				</view>
				<view class="mt20">
					<image src="@/static/home/btnBooking/upload.png" class="w116 h116 radius10" mode="">
					</image>
				</view>
			</view>
			<view class="bg-white mt40 radius10 px30 pb30">
				<view class="pt25">
					<view class="flex justify-between">
						<view class="">公开·所有人可见</view>
						<uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons>
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between">
						<view class="">朋友·互关朋友可见</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between">
						<view class="">私密·仅自己可见</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="handUrl('/pages/publish/components/partiallyVisible/index')">
						<view class="">部分可见</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<view class="bgF5F5F5 h1 mt20"></view>
				</view>
				<view class="pt25">
					<view class="flex justify-between" @click="handUrl('/pages/publish/components/noLook/index')">
						<view class="">不给谁看</view>
						<!-- <uni-icons type="checkbox-filled" size="20" color="#4DB23F"></uni-icons> -->
					</view>
					<!-- <view class="bgF5F5F5 h1 mt20"></view> -->
				</view>
			</view>
			<view class="h140"></view>
		</view>
		<view class="fixed bottom0 w-full">
			<view class=" bg-white py20 px75 ">
				<view class="bg4DB23F py20 text-center w-full radius10 col-white text32 font-bold">
					发布
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
		components:{NavBar},
		methods: {
			back() {
				console.log('返回')
				uni.navigateBack()
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

</style>