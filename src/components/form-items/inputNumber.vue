<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-10-10 14:51:47
 -->

<template>
  <el-input
    type="number"
    v-model.number="model[option.name]"
    :size="option.elmentConfig.size"
    :disabled="option.elmentConfig.disabled"
    :placeholder="option.elmentConfig.placeholder"
    :readonly="option.elmentConfig.readonly"
    :style="option.elmentConfig.style"
    @blur="_blur(model[option.name])"
    @mousewheel.native="_preventmousewheel" />
</template>
<script>
  export default {
    name:"InputNumber",
    props: {
      option: {
        type: Object,
        require: true,
        default: function () {
          return {}
        }
      },
      model: {
        type: Object,
        require: false,
        default: function () {
          return {}
        }
      }
    },
    beforeMount () {
      this._initComs()
    },
    methods: {
      _preventmousewheel (event) {
        event.preventDefault()
      },
      _blur (node) {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn) {
          if (this.option.eventConf.blur !== undefined) {
            this.option.eventConf.blur(node,  _this)
          }
        }
      },
      _initComs () {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn) {
          if (this.option.eventConf.init !== undefined) {
            this.option.eventConf.init(_this)
          }
        }
      }
    }
  }
</script>
