"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    show: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.show
    },
    title: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.title
    },
    description: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.description
    },
    actions: {
      type: Array,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.actions
    },
    cancelText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.cancelText
    },
    closeOnClickAction: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.closeOnClickAction
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.safeAreaInsetBottom
    },
    openType: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.openType
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.closeOnClickOverlay
    },
    round: {
      type: [Boolean, String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.actionSheet.round
    }
  }
};
exports.props = props;
