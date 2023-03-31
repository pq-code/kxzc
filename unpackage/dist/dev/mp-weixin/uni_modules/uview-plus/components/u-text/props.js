"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    type: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.type
    },
    show: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.show
    },
    text: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.text
    },
    prefixIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.prefixIcon
    },
    suffixIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.suffixIcon
    },
    mode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.mode
    },
    href: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.href
    },
    format: {
      type: [String, Function],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.format
    },
    call: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.call
    },
    openType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.openType
    },
    bold: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.bold
    },
    block: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.block
    },
    lines: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.lines
    },
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.color
    },
    size: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.size
    },
    iconStyle: {
      type: [Object, String],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.iconStyle
    },
    decoration: {
      tepe: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.decoration
    },
    margin: {
      type: [Object, String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.margin
    },
    lineHeight: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.lineHeight
    },
    align: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.align
    },
    wordWrap: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.text.wordWrap
    }
  }
};
exports.props = props;
