<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'编辑资料'" />
		<view class="mt30 bg-white p40 text24">
			<view class="flex">
				<view class="w160 h160 mx-auto relative" @click="selImg()">
					<image src="@/static/my/userImg.png" class=" w160 h160 radius_bfb50" mode=""></image>
					<image src="@/static/my/creatorCenter/htx.png" class="w40 h40 absolute"
						style="left: 80%;bottom: 10%;" mode=""></image>
				</view>
			</view>
			<view class="h80"></view>
			<view @click="open('name')" class="flex mb60 justify-between">
				<view class="">名字</view>
				<view class="flex">
					<view class="col666666">{{form.name?form.name:'用户名称'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('mobile')" class="flex mb60 justify-between">
				<view class="">手机号</view>
				<view class="flex">
					<view class="col666666">{{form.mobile?form.mobile:'输入手机号'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('des')" class="flex mb60 justify-between">
				<view class="">简介</view>
				<view class="flex">
					<view class="col666666" style="width: 65vw;">{{form.des?form.des:'有趣的简介可以吸引粉丝'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('gender')" class="flex mb60 justify-between">
				<view class="">性别</view>
				<view class="flex">
					<view class="col666666">{{form.gender=='a'?'男':form.gender=='b'?'女':'选择性别'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('birthday')" class="flex mb60 justify-between">
				<view class="">生日</view>
				<view class="flex">
					<view class="col666666">{{form.birthday?form.birthday:'选择生日'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<!-- @click="open('adcode')" -->
			<view @click="handUrl('/pages/my/components/map/index')" class="flex mb60 justify-between">
				<view class="">地区</view>
				<view class="flex">
					<view class="col666666">{{form.address?form.address:'选择地区'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('job')" class="flex mb60 justify-between">
				<view class="">职业</view>
				<view class="flex">
					<view class="col666666">{{form.job?form.job:'填写职业'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
			<view @click="open('school')" class="flex  justify-between">
				<view class="">学校</view>
				<view class="flex">
					<view class="col666666">{{form.school?form.school:'填写学校'}}</view>
					<uni-icons type="right" class="ml30" color="#8D8D8D" size="16"></uni-icons>
				</view>
			</view>
		</view>
		<view class="radius8 bg-white mt30 flex justify-between p30">
			<view class="text28">开启个性化推荐</view>
			<switch color="#91C42F" :checked="form.recommend_status" @change="handGxh" style="transform:scale(0.7)" />
		</view>
		<view class="text24 px36 pt10 col999999" style="line-height: 32rpx;">关闭后，将不会使用你的偏好特征进行内容推荐，你可能会看到 不感兴趣的内容详细了解
		</view>

		<view class="w-full fixed bottom0">
			<view class="bg-white py20 px75" @click="_setUperMaterial()">
				<view class="bg4DB23F text-center py17 font-bold col-white text32 radius10">
					保存
				</view>
			</view>
		</view>

		<!-- 编辑内容 -->
		<uni-popup ref="popupEdit" background-color="#ffffff" borderRadius="20rpx 20rpx 20rpx 20rpx">
			<view class="p30">
				<view class="flex justify-between items-center mb30">
					<view class="font-bold">
						<view v-if="type=='name'">姓名</view>
						<view v-else-if="type=='gender'">性别</view>
						<!-- <view v-else-if="type=='adcode'">地区</view> -->
						<view v-else-if="type=='job'">职业</view>
						<view v-else-if="type=='school'">学校</view>
						<view v-else-if="type=='birthday'">生日</view>
						<view v-else-if="type=='des'">个性签名</view>
						<view v-else-if="type=='mobile'">手机号</view>
					</view>
					<uni-icons type="closeempty" size="20" @click="()=>{$refs.popupEdit.close()}"></uni-icons>
				</view>
				<view class="px20 text24">
					<view v-if="type=='name'">
						<view class="bgF9F9F9 radius10 py14 px20 mb20">
							<input type="text" v-model="form.name" placeholder="请输入名称" />
						</view>
					</view>
					<view v-else-if="type=='gender'" class="">
						<view @click="()=>{form.gender='a'}"
							class="bgF9F9F9 radius10 py14 px20 mb20 flex justify-between items-center ">
							<view class="flex items-center">
								<image src="@/static/my/sex1.png" class=" w32 h32 radius_bfb50" mode=""></image>
								<view class="ml10">男生</view>
							</view>
							<uni-icons v-if="form.gender=='a'" type="checkbox-filled" color="#4DB23F"
								size="18"></uni-icons>
						</view>
						<view @click="()=>{form.gender='b'}"
							class="bgF9F9F9 radius10 py14 px20 mb20 flex justify-between items-center ">
							<view class="flex items-center">
								<image src="@/static/my/sex2.png" class=" w32 h32 radius_bfb50" mode=""></image>
								<view class="ml10">女生</view>
							</view>
							<uni-icons v-if="form.gender=='b'" type="checkbox-filled" color="#4DB23F"
								size="18"></uni-icons>
						</view>
					</view>
					<!-- <view v-else-if="type=='adcode'" class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" v-model="form.adcode" placeholder="请输入地区" />
					</view> -->
					<view v-else-if="type=='job'" class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" v-model="form.job" placeholder="请输入职业" />
					</view>
					<view v-else-if="type=='school'" class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="text" v-model="form.school" placeholder="请输入学校" />
					</view>
					<view v-else-if="type=='birthday'" class="">
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
					<view v-else-if="type=='des'">
						<view class="bgF9F9F9 radius10 py14 px20 mb20">
							<textarea v-model="form.des" placeholder="请输入简介" class="h160" />
						</view>
					</view>
					<view v-else-if="type=='mobile'" class="bgF9F9F9 radius10 py14 px20 mb20">
						<input type="number" v-model="form.mobile" placeholder="请输入手机号" />
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
	import api from '@/request/allApi.js'
	import {
		onChooseAvatar
	} from '@/utils/index.js'
	export default {
		data() {
			return {
				type: 'name', //类型

				years,
				year,
				months,
				month,
				days,
				day,
				value: [9999, month - 1, day - 1],
				visible: true,
				indicatorStyle: `height: 50px;`,

				form: {
					name: '', //姓名
					gender: '', //性别
					address: '', //地区address
					adcode: '', //地区adcode
					job: '', //职业
					school: '', //学校
					birthday: '', //生日
					recommend_status: false, //个性推荐开关
					des:'',//个性签名  
					mobile: '', //手机号
				}
			}
		},
		components: {
			NavBar
		},
		onLoad() {
			this._getUperMaterial()
		},
		onShow(){
			if(uni.getStorageSync('xdwz')){
				this.form = {
					name: '张三', //姓名
					gender: 'a', //性别
					address: '', //地区address
					adcode: '', //地区adcode
					job: '老板', //职业
					school: '某某民族大学', //学校
					birthday: '2024/12/25', //生日
					recommend_status: false, //个性推荐开关
					des:'',//个性签名  
					mobile: '', //手机号
				}
				this.form.address = JSON.parse(uni.getStorageSync('xdwz')).address
				this.form.location = JSON.parse(uni.getStorageSync('xdwz')).location
				console.log('地址show',this.form);
			}
		},
		methods: {
			handUrl(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 设置资料
			_setUperMaterial() {
				uni.showLoading({
					title: "加载中"
				})
				api.setUperMaterial({
					post_params: {
						name: this.form.name, //姓名
						gender: this.form.gender, //性别
						adcode: this.form.adcode, //地区
						job: this.form.job, //职业
						school: this.form.school, //学校  
						birthday: this.form.birthday, //生日
						recommend_status: this.form.recommend_status ? 'Y' : 'N', //个性推荐开关
						des:this.form.des//个性签名  
					}
				}).then((res) => {
					uni.hideLoading()
					console.log('设置成功',res.data);
					if(res.data.code==1){
						uni.showToast({
							title: '设置成功！',
							icon: 'success',
							duration: 2000
						})
					}
				})
			},
			// 获取创作者资料
			_getUperMaterial() {
				api.getUperMaterial().then((res) => {
					const {
						data
					} = res.data
					data.recommend_status = data.recommend_status=='Y'?true:false
					this.form = data
					console.log('获取创作者资料');
				})
			},
			// 个性化切换
			handGxh(event) {
				this.form.recommend_status = event.detail.value
			},
			open(key) {
				this.type = ''
				this.type = key
				this.$refs.popupEdit.open('bottom')
			},
			bindChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
				// console.log('value',this.year,this.month,this.day);
				this.form.birthday = this.year + '/' + this.month + '/' + this.day
			},
			//*选择图片*//
			selImg() {
				let that = this
				uni.chooseImage({
					count: 1, // 最多可以选择的图片张数，默认9
					sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
					sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
					success: function(res) {
						console.log('res', res.tempFiles[0]);
						const file = res.tempFiles[0]
						// 上传图片
						api.getTicket().then((res) => {
							const {
								ticket_time
							} = res.data.data
							api.getUploadType().then((res_two) => {
								const {
									folder,
									file_type
								} = res_two.data.data.config
								const params = {
									"ticket_time": ticket_time,
									"folder": folder ? folder : 'topicImg',
									"file_type": file_type ? file_type : 'image',
								}
								onChooseAvatar(file, params, (error, res) => {
									if (error) {
										console.log('上传失败:', res);
									} else {
										console.log('上传地址:', res.data.url);
										// that.form.license_image = 'https://api.qfcss.cn'+res.data.url
									}
								});
							})
						})
					}
				})
			},
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