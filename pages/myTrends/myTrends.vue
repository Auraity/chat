/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="card" v-for="(item,i) in myTrendsDa" :key="i">
		<image class="thumbnail" :src="item.userHeadImgUrl" />
		<view class="content">
			<text class="title"> {{item.username}} </text><br />
			<text class="description">
				{{item.content}}
			</text><br />
			<view class="operation">
				<text class="publishedDate">发布时间：{{item.createTime}}</text>
				<text class="deleteTrend">删除</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		myTrends
	} from '../../api/my.js'
	import {
		ref
	} from "vue";
	let myTrendsDa = ref([])
	uni.getStorage({
		key: 'user',
		success: function(res) {
			myTrendsApi(res.data.userId)
		}
	})
	const myTrendsApi = async (friendId) => {
		const res = await myTrends(friendId);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			myTrendsDa.value = res.data.data.list;
			// console.log(myTrendsDa, 222);
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
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

			.operation {
				display: flex;
				justify-content: space-between;

				.publishedDate {
					font-size: 24rpx;
					color: #666;
				}

				.deleteTrend {
					font-size: 24rpx;
					color: #666;
				}
			}

		}
	}
</style>
