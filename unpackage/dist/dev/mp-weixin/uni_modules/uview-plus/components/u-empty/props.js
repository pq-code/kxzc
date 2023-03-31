"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    icon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.icon
    },
    text: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.text
    },
    textColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.textColor
    },
    textSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.textSize
    },
    iconColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.iconColor
    },
    iconSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.iconSize
    },
    mode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.mode
    },
    width: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.width
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.height
    },
    show: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.show
    },
    marginTop: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.empty.marginTop
    }
  }
};
exports.props = props;
