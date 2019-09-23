<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 14:06:56
 * @LastEditTime: 2019-09-23 12:29:37
 -->

<template>
  <el-checkbox
    v-model="model[option.name]"
    :disabled="option.elmentConfig.disabled"
    @change="_change">
        {{ option.elmentConfig.label }}
  </el-checkbox>
</template>
<script>
  export default {
    name:"CXXXX",
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
      _change (node) {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.change) {
            this.option.eventConf.change(node, _this)
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
