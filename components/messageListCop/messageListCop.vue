/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container" v-for="(item,i) in props.msgdata" :key="item.sessionId">
		<view class="card" @click="enterSocket(item.sessionId)">
			<image class="thumbnail" :src="item.friends[0].friendHeadImgUrl" />
			<view class="content">
				<text class="title"> {{item.friends[0].friendName}} </text><br />
				<text class="description"> {{item.lastMessage}} </text>
			</view>
			<view class="msgDate">
				<text>{{item.lastActiveTime}}</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		ref
	} from "vue";
	let headUrl = ref('');
	let name = ref('');
	let description = ref('');
	let msgDate = ref('')

	import {
		defineProps
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['msgdata'])

	function enterSocket(sessionId) {
		uni.navigateTo({
			url: `/pages/WebSocket/WebSocket?sessionId=${sessionId}`
		})
	}
</script>

<style lang="scss">
	.container {
		justify-content: space-between;
		display: flex;

		.card {
			.msgDate {
				color: #939393;
				font-size: 20rpx;
				height: 100rpx;
				border-bottom: 1rpx solid #dddddd;
			}

			display: flex;
			align-items: center;
			// padding: 10rpx;
			padding: 0;
			margin: 20rpx 40rpx;

			.thumbnail {
				width: 100rpx;
				height: 100rpx;
				// object-fit: cover;
				margin-right: 20rpx;
			}

			.content {
				flex: 1;
				border-bottom: 1rpx solid #dddddd;
				height: 100rpx;
				width: 400rpx;

				.title {
					font-size: 34rpx;
					font-weight: bold;
				}

				.description {
					font-size: 28rpx;
					color: #666;

				}
			}
		}
	}
</style>
