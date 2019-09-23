<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 10:16:38
 * @LastEditTime: 2019-09-23 15:49:22
 -->
<template>
  <component
    :is="option.comp"
    :option="option"
    :model="model"
  />
</template>
<script>
import inputNumberComp from '../components/form-items/inputNumber.vue'
import inputTextComp from '../components/form-items/inputText.vue'
import selectComp from '../components/form-items/select.vue'
import checkBoxComp from '../components/form-items/checkBox.vue'
import dividerComp from '../components/form-items/divider.vue'
export default {
  name: 'FormItemsRander',
  components: {
    inputNumberComp,
    inputTextComp,
    selectComp,
    checkBoxComp,
    dividerComp
  } ,
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
      require: true,
      default: function () {
        return {}
      }
    }
  },
}
</script>