<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';

const imageSrc = ref();
onLoad((src) => {
  imageSrc.value = src.src;
});
</script>
<template>
  <pageSearch title="车">
    <view class="listDetails-center-heard">
      <u--image :showLoading="true" :lazy-load="true" :src="imageSrc" width="100%" height="260px" @click="click"></u--image>
    </view>
    <view class="listDetails-center-main">
      <view class="listDetails-center-main-heard"> 1211 </view>
    </view>
  </pageSearch>
</template>
<style lang="less" scoped>
.listDetails-center-heard {
  height: 260px;
}

.listDetails-center-main {
  flex: 1;
  padding: 10px;

  .listDetails-center-main-heard {
    height: 60px;
  }
}
</style>
