<template>
	<view class="container">
		<!-- 顶部个人信息 -->
		<view class="profile">
			<image class="avatar" src="../../static/logo.png"></image>
			<view class="info">
				<text class="name">{{userInfo.name}}</text><br />
				<text class="email">{{userInfo.email}}</text>
			</view>
		</view>
		<text class="bio">个性签名：{{userInfo.bio}}</text>
		<view class="headright">
			<view class="info-list" @click="toHisTrends">
				<text class="info-label">朋友圈主页</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
		</view>
		<!-- 按钮 -->
		<view class="button-group">
			<view class="info-list">
				<text class="message info-label" @click="Message">发消息</text>
			</view>
			<view class="info-list">
				<text class="delete info-label" @click="Delete">删除好友</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	let userInfo = ref({
		name: '姓名',
		logo: '../../static/logo.png',
		email: 'johndoe@example.com',
		bio: 'Hello, I am John Doe'
	})


	function Delete() {
		// 处理删除逻辑
		console.log('删除用户');
	}

	function Message() {
		// 处理发消息逻辑
		uni.navigateTo({
			url: '/pages/WebSocket/WebSocket'
		})
		console.log('发消息给用户');
	}

	function toHisTrends() {
		uni.navigateTo({
			url: '/pages/hisTrends/hisTrends'
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.container {
		.profile {
			padding: 30rpx;
			display: flex;
			align-items: center;
			margin-bottom: 30rpx;


			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				margin-right: 40rpx;
			}

			.info {
				flex: 1;

				.name {
					font-size: 34rpx;
					font-weight: bold;
					margin-bottom: 10rpx;
				}

				.email {
					font-size: 26rpx;
					color: #999;
					margin-bottom: 10rpx;
				}
			}
		}

		.bio {
			padding: 30rpx;
			font-size: 28rpx;
			color: #333;
			margin-bottom: 20rpx;
		}

		.headright {
			.info-list {
				flex: 1;
				margin-top: 50rpx;
				height: 80rpx;
				width: 100%;
				display: flex;
				align-items: center;
				line-height: 80rpx;
				justify-content: space-between;
				background-color: #fff;
				border-bottom: 1rpx solid #eee;
				border-top: 1rpx solid #eee;
			}

			.arrow-icon {
				width: 20rpx;
				height: 20rpx;
				padding-right: 30rpx;
				/* cursor: pointer; */
			}
		}

		.info-label {
			padding-left: 30rpx;
			width: 750rpx;
			font-size: 28rpx;
			color: #666;
		}

	}

	.button-group {
		margin-top: 20rpx;
		justify-content: center;

		.info-list {
			text-align: center;
			flex: 1;
			height: 80rpx;
			width: 100%;
			display: flex;
			line-height: 80rpx;
			background-color: #fff;
			border-bottom: 1rpx solid #eee;
			border-top: 1rpx solid #eee;
		}

		.message {
			color: #00557f;
		}

		.delete {
			color: red;
		}
	}
</style>
