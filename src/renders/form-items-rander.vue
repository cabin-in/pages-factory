<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 10:16:38
 * @LastEditTime: 2020-06-19 10:51:36
 -->
<template>
  <component
    :is="option.comp"
    :option="option"
    :model="comProps"
  />
</template>
<script>
  import inputNumberComp from '../components/form-items/input-number.vue'
  import inputTextComp from '../components/form-items/input-text.vue'
  import selectComp from '../components/form-items/select.vue'
  import checkBoxComp from '../components/form-items/check-box.vue'
  import dividerComp from '../components/form-items/divider.vue'
  import tag from '../components/form-items/tag.vue'
  export default {
    name: 'FormItemsRander',
    components: {
      inputNumberComp,
      inputTextComp,
      selectComp,
      checkBoxComp,
      dividerComp,
      tag
    },
    props: {
      option: {
        type: Object,
        require: true,
        default: function () {
          return {}
        }
      },
      comProps: {
        type: Object,
        require: true,
        default: function () {
          return {}
        }
      }
    },
    data () {
      return {
      }
    },
    beforeMount () {
    },
    mounted () {

    }
  }
</script>
