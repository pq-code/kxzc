"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.color
    },
    length: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.length
    },
    direction: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.direction
    },
    hairline: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.hairline
    },
    margin: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.margin
    },
    dashed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.line.dashed
    }
  }
};
exports.props = props;
