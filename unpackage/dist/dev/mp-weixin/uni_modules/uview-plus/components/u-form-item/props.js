"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    label: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.label
    },
    prop: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.prop
    },
    borderBottom: {
      type: [String, Boolean],
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.borderBottom
    },
    labelWidth: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.labelWidth
    },
    rightIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.rightIcon
    },
    leftIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.leftIcon
    },
    required: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.required
    },
    leftIconStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.formItem.leftIconStyle
    }
  }
};
exports.props = props;
