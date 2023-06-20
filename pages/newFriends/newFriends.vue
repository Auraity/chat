/**
* @Author 邓冬勤
* @Description
*/
<template>
	<view class="container">
		<newFriends :newFriDa='newFriDa'></newFriends>
	</view>
</template>

<script setup>
	import {
		newFri
	} from '../../api/contacts.js'
	import {
		ref
	} from "vue";
	let newFriDa = ref([])
	const newFriApi = async () => {
		const res = await newFri();
		// console.log(res, 11);
		if (res.data.code == "200" || res.data.code == 200) {
			newFriDa.value = res.data.data.list;
		} else {
			uni.showToast({
				title: '数据获取失败',
				icon: 'none'
			});
		}
	}
	newFriApi()
</script>
