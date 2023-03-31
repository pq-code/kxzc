"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    modelValue: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.value
    },
    type: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.type
    },
    fixed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.fixed
    },
    disabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.disabled
    },
    disabledColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.disabledColor
    },
    clearable: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.clearable
    },
    password: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.password
    },
    maxlength: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.maxlength
    },
    placeholder: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.placeholder
    },
    placeholderClass: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.placeholderClass
    },
    placeholderStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.placeholderStyle
    },
    showWordLimit: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.showWordLimit
    },
    confirmType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.confirmType
    },
    confirmHold: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.confirmHold
    },
    holdKeyboard: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.holdKeyboard
    },
    focus: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.focus
    },
    autoBlur: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.autoBlur
    },
    disableDefaultPadding: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.disableDefaultPadding
    },
    cursor: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.cursor
    },
    cursorSpacing: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.cursorSpacing
    },
    selectionStart: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.selectionStart
    },
    selectionEnd: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.selectionEnd
    },
    adjustPosition: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.adjustPosition
    },
    inputAlign: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.inputAlign
    },
    fontSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.fontSize
    },
    color: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.color
    },
    prefixIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.prefixIcon
    },
    prefixIconStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.prefixIconStyle
    },
    suffixIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.suffixIcon
    },
    suffixIconStyle: {
      type: [String, Object],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.suffixIconStyle
    },
    border: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.border
    },
    readonly: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.readonly
    },
    shape: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.shape
    },
    formatter: {
      type: [Function, null],
      default: uni_modules_uviewPlus_libs_config_props.defprops.input.formatter
    },
    ignoreCompositionEvent: {
      type: Boolean,
      default: true
    }
  }
};
exports.props = props;
