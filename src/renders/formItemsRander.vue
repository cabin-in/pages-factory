<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 10:16:38
 * @LastEditTime: 2019-09-18 14:46:55
 -->
<template>
  <component
    :is="comp"
    :option="option"
    :model="model"
  />
</template>
<script>
import inputNumberComp from '../components/form-items/inputNumber.vue'
import inputTextComp from '../components/form-items/inputText.vue'
import selectComp from '../components/form-items/select.vue'
export default {
  name: 'FormItemsRander',
  components: {
    inputNumberComp,
    inputTextComp,
    selectComp
  } ,
  props: {
    comp: {
      type: String,
      require: true,
      default: 'inputTextComp'
    },
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
  methods: {
  },
  mounted(){
  }
}
</script>