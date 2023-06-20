/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<view class="card">
			<image class="thumbnail" :src="cotdata.friendHeadImgUrl" />

			<view class="content">
				<text class="title">{{cotdata.friendName}}</text>
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
	const props = defineProps({
		'cotdata': 'cotdata'
	})
</script>

<style lang="scss">
	.card {
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
			border-bottom: 1rpx solid #dddddd;
			height: 100rpx;
			flex: 1;

			.title {
				font-size: 34rpx;
				font-weight: bold;
				line-height: 100rpx;
			}
		}
	}
</style>
