<template>
	<view class="card" v-for="(item,i) in props.newFriDa" :key="item.userId">
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
			<view v-if="item.status==0&&item.friendId==item.userId" class="allbtn">
				<button class="btn agreenbtn">同意</button>
				<button class="btn refusebtn">拒绝</button>
			</view>
			<view v-else>
				<text class="text">{{item.statusDescription}}</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		defineProps,
		ref
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['newFriDa'])
	// console.log(props.newFriDa, "666");

	// 获取自己的id
	let userId = ref()
	uni.getStorage({
		key: 'userId',
		success: (res) => {
			// console.log(res, "id");
			userId.value = res
		}
	})
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
