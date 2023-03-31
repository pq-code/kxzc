"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const api_error_errTips = require("../error/errTips.js");
let baseURL = "http://localhost:4005/";
let token = common_vendor.index.getStorageSync("kxzc-token");
const wxService = (urls, config, method) => {
  let url = baseURL + urls;
  let data = {
    provider: "weixin",
    ...config
  };
  let header;
  if (method == "POST") {
    header = {
      "content-type": "application/x-www-form-urlencoded"
    };
  } else {
    header = {
      "content-type": "application/json"
    };
  }
  if (token) {
    header.Authorization = token;
  }
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method,
      header: Object.assign({}, header),
      data,
      dataType: "json",
      timeout: 1e3 * 60 * 1,
      success: (data2) => {
        const res = data2.data;
        if (res.code == 0) {
          resolve(res);
        } else {
          utils_index.showToast(api_error_errTips.errTips[res.code] || res.message || "\u672A\u77E5\u9519\u8BEF");
        }
      },
      fail: (err) => {
        let message = "";
        switch (err) {
          case 401:
            message = "token \u5931\u6548\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55";
            break;
          case 403:
            message = "\u62D2\u7EDD\u8BBF\u95EE";
            break;
          case 404:
            message = "\u8BF7\u6C42\u5730\u5740\u9519\u8BEF";
            break;
          case 500:
            message = "\u670D\u52A1\u5668\u6545\u969C";
            break;
          default:
            message = "\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C";
        }
        utils_index.showToast(message);
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
};
exports.wxService = wxService;
