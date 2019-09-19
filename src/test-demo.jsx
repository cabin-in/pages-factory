import formItemsRander from './renders/formItemsRander.vue'
export default{
    name:"TestDome",
    components:{
        formItemsRander
    },
    props:{
        formConf:{
            type:Object,
            required:true,
            default:function(){
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    render(h){
        return <div> {
            this.formConf.items.map(
            (item, index) =>{
                return <formItemsRander
                            option={item}
                            model={this.formConf.model}
                        />
            })
        }
        </div>
    }
}