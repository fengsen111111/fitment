<template>
	<view class="bgF9F9F9 h100vh">
		<NavBar :navType="'标题'" :title="'设置'" />
		<view class=" text28 p30 ">
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相册权限</view>
				<switch color="#91C42F" @change="xcqxCli" :checked="init_results[0].granted" style="transform:scale(0.7)" />
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">位置权限</view>
				<switch color="#91C42F" @change="weqxCli" :checked="init_results[1].granted" style="transform:scale(0.7)" />
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">相机权限</view>
				<switch color="#91C42F" @change="xjqxCli" :checked="init_results[2].granted" style="transform:scale(0.7)" />
			</view>
			<view class="mb20 bg-white p30 radius10 flex justify-between">
				<view class="pt10">剪切板读取权限</view>
				<switch color="#91C42F" @change="dqqxCli" :checked="true" style="transform:scale(0.7)" />
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
				init_results:[]//当前权限
			}
		},
		components: {
			NavBar,
		},
		onLoad() {
		},
		onShow(){
			this.init_results = []
			this.init()
		},
		methods: {
			// 权限数据
			init(){
				const permissionsToCheck = [
					"android.permission.READ_EXTERNAL_STORAGE",//相册权限
				    "android.permission.ACCESS_FINE_LOCATION",//获取精确位置
					"android.permission.CAMERA",//拍照权限
				];
				const results = this.checkPermissions(permissionsToCheck);
				this.init_results = results
				console.log('手机权限',results);
			},
			xcqxCli(event) {
				console.log('相册权限:', event.detail.value);
				if(event.detail.value){
					this.requestAlbumPermissions("android.permission.READ_EXTERNAL_STORAGE")
				}else{
					this.openAppSettings()
				}
			},
			weqxCli(event) {
				console.log('位置权限:', event.detail.value);
				if(event.detail.value){
					this.requestAlbumPermissions("android.permission.ACCESS_FINE_LOCATION")
				}else{
					this.openAppSettings()
				}
			},
			xjqxCli(event) {
				console.log('相机权限:', event.detail.value);
				if(event.detail.value){
					this.requestAlbumPermissions("android.permission.CAMERA")
				}else{
					this.openAppSettings()
				}
			},
			dqqxCli(event) {
				console.log('剪切板读取权限:', event.detail.value);
				this.openAppSettings()
			},
			// 权限申请
			requestAlbumPermissions(key) {
			    return new Promise((resolve, reject) => {
			        plus.android.requestPermissions(
			            [key],
			            (res) => {
			                const { granted, deniedPresent, deniedAlways } = res;
			                if (granted.length === 2) resolve(1); // 全部授予
			                else if (deniedPresent.length || deniedAlways.length) resolve(0); // 部分或全部拒绝
			            },
			            (err) => {
			                reject(err); // 请求失败
			            }
			        );
			    });
			},
			// 打开系统设置应用权限
			openAppSettings() {
				const main = plus.android.runtimeMainActivity(); // 获取当前 Activity
				const Intent = plus.android.importClass('android.content.Intent'); // 引入 Intent 类
				const Settings = plus.android.importClass('android.provider.Settings'); // 引入 Settings 类
				const Uri = plus.android.importClass('android.net.Uri'); // 引入 Uri 类
				const intent = new Intent();
				intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS); // 设置为应用详情页
				const uri = Uri.parse('package:' + main.getPackageName()); // 获取当前包名
				intent.setData(uri);
				main.startActivity(intent); // 启动 Activity
			},
			// 检测多个权限
			checkPermissions(permissions) {
			    const context = plus.android.runtimeMainActivity();
			    const PackageManager = plus.android.importClass("android.content.pm.PackageManager");
			    const results = permissions.map((permission) => {
			        const status = context.checkSelfPermission(permission);
			        return {
			            permission,
			            granted: status === PackageManager.PERMISSION_GRANTED,
			        };
			    });
			    return results;
			}
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