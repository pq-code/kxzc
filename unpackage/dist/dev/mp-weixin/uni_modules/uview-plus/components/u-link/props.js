"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.color
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.fontSize
    },
    underLine: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.underLine
    },
    href: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.href
    },
    mpTips: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.mpTips
    },
    lineColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.lineColor
    },
    text: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.link.text
    }
  }
};
exports.props = props;
