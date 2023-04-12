"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
require("../../api/apis/user.js");
require("../../api/index.js");
require("../../api/service/wxService.js");
require("../../api/error/errTips.js");
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_search2 + _easycom_u_navbar2 + _easycom_u_image2 + _easycom_u_button2 + _easycom_u_empty2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_navbar + _easycom_u_image + _easycom_u_button + _easycom_u_empty + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const value1 = common_vendor.ref(0);
    const keyword = common_vendor.ref("");
    const datalist1 = common_vendor.ref([]);
    const datalist2 = common_vendor.ref([]);
    const headrTile = common_vendor.ref(["平安喜乐", "开门见喜", "前途似锦"]);
    const today = common_vendor.ref(common_vendor.dayjs().format("MM月DD日"));
    const weekChange = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const week = common_vendor.ref(common_vendor.dayjs().day());
    const userAvatar = common_vendor.ref();
    const weather = common_vendor.ref({});
    const hideHeardOpacity = common_vendor.ref(0);
    const tabbarClick = (e) => {
      common_vendor.index.switchTab({
        url: e.pagePath
      });
    };
    const tabList = [
      {
        pagePath: "/pages/home/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "首页",
        name: "home"
      },
      // {
      //     pagePath: '/pages/tool/home',
      //     iconPath: '/static/home.png',
      //     selectedIconPath: '/static/home_sec.png',
      //     text: '工具',
      //     name: 'tool',
      // },
      {
        pagePath: "/pages/user/home",
        iconPath: "/static/user.png",
        selectedIconPath: "/static/user_sec.png",
        text: "我的",
        name: "user"
      }
    ];
    const imageList = common_vendor.ref([
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "标题1",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://cdn.uviewui.com/uview/album/1.jpg",
        title: "标题2",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点,萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        title: "标题",
        details: "萨达啊但是大的多撒点萨达啊但是大的多撒点"
      },
      {
        src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        title: "标题",
        details: "的多撒点萨达啊但是大的多撒点"
      }
    ]);
    const getWeather = () => {
      common_vendor.index.request({
        url: "https://devapi.qweather.com/v7/weather/now?location=101010100&key=bf108d402c7e471b90e9f0323364ee3a",
        method: "GET",
        success: (res) => {
          const { now } = res.data;
          weather.value = {
            title: `${now.text} ${now.windDir}`,
            icon: now.icon
          };
          common_vendor.index.setStorageSync("weather", weather.value);
        },
        fail: () => {
          this.openmsg("警告", "天气接口获取失败");
        },
        complete: () => {
        }
      });
    };
    const init = () => {
      let i = 0;
      while (i < imageList.value.length) {
        datalist1.value.push(imageList.value[i]);
        i++;
        if (i < imageList.value.length) {
          datalist2.value.push(imageList.value[i]);
          i++;
        }
      }
    };
    const searchFn = () => {
    };
    const addDiaryFn = () => {
      common_vendor.index.navigateTo({
        url: "addDiary"
      });
    };
    common_vendor.onLoad(() => {
      init();
      console.log(common_vendor.index.getStorageSync("weather"));
      if (common_vendor.index.getStorageSync("weather")) {
        weather.value = common_vendor.index.getStorageSync("weather");
      } else {
        getWeather();
      }
      common_vendor.index.checkSession({
        success(res) {
          console.log("当前登录未失效，不需要重新登录");
        },
        fail: (err) => {
          console.log("当前登录已经失效重新登录");
          utils_index.getSetting("scope.record").then((res) => {
            utils_index.getLoginFn().then((res2) => {
              userAvatar.value = res2.result.user_profile_photo;
            });
          });
          const { user_profile_photo } = common_vendor.index.getStorageSync("userInfo");
          userAvatar.value = user_profile_photo;
        }
      });
    });
    const onPageScroll = (e) => {
      if (0 <= e.detail.scrollTop < 10) {
        hideHeardOpacity.value = 0;
      }
      if (10 <= e.detail.scrollTop < 20) {
        hideHeardOpacity.value = 0.2;
      }
      if (20 <= e.detail.scrollTop < 40) {
        hideHeardOpacity.value = 0.4;
      }
      if (40 <= e.detail.scrollTop < 60) {
        hideHeardOpacity.value = 0.6;
      }
      if (60 <= e.detail.scrollTop < 80) {
        hideHeardOpacity.value = 0.8;
      }
      if (100 <= e.detail.scrollTop) {
        hideHeardOpacity.value = 1;
      }
      console.log("【滚动距离】", e.detail.scrollTop, "121221", hideHeardOpacity.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(searchFn),
        b: common_vendor.o(searchFn),
        c: common_vendor.o(($event) => keyword.value = $event),
        d: common_vendor.p({
          placeholder: "搜索",
          ["show-action"]: false,
          animation: false,
          modelValue: keyword.value
        }),
        e: common_vendor.p({
          fixed: true,
          safeAreaInsetTop: true
        }),
        f: hideHeardOpacity.value,
        g: common_vendor.p({
          showLoading: true,
          src: userAvatar.value,
          width: "40px",
          height: "40px",
          shape: "circle"
        }),
        h: common_vendor.t(weather.value.title),
        i: common_vendor.n(`qi-${weather.value.icon}`),
        j: common_vendor.t(`${today.value} ${weekChange[week.value]}`),
        k: common_vendor.t(headrTile.value[0]),
        l: common_vendor.o(searchFn),
        m: common_vendor.o(searchFn),
        n: common_vendor.o(($event) => keyword.value = $event),
        o: common_vendor.p({
          placeholder: "搜索",
          ["show-action"]: true,
          disabled: false,
          animation: false,
          modelValue: keyword.value
        }),
        p: imageList.value.length > 0
      }, imageList.value.length > 0 ? {
        q: common_vendor.f(datalist1.value, (item, index, i0) => {
          return {
            a: "f432787e-4-" + i0,
            b: common_vendor.p({
              showLoading: true,
              lazyLoad: true,
              radius: "6px 6px 0 0",
              src: item.src,
              width: "100%"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.details),
            e: common_vendor.o(($event) => _ctx.onpen(item), `left-${index}`),
            f: `left-${index}`
          };
        }),
        r: common_vendor.f(datalist2.value, (item, index, i0) => {
          return {
            a: "f432787e-5-" + i0,
            b: common_vendor.p({
              showLoading: true,
              lazyLoad: true,
              radius: "6px 6px 0 0",
              src: item.src,
              width: "100%",
              height: "120"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.t(item.details),
            e: common_vendor.o(($event) => _ctx.onpen(item), `right-${index}`),
            f: `right-${index}`
          };
        })
      } : {
        s: common_vendor.o(($event) => addDiaryFn()),
        t: common_vendor.p({
          shape: "circle",
          type: "primary",
          icon: "plus",
          text: "点击添加日记"
        }),
        v: common_vendor.p({
          mode: "data",
          icon: "http://cdn.uviewui.com/uview/empty/car.png"
        })
      }, {
        w: common_vendor.o(onPageScroll),
        x: common_vendor.f(tabList, (item, i, i0) => {
          return {
            a: item.name,
            b: common_vendor.o(($event) => tabbarClick(item), item.name),
            c: "f432787e-9-" + i0 + ",f432787e-8",
            d: common_vendor.p({
              text: item.text,
              name: item.name,
              icon: "home"
            })
          };
        }),
        y: common_vendor.o((name) => value1.value = name),
        z: common_vendor.p({
          activeColor: "#d81e06",
          value: value1.value,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/code/kxzc/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
