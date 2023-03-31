"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    safeAreaInsetTop: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.safeAreaInsetTop
    },
    placeholder: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.placeholder
    },
    fixed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.fixed
    },
    border: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.border
    },
    leftIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.leftIcon
    },
    leftText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.leftText
    },
    rightText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.rightText
    },
    rightIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.rightIcon
    },
    title: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.title
    },
    bgColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.bgColor
    },
    titleWidth: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.titleWidth
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.height
    },
    leftIconSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.leftIconSize
    },
    leftIconColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.leftIconColor
    },
    autoBack: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.autoBack
    },
    titleStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.navbar.titleStyle
    }
  }
};
exports.props = props;
