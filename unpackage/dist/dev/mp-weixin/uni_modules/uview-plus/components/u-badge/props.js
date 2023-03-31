"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    isDot: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.isDot
    },
    value: {
      type: [Number, String],
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.value
    },
    modelValue: {
      type: [Number, String],
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.modelValue
    },
    show: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.show
    },
    max: {
      type: [Number, String],
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.max
    },
    type: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.type
    },
    showZero: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.showZero
    },
    bgColor: {
      type: [String, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.bgColor
    },
    color: {
      type: [String, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.color
    },
    shape: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.shape
    },
    numberType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.numberType
    },
    offset: {
      type: Array,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.offset
    },
    inverted: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.inverted
    },
    absolute: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.badge.absolute
    }
  }
};
exports.props = props;
