"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    span: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.col.span
    },
    offset: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.col.offset
    },
    justify: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.col.justify
    },
    align: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.col.align
    },
    textAlign: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.col.textAlign
    }
  }
};
exports.props = props;
