"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    src: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.src
    },
    mode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.mode
    },
    width: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.width
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.height
    },
    shape: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.shape
    },
    radius: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.radius
    },
    lazyLoad: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.lazyLoad
    },
    showMenuByLongpress: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.showMenuByLongpress
    },
    loadingIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.loadingIcon
    },
    errorIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.errorIcon
    },
    showLoading: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.showLoading
    },
    showError: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.showError
    },
    fade: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.fade
    },
    webp: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.webp
    },
    duration: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.duration
    },
    bgColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.image.bgColor
    }
  }
};
exports.props = props;
