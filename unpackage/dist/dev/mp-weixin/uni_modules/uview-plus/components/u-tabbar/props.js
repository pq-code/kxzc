"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    value: {
      type: [String, Number, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.value
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.safeAreaInsetBottom
    },
    border: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.border
    },
    zIndex: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.zIndex
    },
    activeColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.activeColor
    },
    inactiveColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.inactiveColor
    },
    fixed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.fixed
    },
    placeholder: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbar.placeholder
    }
  }
};
exports.props = props;
