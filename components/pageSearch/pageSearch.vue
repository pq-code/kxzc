<script setup lang='ts'>
import { ref } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default() {
            return '搜索'
        }
    },
    backUrl: {
        type: String,
        default() {
            return ''
        }
    }
})
const leftClick = () => {
    if (props.backUrl == '') {
        uni.navigateBack({
        });
    } else {
        uni.navigateTo({
            url: props.backUrl
        });
    }
}
</script>
<template>
    <view class='page-search'>
        <view class="page-search-navbar">
            <u-navbar :title="title"
                      height="50"
                      @leftClick="leftClick"
                      :fixed="false"
                      :placeholder="true"
                      :autoBack="false">
            </u-navbar>
        </view>
        <view class="page-search-center">
            <slot></slot>
        </view>
    </view>
</template>
<style lang='less' scoped>
.page-search {
    width: 100vw;
    height: 100vh;
    background-color: rgb(219, 219, 219);

    .page-search-navbar {
        // float: top;
        // height: 50px;
        width: 100vw;
    }

    .page-search-center {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        height: calc(100vh - 50px);
        // #ifdef MP-WEIXIN
        height: calc(100vh - 97px);
        // #endif
        // height: 100%;
        background-color: rgb(255, 255, 255);
    }
}
</style>
