"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    gutter: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.row.gutter
    },
    justify: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.row.justify
    },
    align: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.row.align
    }
  }
};
exports.props = props;
