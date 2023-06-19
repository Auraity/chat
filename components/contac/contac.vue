<template>
	<view class="card" v-for='(item,i) in props.cotdata' :key="item.friendId">
		<image class="thumbnail" :src="item.friendHeadImgUrl" />

		<view class="content">
			<text class="title">{{item.friendName}}</text>
		</view>
	</view>
</template>


<script setup>
	import {
		defineProps,
		ref
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['cotdata'])
	// console.log(props.cotdata, "666");
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
			flex: 1;
			border-bottom: 1rpx solid #dddddd;
			height: 100rpx;

			.title {
				font-size: 34rpx;
				font-weight: bold;
				line-height: 100rpx;
			}
		}
	}
</style>
