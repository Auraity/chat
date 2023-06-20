/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="card">
		<view class="cleft">
			<image class="thumbnail" :src="props.searchDa.friendHeadImgUrl" />
			<view class="content">
				<text class="title"> {{props.searchDa.friendName}} </text>
			</view>
		</view>
		<view class="cright">
			<view v-if="!props.searchDa.whetherMyFriend">
				<button class="addbtn" @click="addOption">添加</button>
			</view>
			<view v-else>
				<text class="text">已添加</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		addFri
	} from '../../api/contacts.js'
	import {
		defineProps,
		ref
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['searchDa'])

	const searchApi = async (userId) => {
		const res = await addFri(userId);
		if (res.data.code == "200" || res.data.code == 200) {
			uni.switchTab({
				url: '/pages/contacts/contacts'
			})
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}

	let userId = props.searchDa.friendId;

	function addOption() {
		searchApi(userId)
	}
</script>

<style lang="scss">
	.card {
		display: flex;
		align-items: center;
		// padding: 10rpx;
		padding: 0;
		margin: 20rpx 40rpx;
		justify-content: space-between;

		.cleft {
			display: flex;
			margin-top: 20rpx;

			.thumbnail {
				width: 100rpx;
				height: 100rpx;
				// object-fit: cover;
				margin-right: 20rpx;
			}

			.content {
				flex: 3;
				height: 100rpx;

				.title {
					font-size: 34rpx;
					font-weight: bold;
					line-height: 100rpx;
				}
			}
		}

		.cright {
			.addbtn {
				// padding: 8rpx 16rpx;
				background-color: #0aa3b4;
				color: #fff;
				border: none;
				border-radius: 20rpx;
				font-size: 24rpx;
				cursor: pointer;
			}

			.text {
				font-size: 30rpx;
				color: #ccc;
			}
		}
	}
</style>
