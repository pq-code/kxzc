"use strict";
const common_vendor = require("../common/vendor.js");
const api_apis_user = require("../api/apis/user.js");
const showToast = (e) => {
  common_vendor.index.showToast({
    icon: "none",
    position: "center",
    title: e
  });
};
const getSetting = (scope) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.authorize({
      scope,
      success(data) {
        resolve(data);
      },
      fail(err2) {
        console.log(err2);
        reject(err2);
      }
    });
  });
};
const getLoginFn = () => {
  const login = () => {
    return new Promise((resolve, reject) => {
      common_vendor.index.login({
        provider: "weixin",
        searchFn: true,
        onlyAuthorize: true,
        success(res) {
          resolve(res);
        },
        fail: (err2) => {
          reject(err2);
        }
      });
    });
  };
  const getUserInfo = () => {
    return new Promise((resolve, reject) => {
      common_vendor.index.getUserInfo({
        provider: "weixin",
        desc: "\u83B7\u53D6\u4F60\u7684\u6635\u79F0\u3001\u5934\u50CF\u3001\u5730\u533A\u53CA\u6027\u522B",
        lang: "zh_CN",
        timeout: 3e3,
        success(res) {
          resolve(res);
        },
        fail: (err2) => {
          reject(err2);
        }
      });
    });
  };
  return new Promise((resolve, reject) => {
    Promise.all([login(), getUserInfo()]).then(async (res) => {
      if (res[0].code) {
        try {
          const data = await api_apis_user.armorTransformation({
            authInfo: {
              code: res[0].code,
              userInfo: res[1]
            }
          });
          const { is_admins, token, user_id, user_nickname, user_profile_photo, user_info } = data.result;
          common_vendor.index.setStorageSync("kxzc-token", token);
          common_vendor.index.setStorageSync("userInfo", { is_admins, user_id, user_nickname, user_profile_photo, user_info });
          resolve(data);
        } catch (err2) {
          console.log(err2);
          reject(err2);
        }
      } else {
        console.log(err);
        reject(err);
      }
    }).catch((err2) => {
      console.log(err2);
      reject(err2);
    });
  });
};
exports.getLoginFn = getLoginFn;
exports.getSetting = getSetting;
exports.showToast = showToast;
