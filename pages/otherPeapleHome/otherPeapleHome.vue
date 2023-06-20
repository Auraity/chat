/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<!-- 顶部个人信息 -->
		<view class="profile">
			<image class="avatar" :src="hisHomeDa.friendHeadImgUrl"></image>
			<view class="info">
				<text class="name">{{hisHomeDa.friendName}}</text><br />
				<text class="email">{{hisHomeDa.friendEmail}}</text>
			</view>
		</view>
		<text class="bio">个性签名：{{hisHomeDa.friendIntroduction}}</text>
		<view class="headright">
			<view class="info-list" @click="toHisTrends(props.fid)">
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
		hisHome,
		deleteFid
	} from '../../api/contacts.js'
	import {
		ref,
		defineProps
	} from "vue";
	const props = defineProps(['fid'])
	let userInfo = ref({
		name: '姓名',
		logo: '../../static/logo.png',
		email: 'johndoe@example.com',
		bio: 'Hello, I am John Doe'
	})


	function Delete() {
		// 处理删除逻辑
		deleteFidApi(props.fid)
	}

	function Message() {
		// 处理发消息逻辑
		uni.navigateTo({
			url: '/pages/WebSocket/WebSocket'
		})
	}

	function toHisTrends(fid) {
		uni.navigateTo({
			url: `/pages/hisTrends/hisTrends?fid=${fid}`
		})
	}
	let hisHomeDa = ref([])
	const hisHomeApi = async (friendId) => {
		const res = await hisHome(friendId);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			hisHomeDa.value = res.data.data;
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}

	const deleteFidApi = async (friendId) => {
		const res = await deleteFid(friendId);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			uni.showToast({
				title: '删除成功',
				icon: 'none'
			});
			uni.switchTab({
				url: '/pages/contacts/contacts'
			})
		} else {
			uni.showToast({
				title: '删除失败',
				icon: 'none'
			});
		}
	}


	hisHomeApi(props.fid)
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
