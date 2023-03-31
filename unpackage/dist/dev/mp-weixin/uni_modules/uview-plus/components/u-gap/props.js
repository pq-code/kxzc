"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    bgColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.gap.bgColor
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.gap.height
    },
    marginTop: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.gap.marginTop
    },
    marginBottom: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.gap.marginBottom
    }
  }
};
exports.props = props;
