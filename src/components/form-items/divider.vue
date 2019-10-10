<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 14:06:56
 * @LastEditTime: 2019-09-25 16:07:03
 -->

<template>
 <el-divider
    :content-position="option.elmentConfig.contentPosition"
    :direction="option.elmentConfig.direction"
    >
    {{option.elmentConfig.title}}
  </el-divider>
</template>
<script>
  export default {
    name:"Divider",
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
