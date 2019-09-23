module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/renders/formItemsRander.vue?vue&type=template&id=2dfaf05a&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(_vm.option.comp, {
    tag: "component",
    attrs: { option: _vm.option, model: _vm.model }
  })
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/renders/formItemsRander.vue?vue&type=template&id=2dfaf05a&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/inputNumber.vue?vue&type=template&id=07f8bbab&
var inputNumbervue_type_template_id_07f8bbab_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("el-input", {
    style: _vm.option.elmentConfig.style,
    attrs: {
      size: _vm.option.elmentConfig.size,
      disabled: _vm.option.elmentConfig.disabled,
      placeholder: _vm.option.elmentConfig.placeholder,
      readonly: _vm.option.elmentConfig.readonly
    },
    on: {
      blur: function($event) {
        return _vm._blur(_vm.model[_vm.option.name])
      }
    },
    nativeOn: {
      mousewheel: function($event) {
        return _vm._preventmousewheel($event)
      }
    },
    model: {
      value: _vm.model[_vm.option.name],
      callback: function($$v) {
        _vm.$set(_vm.model, _vm.option.name, _vm._n($$v))
      },
      expression: "model[option.name]"
    }
  })
}
var inputNumbervue_type_template_id_07f8bbab_staticRenderFns = []
inputNumbervue_type_template_id_07f8bbab_render._withStripped = true


