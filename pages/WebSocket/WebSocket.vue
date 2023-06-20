<template>
	<view class="container">
		<!-- 聊天记录 -->
		<scroll-view class="chat-content" scroll-y>
			<view v-for="(item, i) in historyMsgDa" :key="item.messageId" class="message-container">
				<!-- 我的消息 -->
				<view v-if="item.fromUserId==myId" class="message-right">
					<view class="message-content-right">
						<text class="message-text">{{ item.content }}</text><br />
						<text class="message-time">{{ item.createTime }}</text>
					</view>
					<image class="avatar" :src="item.fromUserHeadImgUrl" @click="toMyHome"></image>
				</view>
				<!-- 他人发的消息 -->
				<view v-else class="message-left">
					<image class="avatar" :src="item.fromUserHeadImgUrl" @click="toOtherHome"></image>
					<view class="message-content-left">
						<text class="message-text">{{ item.content }}</text><br />
						<text class="message-ltime">{{ item.createTime }}</text>
					</view>
				</view>
			</view>
		</scroll-view>

		<!-- 底部输入框 -->
		<view class="input-box">
			<input class="input-field" type="text" v-model="inputText" placeholder="请输入消息内容" />
			<button class="send-btn" @click="sendMessage">发送</button>
		</view>
	</view>
</template>

<script setup>
	import {
		historyMsg
	} from '../../api/sessions.js'
	import {
		ref
	} from "vue";

	let inputText = ref('');



	function toOtherHome() {
		uni.navigateTo({
			url: '/pages/otherPeapleHome/otherPeapleHome'
		})
	}

	let myId = ref(null)
	uni.getStorage({
		key: 'user',
		success: function(res) {
			myId.value = res.data.userId
		}
	})

	function toMyHome() {
		uni.switchTab({
			url: '/pages/my/my',

		})
	}

	let historyMsgDa = ref([])
	const historyMsgApi = async (sessionId) => {
		const res = await historyMsg(sessionId);
		// console.log(res, 11);
		if (res.data.code == "200" || res.data.code == 200) {
			historyMsgDa.value = res.data.data.list;
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	const props = defineProps(['sessionId'])
	historyMsgApi(props.sessionId)
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;

		.chat-content {
			flex: 1;
			padding-top: 20rpx;
			padding-bottom: 120rpx;

			.message-container {
				padding: 0 20rpx;
				align-items: center;
				margin-bottom: 10rpx;
				justify-content: space-between;

				.message-left {
					display: flex;
					align-items: center;
				}

				.message-right {
					display: flex;
					text-align: left;
					justify-content: flex-end;
				}

				.avatar {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}

				.message-content-left,
				.message-content-right {
					max-width: 70%;
					padding: 10rpx;
					border-radius: 15rpx;
				}

				.message-content-left>.message-text {
					padding: 20rpx;
					border-radius: 15rpx;
					display: block;
					background-color: white;
				}

				.message-content-right>.message-text {
					padding: 20rpx;
					border-radius: 15rpx;
					display: block;
					background-color: #95ec69;
				}

				.message-text {
					font-size: 30rpx;
					color: #333;
				}

				.message-time {
					font-size: 20rpx;
					color: #999;
					float: right;
					margin-top: 10rpx;
				}

				.message-ltime {
					// float: right;
					font-size: 20rpx;
					color: #999;
					margin-top: 10rpx;
				}


			}
		}

		.input-box {
			position: fixed;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 750rpx;
			height: 8vh;
			background-color: white;
			padding: 0 30rpx;
			padding-bottom: 35rpx;
			margin-bottom: 0px;

			.input-field {
				width: 70%;
				padding: 10rpx;
				border: 1rpx solid #ccc;
				border-radius: 4rpx;
				font-size: 24rpx;
				// margin-bottom: 	10rpx;
			}

			.send-btn {
				width: 20%;
				padding: 10rpx;
				background-color: #f3f3f3;
				color: #00cc00;
				border: none;
				border-radius: 4rpx;
				font-size: 24rpx;
				margin-left: 10rpx;
			}
		}
	}
</style>
