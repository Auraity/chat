/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="card" v-for="(item,i) in props.newFriDa" :key="i">
		<view class="cleft">
			<image class="thumbnail" :src="item.friendHeadImgUrl" />
			<view class="content">
				<text class="title"> {{item.friendName}} </text>
			</view>
		</view>
		<!-- status：
				0等待验证（如果friendId是自己则显示添加拒绝按钮,如果不是则显示按钮）
				1已添加
				2已拒绝（friendId是自己表示别人加我）和未通过 
		-->
		<view class="cright">
			<view v-if="item.status==0&&item.friendId==uId" class="allbtn">
				<button class="btn agreenbtn" @click="agreen(i)">同意</button>
				<button class="btn refusebtn" @click="refuse(i)">拒绝</button>
			</view>
			<view v-else>
				<text class="text">{{item.statusDescription}}</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		updateStatus
	} from '../../api/contacts.js'
	import {
		defineProps,
		ref
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['newFriDa'])

	// 获取自己的id
	let uId = ref('')
	uni.getStorage({
		key: 'user',
		success: (res) => {
			uId.value = res.data.userId
		}
	})
	const upStatusApi = async (uid, fid, status) => {
		const res = await updateStatus(uid, fid, status);
		// console.log(res, 111);
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

	function agreen(index) {
		upStatusApi(props.newFriDa[index].userId, props.newFriDa[index].friendId, 1)
	}

	function refuse(index) {
		upStatusApi(props.newFriDa[index].userId, props.newFriDa[index].friendId, 2)
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
			.allbtn {
				display: flex;

				.btn {
					// padding: 8rpx 16rpx;
					border: none;
					border-radius: 20rpx;
					font-size: 24rpx;
					cursor: pointer;

				}

				.agreenbtn {
					background-color: #0aa3b4;
					color: #fff;
				}

				.refusebtn {
					margin-left: 20rpx;
					background-color: #f4f4f4;
					color: #0aa3b4;
				}
			}

			.text {
				color: #ccc;
				font-size: 30rpx;
			}
		}
	}
</style>
