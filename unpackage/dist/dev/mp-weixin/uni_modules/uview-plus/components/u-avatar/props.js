"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    src: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.src
    },
    shape: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.shape
    },
    size: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.size
    },
    mode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.mode
    },
    text: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.text
    },
    bgColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.bgColor
    },
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.color
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.fontSize
    },
    icon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.icon
    },
    mpAvatar: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.mpAvatar
    },
    randomBgColor: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.randomBgColor
    },
    defaultUrl: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.defaultUrl
    },
    colorIndex: {
      type: [String, Number],
      validator(n) {
        return common_vendor.index.$u.test.range(n, [0, 19]) || n === "";
      },
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.colorIndex
    },
    name: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.avatar.name
    }
  }
};
exports.props = props;
