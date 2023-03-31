"use strict";
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = {
  props: {
    accept: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.accept
    },
    capture: {
      type: [String, Array],
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.capture
    },
    compressed: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.compressed
    },
    camera: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.camera
    },
    maxDuration: {
      type: Number,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.maxDuration
    },
    uploadIcon: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.uploadIcon
    },
    uploadIconColor: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.uploadIconColor
    },
    useBeforeRead: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.useBeforeRead
    },
    afterRead: {
      type: Function,
      default: null
    },
    beforeRead: {
      type: Function,
      default: null
    },
    previewFullImage: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.previewFullImage
    },
    maxCount: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.maxCount
    },
    disabled: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.disabled
    },
    imageMode: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.imageMode
    },
    name: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.name
    },
    sizeType: {
      type: Array,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.sizeType
    },
    multiple: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.multiple
    },
    deletable: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.deletable
    },
    maxSize: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.maxSize
    },
    fileList: {
      type: Array,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.fileList
    },
    uploadText: {
      type: String,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.uploadText
    },
    width: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.width
    },
    height: {
      type: [String, Number],
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.height
    },
    previewImage: {
      type: Boolean,
      default: uni_modules_uviewPlus_libs_config_props.defprops.upload.previewImage
    }
  }
};
exports.props = props;
