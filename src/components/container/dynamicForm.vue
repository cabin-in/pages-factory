<template>
    <div class="form">
        <el-form :model="formModel.order" ref="dynamicFormConf" label-width="100px" >
            <form-layout  ref="formLayout"
                :formConf="dynamicFormConf" 
                :model="formModel.order"
                @change="_change"
                @blur="_blur"
                @initComs="_initComs"
            />
            <!-- <el-form-item>
                <el-checkbox v-model="isClose" v-if="afterAddClose">保存后关闭</el-checkbox>
                <div style="text-align:right;"  > 
                        <span class="file"
                            v-if="fileBtn">
                            <i :class="functionConf.formBtn.file.icon"></i>{{functionConf.formBtn.file.text}}
                            <input type="file"  
                                    @change="_uploadClick"/>
                        </span>
                        <el-button v-for="(item,index) in functionConf.formBtn"  :key="index"
                                    v-if="item.type!=='file'"
                                    :type="item.type" 
                                    :name="item.name" 
                                    :loading="item.loading"
                                    :size="item.size" 
                                    :disabled="item.disabled"  
                                    v-show="item.isShow"
                                    @click="_functionClick(item)" >
                                <i :class="item.icon"></i>{{item.text}}
                        </el-button>  
                </div>
            </el-form-item> -->
    </el-form>
    </div>
</template>
<script>
import formLayout from '../layout/formLayout.jsx'
export default {
    components:{
        formLayout
    },
    props:{
        
    }
}
</script>
<style lang="postcss">

</style>