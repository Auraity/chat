<template>
	<view class="container">
		<!-- 头部个人信息 -->
		<view class="header">
			<image class="avatar" src="/static/logo.png"></image>
		</view>

		<!-- 个人信息列表 -->
		<view class="info-list">
			<view class="info-item">
				<text class="info-label">邮箱</text>
				<text class="info-value">123@123.com</text>
			</view>
			<view class="info-item" @click="alterUN">
				<text class="info-label">用户名</text>
				<text class="info-value">小明</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>

			<view class="info-item" @click="toAlterSign">
				<text class="info-label">个性签名</text>
				<text class="info-value">啦啦啦啦啦啦</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
			<view class="info-item" @click="toMyTrends">
				<text class="info-label"></text>
				<text class="info-value">我的朋友圈</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
			<view class="info-item" @click="alterPwd">
				<text class="info-label"></text>
				<text class="info-value">修改密码</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
			<view class="info-item" @click="exit">
				<text class="info-label"></text>
				<text class="info-value">退出登录</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	function toMyTrends() {
		uni.navigateTo({
			url: '/pages/myTrends/myTrends'
		})
	}

	function alterUN() {
		uni.navigateTo({
			url: '/pages/alterUserName/alterUserName'
		})
	}

	function toAlterSign() {
		uni.navigateTo({
			url: '/pages/alterSign/alterSign'
		})
	}

	function alterPwd() {
		uni.navigateTo({
			url: '/pages/alterPassword/alterPassword'
		})
	}

	function exit() {
		uni.reLaunch({
			url: '/pages/login/login'
		})
	}
</script>

<style>
	.container {
		background-color: #f5f5f5;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.header {
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #fff;
	}

	.avatar {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
	}

	.info-list {
		flex: 1;
		width: 100%;
		padding-top: 20rpx;
	}

	.info-item {
		display: flex;
		align-items: center;
		padding: 25rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #eee;
	}

	.info-label {
		width: 130rpx;
		font-size: 28rpx;
		color: #666;
	}

	.info-value {
		flex: 1;
		text-align: right;
		font-size: 24rpx;
		color: #333;
	}

	.arrow-icon {
		width: 20rpx;
		height: 20rpx;
		margin-left: 40rpx;
		cursor: pointer;
	}
</style>
