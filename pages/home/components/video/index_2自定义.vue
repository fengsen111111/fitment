<template>
	<view class="recommend-page">
		<swiper class="video-swiper" vertical :current="currentVideoIndex"
			:indicator-dots="false" style="height: 100vh">
			<block v-for="(video, index) in videoList" :key="index">
				<swiper-item>
					<view class="video-container" @click="togglePlay(index)">
						<DomVideoPlayer ref="domVideoPlayer" :src="video.url" autoplay loop :controls="false" muted />
					</view>
					<view style="position: fixed;color: white; top: 50%;left:47%" @click="togglePlay(index)">
						<view v-if="video.status">
							<image src="@/static/publish/zt.png" style="width: 50rpx;height: 50rpx;" mode=""></image>
						</view>
					</view>

					<view style="z-index: 999;">
						<view style="position: fixed;color: white; top: 50%;right:2%; text-align: center;">
							<view style="margin-bottom: 30rpx;">
								<uni-icons type="hand-up-filled" color="#FFFFFF" size="30"></uni-icons>
								<view class="count-text">666</view>
							</view>
							<view style="margin-bottom: 30rpx;">
								<uni-icons type="star-filled" color="#4DB23F" size="30"></uni-icons>
								<view class="count-text">收藏</view>
							</view>
							<view style="margin-bottom: 30rpx;">
								<uni-icons type="chat-filled" color="#ffffff" size="30"></uni-icons>
								<view class="count-text">666</view>
							</view>
							<view style="margin-bottom: 30rpx;">
								<uni-icons type="redo-filled" color="#ffffff" size="30"></uni-icons>
								<view class="count-text">666</view>
							</view>
						</view>
						<view style="position: fixed;color: white; top: 80%;left:2%">
							<view class="text36 font-bold">装修的优点</view>
							<view class="text20 flex items-center mt20 bg666666 py10 px20 col-white radius10"
								style="width: 290rpx; flex-direction: row;">
								<image src="@/static/home/graphic/shopping.png" class="w40 h40" mode=""></image>
								<view class="ml20">视频同款</view>
								<view class="ml30">已售</view>
								<view class="ml10">88.8w</view>
							</view>
							<view class="mt20 flex items-center" style="flex-direction: row;">
								<image class="w48 h48 radius_bfb50"
									src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F39%2Fb7%2F53%2F39b75357f98675e2d6d5dcde1fb805a3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642661023&t=dc2e75969d5509c28c65571534c2cf53"
									mode="widthFix"></image>
								<view class="user-name ml10 text26">@用户昵称</view>
								<view class="ml20 text24 bg4DB23F col-white px40 radius10">关注</view>
								<view class="ml20 text24 col4DB23F radius10 px40"
									style="border: 1px solid #4DB23F !important;">
									已关注</view>
							</view>
							<view class="video-content mt15 text20" style="line-height: 30rpx;">
								拉了上来的撒来到拉萨到拉萨的了拉了上来的撒来到拉萨到拉萨的了拉了上来的撒来到拉萨到拉萨的了拉了上来的撒来到拉萨到拉萨的了</view>
							<view class="h60"></view>
						</view>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoList: [{
						url: "https://hs01.afbza.cn/mqrcode/798689/1734698352_3173291263_横屏.mp4",
						title: "视频1",
						comments: [],
						status: false,
					},
					{
						url: "https://hs01.afbza.cn/mqrcode/798689/1734698551_6207398521_竖屏.mp4",
						title: "视频2",
						comments: [],
						status: false,
					},
					{
						url: "https://hs01.afbza.cn/mqrcode/798689/1734698352_3173291263_横屏.mp4",
						title: "视频3",
						comments: [],
						status: false,
					}
				],
				currentVideoIndex: 0,
				showComments: false,
				currentComments: [],
				newComment: "",

			};
		},
		mounted() {
		},
		methods: {
			togglePlay(index) {
				const videoPlayer = this.$refs.domVideoPlayer
				const dqVideo = videoPlayer[index]
				// console.log('dqVideo',dqVideo,videoPlayer);
				// 获取 video 当前是否处于播放中
				if (dqVideo.playing) {
					dqVideo.pause()
					this.videoList[index].status = true
				} else {
					dqVideo.play()
					this.videoList[index].status = false
				}
			},
		}
	};
</script>

<style>
	.recommend-page {
		background-color: black;
		display: flex;
		flex-direction: column;
		height: 100vh;
		overflow: hidden;
	}

	.video-swiper {
		width: 100%;
		height: 100%;
	}

	.video-container {
		width: 100%;
		height: 100%;
		position: fixed;
	}

	.video-player {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.video-overlay {
		position: absolute;
		bottom: 20px;
		left: 10px;
		color: #fff;
		z-index: 10;
		/* 确保文字在视频上方 */
		pointer-events: none;
		/* 防止覆盖的文字区域阻止视频的点击事件 */
	}

	.comment-btn {
		margin-top: 10px;
		padding: 10px 15px;
		background-color: #007aff;
		color: white;
		border: none;
		border-radius: 5px;
		pointer-events: auto;
		/* 保证按钮可点击 */
	}

	.comment-popup {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		height: 50%;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.comment-header {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.comment-list {
		padding: 10px;
		flex: 1;
	}

	.comment-item {
		margin-bottom: 10px;
	}

	.comment-input {
		display: flex;
		padding: 10px;
		border-top: 1px solid #eee;
	}

	.input-box {
		flex: 1;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
	}

	input {
		outline: none;
	}
</style>