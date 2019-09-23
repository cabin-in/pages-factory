<template>
    <div>
        <!-- <formItemsRander
            v-for="(item, index) in config.items"
            :key="index"
            :option="item.option"
            :model="config.model"
        /> -->
         <form-items-rander
            :option="config.items"
            :model="config.model"
        />
    </div>
</template>
<script>
import formItemsRander from './renders/formItemsRander.vue'
export default {
    name:"TestDome",
    data(){
        return {
            conf:{
                name:'name',
                comp:'selectComp',
                elmentConfig:{
                    data:[
                    {label:'哈哈', value:1},
                    {label:'哈哈1', value:2},
                    {label:'哈哈2', value:3},
                    ]
                },
                eventConf:{
                    isOn:true,
                    change:function(node, _this){
                    console.log(node,_this)
                    }
                }
            },
           config:{
                model:{
                        name:'mlc',
                        age:1
                    },
                items:[
                    {
                        name:'name',
                        comp:'selectComp',
                        elmentConfig:{
                            data:[
                            {label:'哈哈', value:1},
                            {label:'哈哈1', value:2},
                            {label:'哈哈2', value:3},
                            ]
                        },
                        eventConf:{
                            isOn:true,
                            change:function(node, _this){
                            console.log(node,_this)
                            }
                        }
                    },
                    {
                        name:"age",
                        comp:'inputNumberComp',
                        elmentConfig:{
                        },
                        eventConf:{
                            isOn:true,
                            blur:function(node, _this){
                            console.log(node,_this)
                            }
                        }
                    }
                ]
          }
        }
    },
    props:{
        // formConf:{
        //     type:Object,
        //     required:true,
        //     default:function(){
        //         return {}
        //     }
        // }
    },
    components:{
        formItemsRander
    },
    mounted(){
    }
}
</script>