"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uInput_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
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
const _sfc_main = {
  name: "u-input",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uInput_props.props],
  data() {
    return {
      innerValue: "",
      focused: false,
      firstChange: true,
      changeFromInner: false,
      innerFormatter: (value) => value
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        this.innerValue = newVal;
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    isShowClear() {
      const { clearable, readonly, focused, innerValue } = this;
      return !!clearable && !readonly && !!focused && innerValue !== "";
    },
    inputClass() {
      let classes = [], { border, disabled, shape } = this;
      border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
      classes.push(`u-input--${shape}`);
      border === "bottom" && (classes = classes.concat([
        "u-border-bottom",
        "u-input--no-radius"
      ]));
      return classes.join(" ");
    },
    wrapperStyle() {
      const style = {};
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      if (this.border === "none") {
        style.padding = "0";
      } else {
        style.paddingTop = "6px";
        style.paddingBottom = "6px";
        style.paddingLeft = "9px";
        style.paddingRight = "9px";
      }
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    },
    inputStyle() {
      const style = {
        color: this.color,
        fontSize: common_vendor.index.$u.addUnit(this.fontSize),
        textAlign: this.inputAlign
      };
      return style;
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
  methods: {
    setFormatter(e) {
      this.innerFormatter = e;
    },
    onInput(e) {
      let { value = "" } = e.detail || {};
      const formatter = this.formatter || this.innerFormatter;
      const formatValue = formatter(value);
      this.innerValue = value;
      this.$nextTick(() => {
        this.innerValue = formatValue;
        this.valueChange();
      });
    },
    onBlur(event) {
      this.$emit("blur", event.detail.value);
      common_vendor.index.$u.sleep(50).then(() => {
        this.focused = false;
      });
      common_vendor.index.$u.formValidate(this, "blur");
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus");
    },
    onConfirm(event) {
      this.$emit("confirm", this.innerValue);
    },
    onkeyboardheightchange() {
      this.$emit("keyboardheightchange");
    },
    valueChange() {
      const value = this.innerValue;
      this.$nextTick(() => {
        this.$emit("update:modelValue", value);
        this.changeFromInner = true;
        this.$emit("change", value);
        common_vendor.index.$u.formValidate(this, "change");
      });
    },
    onClear() {
      this.innerValue = "";
      this.$nextTick(() => {
        this.valueChange();
        this.$emit("clear");
      });
    },
    clickHandler() {
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.prefixIcon || _ctx.$slots.prefix
  }, _ctx.prefixIcon || _ctx.$slots.prefix ? {
    b: common_vendor.p({
      name: _ctx.prefixIcon,
      size: "18",
      customStyle: _ctx.prefixIconStyle
    })
  } : {}, {
    c: common_vendor.s($options.inputStyle),
    d: _ctx.type,
    e: _ctx.focus,
    f: _ctx.cursor,
    g: $data.innerValue,
    h: _ctx.autoBlur,
    i: _ctx.disabled || _ctx.readonly,
    j: _ctx.maxlength,
    k: _ctx.placeholder,
    l: _ctx.placeholderStyle,
    m: _ctx.placeholderClass,
    n: _ctx.confirmType,
    o: _ctx.confirmHold,
    p: _ctx.holdKeyboard,
    q: _ctx.cursorSpacing,
    r: _ctx.adjustPosition,
    s: _ctx.selectionEnd,
    t: _ctx.selectionStart,
    v: _ctx.password || _ctx.type === "password" || void 0,
    w: _ctx.ignoreCompositionEvent,
    x: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    y: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    z: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    A: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    B: common_vendor.o((...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args)),
    C: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    D: $options.isShowClear
  }, $options.isShowClear ? {
    E: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px"
    }),
    F: common_vendor.o((...args) => $options.onClear && $options.onClear(...args))
  } : {}, {
    G: _ctx.suffixIcon || _ctx.$slots.suffix
  }, _ctx.suffixIcon || _ctx.$slots.suffix ? {
    H: common_vendor.p({
      name: _ctx.suffixIcon,
      size: "18",
      customStyle: _ctx.suffixIconStyle
    })
  } : {}, {
    I: common_vendor.n($options.inputClass),
    J: common_vendor.s($options.wrapperStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df79975b"], ["__file", "/Users/zhangpq/Desktop/Sourcetree/wx/kxzc/uni_modules/uview-plus/components/u-input/u-input.vue"]]);
wx.createComponent(Component);
