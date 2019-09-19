import formItemsRander from '../../renders/formItemsRander.vue'
export default{
    name:'FormLayout',
    components:{
      formItemsRander
    },
    props: {
        formOption:{
            type: Object,
            require: true,
        },
        model:{ 
            type: Object,
            require: true,
        }
    },
    methods: {
        renderItem(formConfig){
            return formConfig.map((formData,index)=>{
                 if(formData.label){
                    return  <el-col span={formData.position.spanNum} >
                            <el-form-item
                                label={formData.label}
                                key={index}
                                prop={formData.name}
                                rules={formData.rules}
                            >
                                <form-items-rander  
                                    ref="formItemsRander"
                                    option={formData}
                                    model={this.model}
                                />
                           </el-form-item>
                        </el-col>
                 }else {
                    return  <el-col span={formData.position.spanNum} >
                               <form-items-rander  
                                    ref="formItemsRander"
                                    option={formData}
                                    model={this.model}
                                />
                            </el-col>
                 }
                  
            }) 
        },
    },
    mounted(){
        console.log(this.formOption)
    },
    render(h){ 
            let pageConf = this.formOption.pageConf
            if(pageConf && pageConf.tab){
                // tabpanel形式
                let tabConfigs = this.formOption.tabConfigs;
                return  <el-form 
                            label-width="100px"
                            model={this.model}
                        >
                            <el-tabs 
                                type={pageConf.type}
                                tab-position={pageConf.tabPosition}
                            >
                            {
                                tabConfigs.map((item, indexs)=>{
                                    return <el-tab-pane 
                                            label={item.tabpanel.title} 
                                            style={pageConf.style} 
                                            disabled={item.tabpanel.disabled}
                                        >
                                                { 
                                                    //循环开始
                                                    this.renderItem(item.formConfig)
                                                } 
                                            </el-tab-pane>
                                })
                            } 
                            </el-tabs>
                        </el-form>
            }
            else{
                //经典的form表单形式
                let formConfig=this.formOption.formConfig;
                 return <el-form 
                            label-width="100px"
                            model={this.model}
                        >
                        <div style={this.formOption.pageConf.style}>
                            {
                                this.renderItem(formConfig)
                            }
                        </div>
                      </el-form>
                 
            }
    }
}