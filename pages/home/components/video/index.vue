<template>
	<view class="">
		<!-- video-height="calc(100vh - 44px)" -->
		<yVideoSlide video-height="100vh" :data="videoData" :videoIndex.sync="currentIndex"
			@refresh="refresh" @loadMore="loadMore" @share="share" @fabulous="fabulous" @follow="follow"
			@commentFabulous="commentFabulous">
		</yVideoSlide>
	</view>
</template>

<script>
	import yVideoSlide from '@/components/y-video-slide/y-video-slide.vue'
	export default {
		components: {
			yVideoSlide
		},
		data() {
			return {
				currentIndex: 0,
				videoData: [{
					id: '1',
					isFollow: 1,//是否关注
					isFabulous: 1,//是否点赞
					userNick: '姚哥哥', //名字
					videoContent: '这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试这是一条测试', //描述
					fabulousCount: 10, //点赞数量
					commentCount: 1000, //评论数量
					shareCount: 499, //转发数量
					videoUrl: 'https://hs01.afbza.cn/mqrcode/798689/1734698352_3173291263_横屏.mp4',//视频资源地址
					posterUrl: 'https://img-my.csdn.net/uploads/201407/26/1406383299_1976.jpg',
					commentObj: {
						count: 520,
						list: [{
							userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F5e%2F4e%2Ff0%2F5e4ef0e451852e0114d75eac14f60924.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642669624&t=028d851350e18512dbf4bfe3a86cbfa4',
							userNick: '小二',
							content: '这是一条测试而已',
							time: '2021-05-06 15:34:44',
							fabulousCount: 3737,
							isFabulous: 1,
							children: [{
								replyTo: '小二',
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670117&t=cd32b3baf24c5b3bba4c7516bb211bfe',
								userNick: '小三',
								content: '这是一条测试而已这是一条测试而已这是一条测试而已这是一条测试而已这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
								isFabulous: 0,
							}, {
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F1f%2F4f%2F53%2F1f4f53402015d7c738e68e7fdfa4877c.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670600&t=b0fbb15006c730305ec59bbfa55d18b9',
								replyTo: '小三',
								userNick: '小四',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
								isFabulous: 0,
							}]
						}]
					},
					userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F39%2Fb7%2F53%2F39b75357f98675e2d6d5dcde1fb805a3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642661023&t=dc2e75969d5509c28c65571534c2cf53'
				}, {
					id: '2',
					isFollow: 1,
					isFabulous: 0,
					userNick: '姚哥哥',
					videoContent: '这是一条测试',
					fabulousCount: 1,
					commentCount: 1000,
					shareCount: 499,
					videoUrl: 'https://hs01.afbza.cn/mqrcode/798689/1734698551_6207398521_竖屏.mp4',
					commentObj: {
						count: 100,
						list: [{
							userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F5e%2F4e%2Ff0%2F5e4ef0e451852e0114d75eac14f60924.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642669624&t=028d851350e18512dbf4bfe3a86cbfa4',
							userNick: '小二',
							content: '这是一条测试而已',
							time: '2021-05-06 15:34:44',
							fabulousCount: 3737,
							children: [{
								replyTo: '小二',
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670117&t=cd32b3baf24c5b3bba4c7516bb211bfe',
								userNick: '小三',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}, {
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F1f%2F4f%2F53%2F1f4f53402015d7c738e68e7fdfa4877c.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670600&t=b0fbb15006c730305ec59bbfa55d18b9',
								replyTo: '小三',
								userNick: '小四',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}]
						}]
					},
					posterUrl: 'https://img-my.csdn.net/uploads/201407/26/1406383291_6518.jpg',
					userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F39%2Fb7%2F53%2F39b75357f98675e2d6d5dcde1fb805a3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642661023&t=dc2e75969d5509c28c65571534c2cf53'
				}, {
					id: '3',
					isFollow: 1,
					isFabulous: 1,
					userNick: '姚哥哥',
					videoContent: '这是一条测试',
					fabulousCount: 1,
					commentCount: 1000,
					shareCount: 499,
					videoUrl: 'https://hs01.afbza.cn/mqrcode/798689/1734698352_3173291263_横屏.mp4',
					commentObj: {
						count: 234,
						list: [{
							userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F5e%2F4e%2Ff0%2F5e4ef0e451852e0114d75eac14f60924.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642669624&t=028d851350e18512dbf4bfe3a86cbfa4',
							userNick: '小二',
							content: '这是一条测试而已',
							time: '2021-05-06 15:34:44',
							fabulousCount: 3737,
							children: [{
								replyTo: '小二',
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670117&t=cd32b3baf24c5b3bba4c7516bb211bfe',
								userNick: '小三',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}, {
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F1f%2F4f%2F53%2F1f4f53402015d7c738e68e7fdfa4877c.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670600&t=b0fbb15006c730305ec59bbfa55d18b9',
								replyTo: '小三',
								userNick: '小四',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}]
						}]
					},
					posterUrl: 'https://img-my.csdn.net/uploads/201407/26/1406383291_8239.jpg',
					userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F39%2Fb7%2F53%2F39b75357f98675e2d6d5dcde1fb805a3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642661023&t=dc2e75969d5509c28c65571534c2cf53'
				}, {
					id: '4',
					isFollow: 1,
					isFabulous: 0,
					userNick: '姚哥哥',
					videoContent: '这是一条测试',
					fabulousCount: 1,
					commentCount: 1000,
					shareCount: 499,
					videoUrl: 'https://hs01.afbza.cn/mqrcode/798689/1734698352_3173291263_横屏.mp4',
					commentObj: {
						count: 523,
						list: [{
							userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F5e%2F4e%2Ff0%2F5e4ef0e451852e0114d75eac14f60924.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642669624&t=028d851350e18512dbf4bfe3a86cbfa4',
							userNick: '小二',
							content: '这是一条测试而已',
							time: '2021-05-06 15:34:44',
							fabulousCount: 3737,
							children: [{
								replyTo: '小二',
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670117&t=cd32b3baf24c5b3bba4c7516bb211bfe',
								userNick: '小三',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}, {
								userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F1f%2F4f%2F53%2F1f4f53402015d7c738e68e7fdfa4877c.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642670600&t=b0fbb15006c730305ec59bbfa55d18b9',
								replyTo: '小三',
								userNick: '小四',
								content: '这是一条测试而已',
								time: '2021-05-06 15:34:44',
								fabulousCount: 3737,
							}]
						}]
					},
					posterUrl: 'https://img-my.csdn.net/uploads/201407/26/1406383290_9329.jpg',
					userHead: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F39%2Fb7%2F53%2F39b75357f98675e2d6d5dcde1fb805a3.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642661023&t=dc2e75969d5509c28c65571534c2cf53'
				}]
			}
		},
		methods: {
			refresh() {
				console.log('松开刷新');
				this.videoData = this.videoData.splice(2, 2);
			},
			loadMore() {
				console.log('加载更多');
			},
			share(video) {
				uni.showToast({
					title: '分享',
					icon: 'none'
				});
				console.log(video)
			},
			fabulous(video, flag) {
				uni.showToast({
					title: '点赞',
					icon: 'none'
				});
				console.log(video, flag)
			},
			follow(video, flag) {
				console.log(video, flag)
			},
			commentFabulous(comment) {
				console.log(comment)
			}
		}
	}
</script>

<style>
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>