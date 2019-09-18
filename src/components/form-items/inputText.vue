<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-09-18 08:46:30
 -->

<template>
 <el-input
    v-model.trim="model[option.name]"
    :size="option.elmentConfig.size"
    :disabled="option.elmentConfig.disabled"
    :placeholder="option.elmentConfig.placeholder"
    :readonly="option.elmentConfig.readonly"
    :style="option.elmentConfig.style"
    @blur="_blur(model[option.name])" />
</template>
<script>
  export default {
    name:"InputText",
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
    computed: {
    },
    beforeMount () {
      this._initComs()
    },
    methods: {
      _blur (node) {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.blur) {
            this.option.eventConf.blur(node, _this)
        }
      },
      _initComs () {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
            this.option.eventConf.init(_this)
        }
      }
    }
  }
</script>
