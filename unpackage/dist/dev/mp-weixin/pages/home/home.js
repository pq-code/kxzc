"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
require("../../api/apis/user.js");
require("../../api/index.js");
require("../../api/service/wxService.js");
require("../../api/error/errTips.js");
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u__image2 = common_vendor.resolveComponent("u--image");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_image2 + _easycom_u_search2 + _easycom_u__image2 + _easycom_u_button2 + _easycom_u_empty2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_u__image = () => "../../uni_modules/uview-plus/components/u--image/u--image.js";
const _easycom_u_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_empty = () => "../../uni_modules/uview-plus/components/u-empty/u-empty.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_search + _easycom_u__image + _easycom_u_button + _easycom_u_empty + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const value1 = common_vendor.ref(0);
    const keyword = common_vendor.ref("");
    const datalist1 = common_vendor.ref([]);
    const datalist2 = common_vendor.ref([]);
    const headrTile = common_vendor.ref(["\u5E73\u5B89\u559C\u4E50", "\u5F00\u95E8\u89C1\u559C", "\u524D\u9014\u4F3C\u9526"]);
    const today = common_vendor.ref(common_vendor.dayjs().format("MM\u6708DD\u65E5 \u661F\u671Fd"));
    const userAvatar = common_vendor.ref();
    const weather = common_vendor.ref({});
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
        text: "\u9996\u9875",
        name: "home"
      },
      {
        pagePath: "/pages/tool/home",
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home_sec.png",
        text: "\u5DE5\u5177",
        name: "tool"
      },
      {
        pagePath: "/pages/user/home",
        iconPath: "/static/user.png",
        selectedIconPath: "/static/user_sec.png",
        text: "\u6211\u7684",
        name: "user"
      }
    ];
    const imageList = common_vendor.ref([
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "\u6807\u98981",
        details: "\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9,\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
      },
      {
        src: "https://cdn.uviewui.com/uview/album/1.jpg",
        title: "\u6807\u98982",
        details: "\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9,\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
      },
      {
        src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        title: "\u6807\u9898",
        details: "\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
      },
      {
        src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        title: "\u6807\u9898",
        details: "\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
      },
      {
        src: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        title: "\u6807\u9898",
        details: "\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
      },
      {
        src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        title: "\u6807\u9898",
        details: "\u7684\u591A\u6492\u70B9\u8428\u8FBE\u554A\u4F46\u662F\u5927\u7684\u591A\u6492\u70B9"
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
          this.openmsg("\u8B66\u544A", "\u5929\u6C14\u63A5\u53E3\u83B7\u53D6\u5931\u8D25");
        },
        complete: () => {
        }
      });
    };
    const init = () => {
      let i = 0;
      while (i < imageList.value.length) {
        datalist1.value.push(imageList.value[i++]);
        if (i < imageList.value.length) {
          datalist2.value.push(imageList.value[i++]);
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
          console.log("\u5F53\u524D\u767B\u5F55\u672A\u5931\u6548\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u767B\u5F55");
        },
        fail: (err) => {
          console.log("\u5F53\u524D\u767B\u5F55\u5DF2\u7ECF\u5931\u6548\u91CD\u65B0\u767B\u5F55");
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
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          showLoading: true,
          src: userAvatar.value,
          width: "40px",
          height: "40px",
          shape: "circle"
        }),
        b: common_vendor.t(weather.value.title),
        c: common_vendor.n(`qi-${weather.value.icon}`),
        d: common_vendor.t(today.value),
        e: common_vendor.t(headrTile.value[0]),
        f: common_vendor.o(searchFn),
        g: common_vendor.o(searchFn),
        h: common_vendor.o(($event) => keyword.value = $event),
        i: common_vendor.p({
          placeholder: "\u641C\u7D22",
          ["show-action"]: true,
          disabled: true,
          animation: false,
          modelValue: keyword.value
        }),
        j: !imageList.value.length > 0
      }, !imageList.value.length > 0 ? {
        k: common_vendor.f(datalist1.value, (item, index, i0) => {
          return {
            a: "88147220-2-" + i0,
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
        l: common_vendor.f(datalist2.value, (item, index, i0) => {
          return {
            a: "88147220-3-" + i0,
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
        m: common_vendor.o(($event) => addDiaryFn()),
        n: common_vendor.p({
          shape: "circle",
          type: "primary",
          icon: "plus",
          text: "\u70B9\u51FB\u6DFB\u52A0\u65E5\u8BB0"
        }),
        o: common_vendor.p({
          mode: "data",
          icon: "http://cdn.uviewui.com/uview/empty/car.png"
        })
      }, {
        p: common_vendor.f(tabList, (item, i, i0) => {
          return {
            a: item.name,
            b: common_vendor.o(($event) => tabbarClick(item), item.name),
            c: "88147220-7-" + i0 + ",88147220-6",
            d: common_vendor.p({
              text: item.text,
              name: item.name,
              icon: "home"
            })
          };
        }),
        q: common_vendor.o((name) => value1.value = name),
        r: common_vendor.p({
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangpq/Desktop/Sourcetree/wx/kxzc/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
