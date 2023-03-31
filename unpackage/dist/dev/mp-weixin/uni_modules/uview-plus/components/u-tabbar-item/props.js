"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    name: {
      type: [String, Number, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.name
    },
    icon: {
      icon: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.icon
    },
    badge: {
      type: [String, Number, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.badge
    },
    dot: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.dot
    },
    text: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.text
    },
    badgeStyle: {
      type: [Object, String],
      default: uni_modules_uviewPlus_libs_config_props.defprops.tabbarItem.badgeStyle
    }
  }
};
exports.props = props;
