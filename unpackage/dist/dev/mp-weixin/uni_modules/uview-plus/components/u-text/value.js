"use strict";
const common_vendor = require("../../../../common/vendor.js");
const value = {
  computed: {
    value() {
      const {
        text,
        mode,
        format,
        href
      } = this;
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(text)) {
          common_vendor.index.$u.error("\u91D1\u989D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u91D1\u989D\u683C\u5F0F");
        }
        if (common_vendor.index.$u.test.func(format)) {
          return format(text);
        }
        return common_vendor.index.$u.priceFormat(text, 2);
      }
      if (mode === "date") {
        !common_vendor.index.$u.test.date(text) && common_vendor.index.$u.error("\u65E5\u671F\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u65E5\u671F\u6216\u65F6\u95F4\u6233\u683C\u5F0F");
        if (common_vendor.index.$u.test.func(format)) {
          return format(text);
        }
        if (format) {
          return common_vendor.index.$u.timeFormat(text, format);
        }
        return common_vendor.index.$u.timeFormat(text, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (common_vendor.index.$u.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return `${text.substr(0, 3)}****${text.substr(7)}`;
        }
        return text;
      }
      if (mode === "name") {
        !(typeof text === "string") && common_vendor.index.$u.error("\u59D3\u540D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F");
        if (common_vendor.index.$u.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return this.formatName(text);
        }
        return text;
      }
      if (mode === "link") {
        !common_vendor.index.$u.test.url(href) && common_vendor.index.$u.error("\u8D85\u94FE\u63A5\u6A21\u5F0F\u4E0B\uFF0Chref\u53C2\u6570\u9700\u8981\u4E3AURL\u683C\u5F0F");
        return text;
      }
      return text;
    }
  },
  methods: {
    formatName(name) {
      let value2 = "";
      if (name.length === 2) {
        value2 = name.substr(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value2 = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value2 = name;
      }
      return value2;
    }
  }
};
exports.value = value;
