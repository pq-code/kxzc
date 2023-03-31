"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    model: {
      type: Object,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.model
    },
    rules: {
      type: [Object, Function, Array],
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.rules
    },
    errorType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.errorType
    },
    borderBottom: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.borderBottom
    },
    labelPosition: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.labelPosition
    },
    labelWidth: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.labelWidth
    },
    labelAlign: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.labelAlign
    },
    labelStyle: {
      type: Object,
      default: uni_modules_uviewPlus_libs_config_props.defprops.form.labelStyle
    }
  }
};
exports.props = props;
