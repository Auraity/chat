<template>
	<view class="container">
		<!-- 头部个人信息 -->
		<view class="header">
			<image class="avatar" src="/static/logo.png"></image>
		</view>

		<!-- 个人信息列表 -->
		<view class="info-list">
			<view class="info-item" v-for="item in infoItems" :key="item.label">
				<text class="info-label">{{ item.label }}</text>
				<text class="info-value">{{ item.value }}</text>
				<image class="arrow-icon" src="/static/arrowRight.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoItems: [{
						label: "用户名",
						value: "小明"
					}, {
						label: "邮箱",
						value: "123@123.com"
					}, {
						label: "个性签名",
						value: "我就是我，不一样的烟火"
					},
					{
						label: "",
						value: "我的朋友圈"
					},
					{
						label: "",
						value: "修改密码"
					},
					{
						label: "",
						value: "退出登录"
					}
				]
			};
		},
		methods: {
			navigateToEdit(label) {
				// 导航到编辑页面，可根据需要进行跳转处理
				console.log("跳转到编辑页面", label);
			}
		}
	};
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
