<template>
  <div class="form">
    <el-form ref="dynamicFormConf" :model="formModel.order" label-width="100px">
      <form-layout ref="formLayout"
        :form-conf="dynamicFormConf"
        :model="formModel.order"
        @change="_change"
        @blur="_blur"
        @initComs="_initComs"
      />
    </el-form>
  </div>
</template>
<script>
  import formLayout from '../layout/formLayout.jsx'
  export default {
    components: {
      formLayout
    },
    props: {

    }
  }
</script>
<style lang="postcss">

</style>
