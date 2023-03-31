"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    value: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.value
    },
    modelValue: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.value
    },
    placeholder: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.placeholder
    },
    placeholderClass: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.placeholderClass
    },
    placeholderStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.placeholderStyle
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.height
    },
    confirmType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.confirmType
    },
    disabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.disabled
    },
    count: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.count
    },
    focus: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.focus
    },
    autoHeight: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.autoHeight
    },
    fixed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.fixed
    },
    cursorSpacing: {
      type: Number,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.cursorSpacing
    },
    cursor: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.cursor
    },
    showConfirmBar: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.showConfirmBar
    },
    selectionStart: {
      type: Number,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.selectionStart
    },
    selectionEnd: {
      type: Number,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.selectionEnd
    },
    adjustPosition: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.adjustPosition
    },
    disableDefaultPadding: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.disableDefaultPadding
    },
    holdKeyboard: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.holdKeyboard
    },
    maxlength: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.maxlength
    },
    border: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.border
    },
    formatter: {
      type: [Function, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.textarea.formatter
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }
};
exports.props = props;
