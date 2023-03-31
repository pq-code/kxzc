"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    loadingText: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.loadingText
    },
    image: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.image
    },
    loadingMode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.loadingMode
    },
    loading: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.loading
    },
    bgColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.bgColor
    },
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.color
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.fontSize
    },
    iconSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.fontSize
    },
    loadingColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.loadingPage.loadingColor
    }
  }
};
exports.props = props;
