<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2020-06-19 10:42:08
 * @LastEditTime: 2020-06-19 10:51:28
-->
<template>
  <el-tag
    :size="option.elmentConfig.size"
    :type="option.elmentConfig.type"
    :hit="option.elmentConfig.hit"
    :closable="option.elmentConfig.closable"
    :effect="option.elmentConfig.effect"
    :style="option.elmentConfig.style"
    v-text="option.elmentConfig.text" />
</template>
<script>
  export default {
    name: 'Tag',
    props: {
      option: {
        type: Object,
        require: true,
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
      _initComs () {
        const _this = this
        if (this.option.eventConf && this.option.eventConf.isOn && this.option.eventConf.init) {
          this.option.eventConf.init(_this)
        }
      }
    }
  }
</script>
