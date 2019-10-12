<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-10-12 11:14:13
 -->

<template>
  <el-input-number
    style="width:100%"
    v-model.number="model[option.name]"
    :size="option.elmentConfig.size"
    :disabled="option.elmentConfig.disabled"
    :placeholder="option.elmentConfig.placeholder"
    :min="option.elmentConfig.min"
    :max="option.elmentConfig.max"
    :step="option.elmentConfig.step"
    :precision="option.elmentConfig.precision"
    :controls="false"
    @blur="_blur(model[option.name])"/>
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