// CONCATENATED MODULE: ./src/components/form-items/inputNumber.vue?vue&type=template&id=07f8bbab&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/inputNumber.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputNumbervue_type_script_lang_js_ = ({
  name: "InputNumber",
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      require: false,
      default: function _default() {
        return {};
      }
    }
  },
  beforeMount: function beforeMount() {
    this._initComs();
  },
  methods: {
    _preventmousewheel: function _preventmousewheel(event) {
      event.preventDefault();
    },
    _blur: function _blur(node) {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn) {
        if (this.option.eventConf.blur !== undefined) {
          this.option.eventConf.blur(node, _this);
        }
      }
    },
    _initComs: function _initComs() {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn) {
        if (this.option.eventConf.init !== undefined) {
          this.option.eventConf.init(_this);
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/form-items/inputNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_items_inputNumbervue_type_script_lang_js_ = (inputNumbervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/form-items/inputNumber.vue





/* normalize component */

var component = normalizeComponent(
  form_items_inputNumbervue_type_script_lang_js_,
  inputNumbervue_type_template_id_07f8bbab_render,
  inputNumbervue_type_template_id_07f8bbab_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/form-items/inputNumber.vue"
/* harmony default export */ var inputNumber = (component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/inputText.vue?vue&type=template&id=4d16c3e2&
var inputTextvue_type_template_id_4d16c3e2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("el-input", {
    style: _vm.option.elmentConfig.style,
    attrs: {
      size: _vm.option.elmentConfig.size,
      disabled: _vm.option.elmentConfig.disabled,
      placeholder: _vm.option.elmentConfig.placeholder,
      readonly: _vm.option.elmentConfig.readonly
    },
    on: {
      blur: function($event) {
        return _vm._blur(_vm.model[_vm.option.name])
      }
    },
    model: {
      value: _vm.model[_vm.option.name],
      callback: function($$v) {
        _vm.$set(
          _vm.model,
          _vm.option.name,
          typeof $$v === "string" ? $$v.trim() : $$v
        )
      },
      expression: "model[option.name]"
    }
  })
}
var inputTextvue_type_template_id_4d16c3e2_staticRenderFns = []
inputTextvue_type_template_id_4d16c3e2_render._withStripped = true


// CONCATENATED MODULE: ./src/components/form-items/inputText.vue?vue&type=template&id=4d16c3e2&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/inputText.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputTextvue_type_script_lang_js_ = ({
  name: "InputText",
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      require: false,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  beforeMount: function beforeMount() {
    this._initComs();
  },
  methods: {
    _blur: function _blur(node) {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.blur) {
        this.option.eventConf.blur(node, _this);
      }
    },
    _initComs: function _initComs() {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
        this.option.eventConf.init(_this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/form-items/inputText.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_items_inputTextvue_type_script_lang_js_ = (inputTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form-items/inputText.vue





/* normalize component */

var inputText_component = normalizeComponent(
  form_items_inputTextvue_type_script_lang_js_,
  inputTextvue_type_template_id_4d16c3e2_render,
  inputTextvue_type_template_id_4d16c3e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var inputText_api; }
inputText_component.options.__file = "src/components/form-items/inputText.vue"
/* harmony default export */ var inputText = (inputText_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/select.vue?vue&type=template&id=41a942b4&
var selectvue_type_template_id_41a942b4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-select",
    {
      attrs: {
        size: _vm.option.elmentConfig.size,
        placeholder: _vm.option.elmentConfig.placeholder,
        disabled: _vm.option.elmentConfig.disabled,
        clearable: _vm.option.elmentConfig.clearable
      },
      on: { change: _vm._change },
      model: {
        value: _vm.model[_vm.option.name],
        callback: function($$v) {
          _vm.$set(_vm.model, _vm.option.name, $$v)
        },
        expression: "model[option.name]"
      }
    },
    _vm._l(_vm.option.elmentConfig.data, function(item) {
      return _c("el-option", {
        key: item.value,
        attrs: { label: item.label, value: item.value }
      })
    }),
    1
  )
}
var selectvue_type_template_id_41a942b4_staticRenderFns = []
selectvue_type_template_id_41a942b4_render._withStripped = true


// CONCATENATED MODULE: ./src/components/form-items/select.vue?vue&type=template&id=41a942b4&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: "Select",
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      require: false,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  beforeMount: function beforeMount() {
    this._initComs();
  },
  methods: {
    _change: function _change(node) {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.change) {
        this.option.eventConf.change(node, _this);
      }
    },
    _initComs: function _initComs() {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
        this.option.eventConf.init(_this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/form-items/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_items_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form-items/select.vue





/* normalize component */

var select_component = normalizeComponent(
  form_items_selectvue_type_script_lang_js_,
  selectvue_type_template_id_41a942b4_render,
  selectvue_type_template_id_41a942b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "src/components/form-items/select.vue"
/* harmony default export */ var form_items_select = (select_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/checkBox.vue?vue&type=template&id=42653ddb&
var checkBoxvue_type_template_id_42653ddb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-checkbox",
    {
      attrs: { disabled: _vm.option.elmentConfig.disabled },
      on: { change: _vm._change },
      model: {
        value: _vm.model[_vm.option.name],
        callback: function($$v) {
          _vm.$set(_vm.model, _vm.option.name, $$v)
        },
        expression: "model[option.name]"
      }
    },
    [_vm._v("\n      " + _vm._s(_vm.option.elmentConfig.label) + "\n")]
  )
}
var checkBoxvue_type_template_id_42653ddb_staticRenderFns = []
checkBoxvue_type_template_id_42653ddb_render._withStripped = true


// CONCATENATED MODULE: ./src/components/form-items/checkBox.vue?vue&type=template&id=42653ddb&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/checkBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkBoxvue_type_script_lang_js_ = ({
  name: "CheckBox",
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      require: false,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  beforeMount: function beforeMount() {
    this._initComs();
  },
  methods: {
    _change: function _change(node) {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.change) {
        this.option.eventConf.change(node, _this);
      }
    },
    _initComs: function _initComs() {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
        this.option.eventConf.init(_this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/form-items/checkBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_items_checkBoxvue_type_script_lang_js_ = (checkBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form-items/checkBox.vue





/* normalize component */

var checkBox_component = normalizeComponent(
  form_items_checkBoxvue_type_script_lang_js_,
  checkBoxvue_type_template_id_42653ddb_render,
  checkBoxvue_type_template_id_42653ddb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var checkBox_api; }
checkBox_component.options.__file = "src/components/form-items/checkBox.vue"
/* harmony default export */ var checkBox = (checkBox_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/divider.vue?vue&type=template&id=d74b07de&
var dividervue_type_template_id_d74b07de_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-divider",
    {
      attrs: {
        "content-position": _vm.option.elmentConfig.contentPosition,
        direction: _vm.option.elmentConfig.direction
      },
      on: { change: _vm._change }
    },
    [_vm._v("\n   " + _vm._s(_vm.option.elmentConfig.title) + "\n ")]
  )
}
var dividervue_type_template_id_d74b07de_staticRenderFns = []
dividervue_type_template_id_d74b07de_render._withStripped = true


// CONCATENATED MODULE: ./src/components/form-items/divider.vue?vue&type=template&id=d74b07de&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/components/form-items/divider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dividervue_type_script_lang_js_ = ({
  name: "Divider",
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  beforeMount: function beforeMount() {
    this._initComs();
  },
  methods: {
    _initComs: function _initComs() {
      var _this = this;

      if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
        this.option.eventConf.init(_this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/form-items/divider.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_items_dividervue_type_script_lang_js_ = (dividervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/form-items/divider.vue





/* normalize component */

var divider_component = normalizeComponent(
  form_items_dividervue_type_script_lang_js_,
  dividervue_type_template_id_d74b07de_render,
  dividervue_type_template_id_d74b07de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var divider_api; }
divider_component.options.__file = "src/components/form-items/divider.vue"
/* harmony default export */ var divider = (divider_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/renders/formItemsRander.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var formItemsRandervue_type_script_lang_js_ = ({
  name: 'FormItemsRander',
  components: {
    inputNumberComp: inputNumber,
    inputTextComp: inputText,
    selectComp: form_items_select,
    checkBoxComp: checkBox,
    dividerComp: divider
  },
  props: {
    option: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    },
    model: {
      type: Object,
      require: true,
      default: function _default() {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./src/renders/formItemsRander.vue?vue&type=script&lang=js&
 /* harmony default export */ var renders_formItemsRandervue_type_script_lang_js_ = (formItemsRandervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/renders/formItemsRander.vue





/* normalize component */

var formItemsRander_component = normalizeComponent(
  renders_formItemsRandervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var formItemsRander_api; }
formItemsRander_component.options.__file = "src/renders/formItemsRander.vue"
/* harmony default export */ var formItemsRander = (formItemsRander_component.exports);
// CONCATENATED MODULE: ./src/components/layout/formLayout.jsx

/* harmony default export */ var formLayout = ({
  name: "FormLayout",
  components: {
    formItemsRander: formItemsRander
  },
  props: {
    formOption: {
      type: Object,
      require: true
    },
    model: {
      type: Object,
      require: true
    }
  },
  methods: {
    renderItem: function renderItem(formConfig) {
      var _this = this;

      var h = this.$createElement;
      return formConfig.map(function (formData, index) {
        if (formData.label) {
          return h("el-col", {
            attrs: {
              span: formData.position.spanNum
            }
          }, [h("el-form-item", {
            attrs: {
              label: formData.label,
              prop: formData.name,
              rules: formData.rules
            },
            key: index
          }, [h("form-items-rander", {
            ref: "formItemsRander",
            attrs: {
              option: formData,
              model: _this.model
            }
          })])]);
        } else {
          return h("el-col", {
            attrs: {
              span: formData.position.spanNum
            }
          }, [h("form-items-rander", {
            ref: "formItemsRander",
            attrs: {
              option: formData,
              model: _this.model
            }
          })]);
        }
      });
    }
  },
  mounted: function mounted() {
    console.log(this.formOption);
  },
  render: function render(h) {
    var _this2 = this;

    var pageConf = this.formOption.pageConf;

    if (pageConf && pageConf.tab) {
      // tabpanel形式
      var tabConfigs = this.formOption.tabConfigs;
      return h("el-form", {
        attrs: {
          "label-width": "100px",
          model: this.model
        }
      }, [h("el-tabs", {
        attrs: {
          type: pageConf.type,
          "tab-position": pageConf.tabPosition
        }
      }, [tabConfigs.map(function (item, indexs) {
        return h("el-tab-pane", {
          attrs: {
            label: item.tabpanel.title,
            disabled: item.tabpanel.disabled
          },
          style: pageConf.style
        }, [// 循环开始
        _this2.renderItem(item.formConfig)]);
      })])]);
    } else {
      // 经典的form表单形式
      var formConfig = this.formOption.formConfig;
      return h("el-form", {
        attrs: {
          "label-width": "100px",
          model: this.model
        }
      }, [h("div", {
        style: this.formOption.pageConf.style
      }, [this.renderItem(formConfig)])]);
    }
  }
});
// CONCATENATED MODULE: ./src/index.js
/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-16 19:27:33
 * @LastEditTime: 2019-09-16 19:27:33
 */


var components = [formItemsRander, formLayout];

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  install: install,
  formItemsRander: formItemsRander,
  formLayout: formLayout
});

/***/ })
/******/ ])["default"];