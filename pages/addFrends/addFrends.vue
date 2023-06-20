/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search-bar">
			<image class="search-icon" src="/static/icon/search.png"></image>
			<input class="search-input" v-model="email" type="text" placeholder="请输入电子邮箱" />
			<button class="search-btn" @click="handleSearch">搜索</button>
		</view>
		<!-- 搜索出的好友 -->
		<view class="search-result">
			<view v-if="searchResults" class="empty">
				<text class="empty-text">暂无搜索结果~</text>
			</view>
			<view v-else>
				<addContact :searchDa='searchDa'></addContact>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		searchFri
	} from '../../api/contacts.js'
	import {
		ref
	} from "vue";
	let searchResults = ref(true)
	let searchDa = ref([])
	const searchApi = async (email) => {
		const res = await searchFri(email);
		// console.log(res, 111);
		if (res.data.code == "200" || res.data.code == 200) {
			searchDa.value = res.data.data;
			searchResults.value = false
			// console.log(searchDa.value, 222);
		} else {
			uni.switchTab({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}

	let email = ref([])

	function handleSearch() {
		searchApi(email.value)
	}
</script>

<style lang="scss">
	.container {
		.search-bar {
			display: flex;
			align-items: center;
			background-color: #fff;
			padding: 10rpx;
			border-radius: 8rpx;
			box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);

			.search-icon {
				width: 40rpx;
				height: 40rpx;
			}

			.search-input {
				flex: 1;
				margin-left: 10rpx;
				padding: 5rpx;
				border: none;
				outline: none;
				font-size: 24rpx;
				color: #333;
			}

			.search-btn {
				background-color: #f4f4f4;
				color: #0aa3b4;
				font-size: 24rpx;
				cursor: pointer;
			}
		}

		.search-result {
			text-align: center;

			.loading {
				margin-top: 20rpx;

				.loading-text {
					color: #999;
					font-size: 24rpx;
				}
			}

			.empty {
				margin-top: 20rpx;

				.empty-text {
					color: #999;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
