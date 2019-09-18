<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 14:06:56
 * @LastEditTime: 2019-09-18 14:36:40
 -->

<template>
 <el-select
    v-model="model[option.name]"
    :size="option.elmentConfig.size"
    :placeholder="option.elmentConfig.placeholder"
    :disabled="option.elmentConfig.disabled"
    :clearable="option.elmentConfig.clearable"
    @change="_change">
    <el-option
      v-for="item in option.elmentConfig.data"
      :key="item.value"
      :label="item.label"
      :value="item.value" />
  </el-select>
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
