<script setup>
import { ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { getSetting, getLoginFn } from '../../utils/index';
import dayjs from 'dayjs';

const value1 = ref(0);
const keyword = ref('');
const datalist1 = ref([]);
const datalist2 = ref([]);
const headrTile = ref(['平安喜乐', '开门见喜', '前途似锦']);
const today = ref(dayjs().format('MM月DD日')); // 当前日期
const weekChange = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const week = ref(dayjs().day())
const userAvatar = ref(); // 用户头像
const weather = ref({}); // 获取天气
const hideHeardOpacity = ref(0)

const tabbarClick = (e) => {
    uni.switchTab({
        url: e.pagePath,
    });
};
const tabList = [
    {
        pagePath: '/pages/home/home',
        iconPath: '/static/home.png',
        selectedIconPath: '/static/home_sec.png',
        text: '首页',
        name: 'home',
    },
    // {
    //     pagePath: '/pages/tool/home',
    //     iconPath: '/static/home.png',
    //     selectedIconPath: '/static/home_sec.png',
    //     text: '工具',
    //     name: 'tool',
    // },
    {
        pagePath: '/pages/user/home',
        iconPath: '/static/user.png',
        selectedIconPath: '/static/user_sec.png',
        text: '我的',
        name: 'user',
    },
];

const imageList = ref([
    {
        src: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        title: '标题1',
        details: '萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点',
    },
    {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        title: '标题2',
        details: '萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点',
    },
    {
        src: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        title: '标题',
        details: '萨达啊但是大的多撒点萨达啊但是大的多撒点',
    },
    {
        src: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        title: '标题',
        details: '萨达啊但是大的多撒点萨达啊但是大的多撒点',
    },
    {
        src: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        title: '标题',
        details: '萨达啊但是大的多撒点萨达啊但是大的多撒点',
    },
    {
        src: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        title: '标题',
        details: '的多撒点萨达啊但是大的多撒点',
    },
]);

// 获取天气
const getWeather = () => {
    uni.request({
        url: 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=bf108d402c7e471b90e9f0323364ee3a',
        method: 'GET',
        success: (res) => {
            const { now } = res.data;
            weather.value = {
                title: `${now.text} ${now.windDir}`,
                icon: now.icon,
            };
            uni.setStorageSync('weather', weather.value);
        },
        fail: () => {
            this.openmsg('警告', '天气接口获取失败');
        },
        complete: () => { },
    });
};

const init = () => {
    let i = 0;
    while (i < imageList.value.length) {
        datalist1.value.push(imageList.value[i]);
        i++
        if (i < imageList.value.length) {
            datalist2.value.push(imageList.value[i]);
            i++
        }
    }
};

const searchFn = () => { };

const addDiaryFn = () => {
    uni.navigateTo({
        url: 'addDiary',
    });
};

onLoad(() => {
    init();
    console.log(uni.getStorageSync('weather'));
    if (uni.getStorageSync('weather')) {
        weather.value = uni.getStorageSync('weather');
    } else {
        getWeather();
    }

    // 判断是否已经登录
    uni.checkSession({
        success (res) {
            console.log('当前登录未失效，不需要重新登录');
        },
        fail: (err) => {
            console.log('当前登录已经失效重新登录');
            getSetting('scope.record').then((res) => {
                getLoginFn().then((res) => {
                    userAvatar.value = res.result.user_profile_photo;
                });
            });
            const { user_profile_photo } = uni.getStorageSync('userInfo');
            userAvatar.value = user_profile_photo;
        },
    });
});


const onPageScroll = (e) => {
    if (0 <= e.detail.scrollTop < 10) {
        hideHeardOpacity.value = 0
    } if (10 <= e.detail.scrollTop < 20) {
        hideHeardOpacity.value = 0.2
    } if (20 <= e.detail.scrollTop < 40) {
        hideHeardOpacity.value = 0.4
    } if (40 <= e.detail.scrollTop < 60) {
        hideHeardOpacity.value = 0.6
    } if (60 <= e.detail.scrollTop < 80) {
        hideHeardOpacity.value = 0.8
    } if (100 <= e.detail.scrollTop) {
        hideHeardOpacity.value = 1
    }
    // if (e.detail.scrollTop > 50 && hideHeardOpacity.value <= 1) {
    //     hideHeardOpacity.value = hideHeardOpacity.value + 0.2
    // } else if (e.detail.scrollTop < 50 && hideHeardOpacity.value >= 0) {
    //     hideHeardOpacity.value = hideHeardOpacity.value - 0.2
    // }
    console.log('【滚动距离】', e.detail.scrollTop, '121221', hideHeardOpacity.value);
}



</script>

<template>
    <view class="content">
        <view style="position: absolute; z-index: 100;"
              :style="{ opacity: hideHeardOpacity }">
            <u-navbar fixed
                      safeAreaInsetTop>
                <template #left>
                    <view style="width: 100%;">
                        <u-search placeholder="搜索"
                                  :show-action="false"
                                  :animation="false"
                                  @click="searchFn"
                                  @custom="searchFn"
                                  v-model="keyword"></u-search>
                    </view>
                </template>
            </u-navbar>
        </view>

        <scroll-view @scroll="onPageScroll"
                     scroll-y>

            <view class="content-heard">
                <view class="content-heard-top">
                    <u-image :showLoading="true"
                             :src="userAvatar"
                             width="40px"
                             height="40px"
                             shape="circle"></u-image>
                    <view class="content-heard-top-weather"> {{ weather.title }}<i style="margin-left: 10px"
                           :class="[`qi-${weather.icon}`]"></i> </view>
                </view>
                <view class="content-heard-bottom">
                    <view class="content-heard-currentDate">
                        <view class="content-heard-currentDate-p2"> {{ `${today} ${weekChange[week]}` }}</view>
                        <view class="content-heard-currentDate-p1"> {{ headrTile[0] }} </view>
                    </view>
                    <view class="content-heard-search">
                        <u-search placeholder="搜索"
                                  :show-action="true"
                                  :disabled="false"
                                  :animation="false"
                                  @click="searchFn"
                                  @custom="searchFn"
                                  v-model="keyword"></u-search>
                    </view>
                </view>
            </view>
            <view class="content-main">
                <view class="content-main-heard">
                    <!-- <u-swiper :list="['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png']" indicator indicatorMode="line" circular></u-swiper> -->
                </view>

                <template v-if="imageList.length > 0">
                    <view class="content-main-list">
                        <ul class="ul">
                            <li class="li"
                                v-for="(item, index) in datalist1"
                                @click="onpen(item)"
                                :key="`left-${index}`">
                                <u-image :showLoading="true"
                                         :lazyLoad="true"
                                         radius="6px 6px 0 0"
                                         :src="item.src"
                                         width="100%"></u-image>
                                <view class="text">
                                    <view class="text-title">{{ item.title }}</view>
                                    <view class="text-details">{{ item.details }}</view>
                                </view>
                            </li>
                        </ul>
                        <ul class="ul">
                            <li class="li"
                                v-for="(item, index) in datalist2"
                                @click="onpen(item)"
                                :key="`right-${index}`">
                                <u-image :showLoading="true"
                                         :lazyLoad="true"
                                         radius="6px 6px 0 0"
                                         :src="item.src"
                                         width="100%"
                                         height="120"></u-image>
                                <view class="text">
                                    <view class="text-title">{{ item.title }}</view>
                                    <view class="text-details">{{ item.details }}</view>
                                </view>
                            </li>
                        </ul>
                    </view>
                </template>
                <template v-else>
                    <view class="content-main-noList">
                        <view class="content-main-noList-add">
                            <view class="title"> 当前还未添加过日记，点击下面加号记录第一条日记吧 </view>
                            <u-button style="margin-top: 20px"
                                      shape="circle"
                                      type="primary"
                                      icon="plus"
                                      text="点击添加日记"
                                      @click="addDiaryFn()"></u-button>
                            <u-empty mode="data"
                                     icon="http://cdn.uviewui.com/uview/empty/car.png"> </u-empty>
                        </view>
                    </view>
                </template>
            </view>
        </scroll-view>

        <u-tabbar activeColor="#d81e06"
                  :value="value1"
                  @change="(name) => (value1 = name)"
                  :fixed="true"
                  :placeholder="true"
                  :safeAreaInsetBottom="true">
            <u-tabbar-item v-for="(item, i) in tabList"
                           :key="item.name"
                           :text="item.text"
                           :name="item.name"
                           @click="tabbarClick(item)"
                           icon="home">
                <!-- <image class="bar_img" slot="active-icon" :src="item.selectedIconPath"></image>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <image class="bar_img" slot="inactive-icon" :src="item.iconPath"></image> -->
            </u-tabbar-item>

            <!-- <u-tabbar-item text="首页" size="28" icon="home"></u-tabbar-item>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <u-tabbar-item text="11" size="28" icon="plus-circle-fill"></u-tabbar-item>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <u-tabbar-item text="我的" size="28" icon="account"></u-tabbar-item> -->
        </u-tabbar>
    </view>
</template>

<style lang="less">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 40px);
    padding: 20px;
    flex-wrap: nowrap;

    background: linear-gradient(rgb(255, 102, 0) 0%, rgb(255, 147, 59) 0%, rgb(255, 255, 255) 30%);

    .content-heard-hide {
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100px;
        top: 0;
        z-index: 200;

        .content-heard-hide-search {
            position: absolute;
            padding: 10px 20px;
            bottom: 0;
        }
    }

    .content-heard {
        display: flex;
        width: 100%;
        height: 100px;
        position: sticky;
        // #ifdef MP-WEIXIN
        margin-top: 20px;
        // #endif
        margin-bottom: 10px;
        flex-direction: column;
        align-items: flex-start;

        .content-heard-top {
            display: flex;
            flex-direction: row;
            flex: 1, 1;

            .content-heard-top-weather {
                display: flex;
                align-items: center;
                margin-left: 10px;
                font-size: 14px;
                font-weight: 400;
                color: rgb(85, 85, 85);
            }
        }

        .content-heard-bottom {
            height: 48px;
            display: flex;
            align-items: flex-end;

            .content-heard-currentDate {
                width: 120px;

                .content-heard-currentDate-p1 {
                    font-size: 20px;
                    font-weight: 600;
                    color: rgb(28, 28, 28);
                    white-space: nowrap;
                }

                .content-heard-currentDate-p2 {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgb(85, 85, 85);
                    white-space: nowrap;
                }
            }

            .content-heard-search {
                flex: 1;
                // padding: 0 10px;
            }
        }
    }

    .content-main {
        width: 100%;
        border-radius: 6px;
        // padding-bottom: 20px;

        .content-main-heard {
            height: 160px;
            width: 100%;
            border-radius: 6px;
            background-color: rgb(255, 174, 124);
            margin: 10px 0;
        }

        .content-main-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
            grid-gap: 10px;
            margin-bottom: 84px;

            .ul {
                margin: 0;
                padding: 0;
                width: 100%;

                .li {
                    display: flex;
                    flex-direction: column;
                    align-content: space-around;
                    background-color: rgb(219, 219, 219);
                    margin-bottom: 10px;
                    border-radius: 6px;

                    .text {
                        flex: 1;
                        padding: 10px;
                        font-size: 12px;

                        .text-title {
                            font-size: 16px;
                        }

                        .text-details {
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .content-main-noList {
            height: 100%;

            .content-main-noList-add {
                height: 400px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;

                .title {
                    font-size: 20px;
                    font-weight: 600;
                    color: rgb(28, 28, 28);
                    margin: 10xp 0;
                }
            }
        }
    }
}
</style>
