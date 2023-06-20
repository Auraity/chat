/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="card" v-for="(item,i) in props.allFTrendsDa" :key="i">
		<image class="thumbnail" :src="item.userHeadImgUrl" />
		<view class="content">
			<text class="title"> {{item.username}} </text><br />
			<text class="description">
				{{item.content}}
			</text><br />
			<text class="publishedDate">发布时间：{{item.createTime}}</text>

		</view>
	</view>
</template>


<script setup>
	import {
		defineProps
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['allFTrendsDa'])
</script>

<style lang="scss">
	.card {
		display: flex;
		padding: 40rpx 0;
		margin: 20rpx 40rpx;
		border-bottom: 1rpx solid #dddddd;

		.thumbnail {
			width: 100rpx;
			height: 100rpx;
			margin-right: 20rpx;
		}

		.content {
			flex: 1;
			width: 500rpx;

			.title {
				font-size: 36rpx;
				font-weight: bold;
				color: #00557f;
			}

			.description {
				font-size: 30rpx;
				word-wrap: break-word;

			}

			.publishedDate {
				font-size: 24rpx;
				color: #666;
			}
		}
	}
</style>
