"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uForm_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_util_asyncValidator = require("../../libs/util/async-validator.js");
require("../../libs/config/props.js");
require("../../libs/config/config.js");
require("../../libs/config/props/actionSheet.js");
require("../../libs/config/props/album.js");
require("../../libs/config/props/alert.js");
require("../../libs/config/props/avatar.js");
require("../../libs/config/props/avatarGroup.js");
require("../../libs/config/props/backtop.js");
require("../../libs/config/props/badge.js");
require("../../libs/config/props/button.js");
require("../../libs/config/props/calendar.js");
require("../../libs/config/props/carKeyboard.js");
require("../../libs/config/props/cell.js");
require("../../libs/config/props/cellGroup.js");
require("../../libs/config/props/checkbox.js");
require("../../libs/config/props/checkboxGroup.js");
require("../../libs/config/props/circleProgress.js");
require("../../libs/config/props/code.js");
require("../../libs/config/props/codeInput.js");
require("../../libs/config/props/col.js");
require("../../libs/config/props/collapse.js");
require("../../libs/config/props/collapseItem.js");
require("../../libs/config/props/columnNotice.js");
require("../../libs/config/props/countDown.js");
require("../../libs/config/props/countTo.js");
require("../../libs/config/props/datetimePicker.js");
require("../../libs/config/props/divider.js");
require("../../libs/config/props/empty.js");
require("../../libs/config/props/form.js");
require("../../libs/config/props/formItem.js");
require("../../libs/config/props/gap.js");
require("../../libs/config/props/grid.js");
require("../../libs/config/props/gridItem.js");
require("../../libs/config/props/icon.js");
require("../../libs/config/props/image.js");
require("../../libs/config/props/indexAnchor.js");
require("../../libs/config/props/indexList.js");
require("../../libs/config/props/input.js");
require("../../libs/config/props/keyboard.js");
require("../../libs/config/props/line.js");
require("../../libs/config/props/lineProgress.js");
require("../../libs/config/props/link.js");
require("../../libs/config/props/list.js");
require("../../libs/config/props/listItem.js");
require("../../libs/config/props/loadingIcon.js");
require("../../libs/config/props/loadingPage.js");
require("../../libs/config/props/loadmore.js");
require("../../libs/config/props/modal.js");
require("../../libs/config/props/navbar.js");
require("../../libs/config/color.js");
require("../../libs/config/props/noNetwork.js");
require("../../libs/config/props/noticeBar.js");
require("../../libs/config/props/notify.js");
require("../../libs/config/props/numberBox.js");
require("../../libs/config/props/numberKeyboard.js");
require("../../libs/config/props/overlay.js");
require("../../libs/config/props/parse.js");
require("../../libs/config/props/picker.js");
require("../../libs/config/props/popup.js");
require("../../libs/config/props/radio.js");
require("../../libs/config/props/radioGroup.js");
require("../../libs/config/props/rate.js");
require("../../libs/config/props/readMore.js");
require("../../libs/config/props/row.js");
require("../../libs/config/props/rowNotice.js");
require("../../libs/config/props/scrollList.js");
require("../../libs/config/props/search.js");
require("../../libs/config/props/section.js");
require("../../libs/config/props/skeleton.js");
require("../../libs/config/props/slider.js");
require("../../libs/config/props/statusBar.js");
require("../../libs/config/props/steps.js");
require("../../libs/config/props/stepsItem.js");
require("../../libs/config/props/sticky.js");
require("../../libs/config/props/subsection.js");
require("../../libs/config/props/swipeAction.js");
require("../../libs/config/props/swipeActionItem.js");
require("../../libs/config/props/swiper.js");
require("../../libs/config/props/swipterIndicator.js");
require("../../libs/config/props/switch.js");
require("../../libs/config/props/tabbar.js");
require("../../libs/config/props/tabbarItem.js");
require("../../libs/config/props/tabs.js");
require("../../libs/config/props/tag.js");
require("../../libs/config/props/text.js");
require("../../libs/config/props/textarea.js");
require("../../libs/config/props/toast.js");
require("../../libs/config/props/toolbar.js");
require("../../libs/config/props/tooltip.js");
require("../../libs/config/props/transition.js");
require("../../libs/config/props/upload.js");
uni_modules_uviewPlus_libs_util_asyncValidator.Schema.warning = function() {
};
const _sfc_main = {
  name: "u-form",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uForm_props.props],
  provide() {
    return {
      uForm: this
    };
  },
  data() {
    return {
      formRules: {},
      validator: {},
      originalModel: null
    };
  },
  watch: {
    rules: {
      immediate: true,
      handler(n) {
        this.setRules(n);
      }
    },
    propsChange(n) {
      var _a;
      if ((_a = this.children) == null ? void 0 : _a.length) {
        this.children.map((child) => {
          typeof child.updateParentData == "function" && child.updateParentData();
        });
      }
    },
    model: {
      immediate: true,
      handler(n) {
        if (!this.originalModel) {
          this.originalModel = common_vendor.index.$u.deepClone(n);
        }
      }
    }
  },
  computed: {
    propsChange() {
      return [
        this.errorType,
        this.borderBottom,
        this.labelPosition,
        this.labelWidth,
        this.labelAlign,
        this.labelStyle
      ];
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    setRules(rules) {
      if (Object.keys(rules).length === 0)
        return;
      if (Object.keys(this.model).length === 0) {
        common_vendor.index.$u.error("\u8BBE\u7F6Erules\uFF0Cmodel\u5FC5\u987B\u8BBE\u7F6E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
        return;
      }
      this.formRules = rules;
      this.validator = new uni_modules_uviewPlus_libs_util_asyncValidator.Schema(rules);
    },
    resetFields() {
      this.resetModel();
    },
    resetModel(obj) {
      this.children.map((child) => {
        const prop = child == null ? void 0 : child.prop;
        const value = common_vendor.index.$u.getProperty(this.originalModel, prop);
        common_vendor.index.$u.setProperty(this.model, prop, value);
      });
    },
    clearValidate(props) {
      props = [].concat(props);
      this.children.map((child) => {
        if (props[0] === void 0 || props.includes(child.prop)) {
          child.message = null;
        }
      });
    },
    async validateField(value, callback, event = null) {
      this.$nextTick(() => {
        const errorsRes = [];
        value = [].concat(value);
        this.children.map((child) => {
          const childErrors = [];
          if (value.includes(child.prop)) {
            const propertyVal = common_vendor.index.$u.getProperty(
              this.model,
              child.prop
            );
            const propertyChain = child.prop.split(".");
            const propertyName = propertyChain[propertyChain.length - 1];
            const rule = this.formRules[child.prop];
            if (!rule)
              return;
            const rules = [].concat(rule);
            for (let i = 0; i < rules.length; i++) {
              const ruleItem = rules[i];
              const trigger = [].concat(ruleItem == null ? void 0 : ruleItem.trigger);
              if (event && !trigger.includes(event))
                continue;
              const validator = new uni_modules_uviewPlus_libs_util_asyncValidator.Schema({
                [propertyName]: ruleItem
              });
              validator.validate(
                {
                  [propertyName]: propertyVal
                },
                (errors, fields) => {
                  var _a, _b;
                  if (common_vendor.index.$u.test.array(errors)) {
                    errorsRes.push(...errors);
                    childErrors.push(...errors);
                  }
                  child.message = (_b = (_a = childErrors[0]) == null ? void 0 : _a.message) != null ? _b : null;
                }
              );
            }
          }
        });
        typeof callback === "function" && callback(errorsRes);
      });
    },
    validate(callback) {
      if (Object.keys(this.formRules).length === 0) {
        common_vendor.index.$u.error("\u672A\u8BBE\u7F6Erules\uFF0C\u8BF7\u770B\u6587\u6863\u8BF4\u660E\uFF01\u5982\u679C\u5DF2\u7ECF\u8BBE\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u3002");
        return;
      }
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const formItemProps = this.children.map(
            (item) => item.prop
          );
          this.validateField(formItemProps, (errors) => {
            if (errors.length) {
              this.errorType === "toast" && common_vendor.index.$u.toast(errors[0].message);
              reject(errors);
            } else {
              resolve(true);
            }
          });
        });
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhangpq/Desktop/Sourcetree/wx/kxzc/uni_modules/uview-plus/components/u-form/u-form.vue"]]);
wx.createComponent(Component);
