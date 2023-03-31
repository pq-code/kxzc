"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_tabbar_item2 = common_vendor.resolveComponent("u-tabbar-item");
  const _easycom_u_tabbar2 = common_vendor.resolveComponent("u-tabbar");
  (_easycom_u_image2 + _easycom_u_tabbar_item2 + _easycom_u_tabbar2)();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_u_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_tabbar_item + _easycom_u_tabbar)();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const tabbarClick = (e) => {
      common_vendor.index.switchTab({
        url: e.pagePath
      });
    };
    const formData = common_vendor.ref({
      userAvatar: "",
      userName: "",
      province: "",
      sex: ""
    });
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
    const editUser = () => {
      common_vendor.index.navigateTo({
        url: "editUserInfo"
      });
    };
    common_vendor.onLoad(() => {
      const { user_info } = common_vendor.index.getStorageSync("userInfo");
      if (user_info) {
        formData.value.userAvatar = user_info.avatarUrl;
        formData.value.userName = user_info.nickName;
        formData.value.province = user_info.province;
        formData.value.sex = user_info.gender;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => editUser()),
        b: common_vendor.p({
          showLoading: true,
          src: _ctx.userAvatar,
          width: "80px",
          height: "80px",
          shape: "circle"
        }),
        c: common_vendor.t(formData.value.userName),
        d: common_vendor.f(tabList, (item, i, i0) => {
          return {
            a: item.name,
            b: common_vendor.o(($event) => tabbarClick(item), item.name),
            c: "900e4cf8-2-" + i0 + ",900e4cf8-1",
            d: common_vendor.p({
              text: item.text,
              name: item.name,
              icon: "home"
            })
          };
        }),
        e: common_vendor.o((name) => _ctx.value1 = name),
        f: common_vendor.p({
          activeColor: "aqua",
          value: _ctx.value1,
          fixed: true,
          placeholder: true,
          safeAreaInsetBottom: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangpq/Desktop/Sourcetree/wx/kxzc/pages/user/home.vue"]]);
wx.createPage(MiniProgramPage);
