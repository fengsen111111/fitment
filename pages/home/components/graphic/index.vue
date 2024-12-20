<template>
	<view class="bgF9F9F9">
		<view class="h60"></view>
		<view class=" flex justify-between p30">
			<view class="flex items-center">
				<image src="@/static/home/qjflal2.png" class="w48 h48 radius_bfb50" mode="">
				</image>
				<view class="ml10">一只小海螺</view>
			</view>
			<view class="flex items-center">
				<view class="text24 border4DB23F col4DB23F px20 radius10">已关注</view>
				<image class="ml40 w40 h40" src="@/static/home/graphic/zf.png"
					@click="handUrl('/pages/home/components/interiorSend/index')" mode=""></image>
			</view>
		</view>
		<image src="@/static/home/graphic/tw.png" class="w-full h540" mode=""></image>
		<view class="p30">
			<view class="flex justify-between items-baseline">
				<view class="font-bold text36">‌装修的优点</view>
				<view class="col666666 text20">‌2024-02-06</view>
			</view>
			<view class="text20 col-black" style="line-height: 30rpx;">
				‌节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间和精力。这种方式让消费者无需亲自寻找不同的装修材料和供应商，而是通过一个整装公司完成所有工作，从而节省大量时间和精力。成本效益‌：整装公司通常通过大量采购获得批量折扣，这些节省的成本可以通过‌节省时间和精力‌：通过选择全屋整装或整装装修，消费者可以减少在装修过程中花费的时间和精力。这种方式让消费者无需亲自寻找不同的装修材料和供应商，而是通过一个整装公司完成所有工作，从而节省大量时间和精力。成本效益‌：整装公司通常通过大量采购获得批量折扣，这些节省的成本可以通
			</view>
			<view class="mt20 text20 flex">
				<image src="@/static/home/graphic/tw.png" class="w120 h120 radius12" mode=""></image>
				<view class="bg-white p10 radius12">
					<view class="col333333 w272" style="line-height: 30rpx;">新中式沙发冬夏两用四人组合精品豪华定制版沙发</view>
					<view class="flex col666666 items-center mt10">
						<view class="">规格</view>
						<view class="ml10">‌四人沙发‌</view>
						<view class="colFF0000 ml20 text32">‌￥6666‌</view>
					</view>
				</view>
			</view>
			<view class="col4DB23F text28 mt30">全部评论</view>
			<view v-for="item in [1,2,3]" :key="item">
				<!-- 评论 -->
				<view class="mt20">
					<view class="flex">
						<view class="w48">
							<image src="@/static/home/qjflal2.png" class="w48 h48 radius_bfb50" mode="">
							</image>
						</view>
						<view class="ml20 text20">
							<view class="text26 font-bold">大海龟</view>
							<view class="mt15 " style="line-height: 30rpx;">
								实名预约方式。观众需要使用实名注册的手机号码进行预约，每个账号每个参观日最多可预约5人，包括14周岁以下的未成年人不超过三人。提前预约。观众通常可提前7天进行预约，但具体时间可能因博物馆而异。
							</view>
							<view class="flex justify-between mt30">
								<view class="flex items-center">
									<view class="">2024-02-06</view>
									<view class="col4DB23F ml20">回复</view>
								</view>
								<view class="flex items-center">
									<image src="@/static/home/graphic/icon1.png" class="w30 h30" mode=""></image>
									<view class="col4DB23F ml20">9999</view>
								</view>
							</view>
						</view>
					</view>
					<view class="bg999999 h1 mt20"></view>
				</view>
				<!-- 回复 -->
				<view class="mt20 ml20">
					<view class="flex">
						<view class="w48">
							<image src="@/static/home/graphic/tw.png" class="w48 h48 radius_bfb50" mode="">
							</image>
						</view>
						<view class="ml20 text20">
							<view class="flex justify-between items-center">
								<view class="flex items-center">
									<view class="text26 font-bold">一只小海螺</view>
									<view class="ml10"> 回复 大海龟</view>
								</view>
								<view class="">2024-02-06</view>
							</view>
							<view class="mt15 " style="line-height: 30rpx;">
								实名预约方式。观众需要使用实名注册的手机号码进行预约，每个账号每个参观日最多可预约5人，包括14周岁以下的未成年人不超过三人。提前预约。观众通常可提前7天进行预约，但具体时间可能因博物馆而异。
							</view>
							<view class="flex justify-between mt30">
								<view class="flex items-center">
									<view class="">2024-02-06</view>
									<view class="col4DB23F ml20">回复</view>
								</view>
								<view class="flex items-center">
									<image src="@/static/home/graphic/icon1.png" class="w30 h30" mode=""></image>
									<view class="col4DB23F ml20">9999</view>
								</view>
							</view>
						</view>
					</view>
					<view class="bg999999 h1 mt20"></view>
				</view>
			</view>
			<view class="h100"></view>
		</view>
		<!--  -->
		<view class="fixed bottom0 w-full">
			<view class="bg-white flex justify-between p30">
				<view class="border333333 p20 radius10">
					<input type="text" placeholder="请输入内容" />
				</view>
				<view class="flex items-center">
					<image src="@/static/home/graphic/icon1.png" class="w40 h40" mode=""></image>
					<view class="col4DB23F ml10">9999</view>
				</view>
				<view class="flex items-center">
					<image src="@/static/home/graphic/icon2.png" class="w40 h40" mode=""></image>
					<view class="col4DB23F ml10">9999</view>
				</view>
				<view class="flex items-center">
					<image src="@/static/home/graphic/icon3.png" class="w40 h40" mode=""></image>
					<view class="col4DB23F ml10">9999</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
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