<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'编辑资料'" />
		<view class="mt30 bg-white p40 text24">
			<view class="flex">
				<view class="w160 h160 mx-auto relative">
					<image src="@/static/my/userImg.png" class=" w160 h160 radius_bfb50" mode=""></image>
					<image src="@/static/my/creatorCenter/htx.png" class="w40 h40 absolute"
						style="left: 80%;bottom: 10%;" mode=""></image>
				</view>
			</view>
			<view class="h80"></view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">名字</view>
				<view class="flex">
					<view class="col666666">用户名称</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">手机号</view>
				<view class="flex">
					<view class="col666666">134****1234</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">简介</view>
				<view class="flex">
					<view class="col666666">有趣的简介可以吸引粉丝</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">性别</view>
				<view class="flex">
					<view class="col666666">选择性别</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">生日</view>
				<view class="flex">
					<view class="col666666">选择生日</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">地区</view>
				<view class="flex">
					<view class="col666666">四川成都</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">职业</view>
				<view class="flex">
					<view class="col666666">选择职业</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('name')" class="flex  justify-between">
				<view class="">学校</view>
				<view class="flex">
					<view class="col666666">选择学校</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
		</view>

		<view class="radius8 bg-white mt30 flex justify-between p30">
			<view class="text28">开启个性化推荐</view>
			<switch color="#91C42F" checked="true" style="transform:scale(0.7)" />
		</view>
		<view class="text24 px36 pt10 col999999" style="line-height: 32rpx;">关闭后，将不会使用你的偏好特征进行内容推荐，你可能会看到 不感兴趣的内容详细了解
		</view>

		<view class="w-full fixed bottom0">
			<view class="bg-white py20 px75">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					保存
				</view>
			</view>
		</view>

		<!-- 编辑内容 -->
		<uni-popup ref="popupEdit" background-color="#ffffff" borderRadius="20rpx 20rpx 20rpx 20rpx">
			<view class="p30">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">职业/姓名/性别</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupEdit.close()}"></uni-icons>
				</view>
				<view class="px20 text24">
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" placeholder="请输入名称" />
					</view>
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" placeholder="请输入手机号" />
					</view>
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<textarea placeholder="请输入简介" class="h160" />
					</view>
					<view class="">
						<view class="bgF9F9F9 radius10 py14 px20 mb20 flex justify-between items-center ">
							<view class="flex items-center">
								<image src="@/static/my/sex1.png" class=" w32 h32 radius_bfb50" mode=""></image>
								<view class="ml10">男生</view>
							</view>
							<uni-icons type="checkbox-filled" color="#4DB23F" size="18"></uni-icons>
						</view>
						<view class="bgF9F9F9 radius10 py14 px20 mb20 flex justify-between items-center ">
							<view class="flex items-center">
								<image src="@/static/my/sex2.png" class=" w32 h32 radius_bfb50" mode=""></image>
								<view class="ml10">女生</view>
							</view>
							<uni-icons type="checkbox-filled" color="#4DB23F" size="18"></uni-icons>
						</view>
					</view>
					<view class="">
						<picker-view v-if="visible" :value="value" @change="bindChange" class="picker-view">
							<picker-view-column>
								<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
							</picker-view-column>
							<picker-view-column>
								<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
							</picker-view-column>
						</picker-view>
					</view>
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" placeholder="请输入地区" />
					</view>
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" placeholder="请输入职业" />
					</view>
					<view class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" placeholder="请输入学校" />
					</view>
				</view>
				<view class="px50 text-center">
					<view @click="()=>{$refs.popupEdit.close()}"
						class="mt40 col-white font-bold radius10 py17 w-full bg4DB23F">确定</view>
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	const date = new Date()
	let years = []
	const year = date.getFullYear()
	let months = []
	const month = date.getMonth() + 1
	let days = []
	const day = date.getDate()
	for (let i = 1990; i <= date.getFullYear(); i++) {
		years.push(i)
	}
	for (let i = 1; i <= 12; i++) {
		months.push(i)
	}
	for (let i = 1; i <= 31; i++) {
		days.push(i)
	}
	import NavBar from '@/components/navbar/index.vue'
	export default {
		data() {
			return {
				key: 'name',

				years,
				year,
				months,
				month,
				days,
				day,
				value: [9999, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`
			}
		},
		components: {
			NavBar
		},
		methods: {
			open(key) {
				this.key = key
				this.$refs.popupEdit.open('bottom')
			},
			bindChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			}
		}
	}
</script>

<style>
	.picker-view {
		width: 100%;
		height: 280rpx;
		margin-bottom: 20rpx;
	}

	.item {
		line-height: 100rpx;
		text-align: center;
		font-weight: bold;
	}
</style>