import formItemsRander from '../../renders/formItemsRander.vue'
export default{
    name:'FormLayout',
    components:{
      formItemsRander
    },
    props: {

    },
    methods: {
        renderItem(tabConfigs,indexs){
            return tabConfigs.map((formData,index)=>{
                 if(formData.title){
                    return  <el-col span={formData.position.spanNum} >
                            <el-form-item
                                label={formData.title}
                                key={index}
                                prop={formData.name}
                                rules={formData.rules}
                            >
                                <yl-rendercoms  
                                    ref="rendercoms"
                                    option={formData}
                                    model={this.model}
                                    items={this.items}
                                    refList={this.refList}
                                    on-change={this._change}
                                    on-delItem={this._delItem}
                                    on-blur={this._blur}
                                    on-method1={this._method1}
                                    on-method2={this._method2}
                                    on-init={this._initComs}
                                    on-sumCount={this._sumCount}
                                    ></yl-rendercoms>
                           </el-form-item>
                        </el-col>
                 }else {
                    return  <el-col span={formData.position.spanNum} >
                                    <yl-rendercoms  
                                        ref="rendercoms"
                                        option={formData}
                                        model={this.model}
                                        items={this.items}
                                        refList={this.refList}
                                        on-change={this._change}
                                        on-delItem={this._delItem}
                                        on-blur={this._blur}
                                        on-method1={this._method1}
                                        on-method2={this._method2}
                                        on-init={this._initComs}
                                        on-sumCount={this._sumCount}
                                    ></yl-rendercoms>
                            </el-col>
                 }
                  
            }) 
        },
    },
    render(h){
        return (
            <p>哈哈哈</p>
        )
    }
}