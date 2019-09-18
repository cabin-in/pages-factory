<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-09-18 10:28:07
 -->

<template>
  <el-input
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
            this.option.eventConf.blur(node, this.option, this.model, _this)
            // 是否触发合计计算
            if (this.option.eventConf.isSum) {
              this.$emit('sumCount')
            }
          }
        }
      },
      _initComs () {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn) {
          if (this.option.eventConf.init !== undefined) {
            this.option.eventConf.init(this.option, this.model, _this)
          }
        }
      }
    }
  }
</script>
