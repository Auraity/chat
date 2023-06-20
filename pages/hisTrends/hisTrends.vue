/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container" v-for="(item,i) in hisTrendsDa" :key="i">
		<view class="card">
			<image class="thumbnail" :src="item.userHeadImgUrl" />
			<view class="content">
				<text class="title"> {{item.username}} </text><br />
				<text class="description">
					{{item.content}}
				</text><br />
				<text class="publishedDate">发布时间：{{item.createTime}}</text>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		hisTrends
	} from '../../api/contacts.js'
	import {
		ref,
		defineProps
	} from 'vue'
	// 获取父组件的值
	const props = defineProps(['fid'])

	let hisTrendsDa = ref([])
	const hisTrendsApi = async (friendId) => {
		const res = await hisTrends(friendId);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			hisTrendsDa.value = res.data.data.list;
			// console.log(hisTrendsDa, 222);
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	hisTrendsApi(props.fid)
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
