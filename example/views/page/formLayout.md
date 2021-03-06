<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2020-06-19 10:56:16
 -->
  ### formLayout
  
  > 标签： `<form-layout />` 


  **功能：**  控件布局组件
**tabPanel示例：**

:::demo

  ```html
 <template>
 <div>
 <form-layout
    :formOption="config"
    :formModel="model"
  />
 </div>
 
 </template>
   <script>
   export default {
     data(){
       return {
        model:{
              name:'xxxx',
              age:0,
              name1:'dsadsad',
              age1:0,
              flag:true
            },
         config:{
           pageConf:{
             tab:true,
             type:"border-card",
             style:"height:300px;",
             tabPosition:"top"
           },
           tabConfigs:[
             {
                tabpanel: { //各个分页的tabpanel配置
                    title: "基本信息", //标题
                    disabled: false,  //是否可用
                },
                formConfig:[
                  {
                    name:'name',
                    label:'名称',
                    comp:'inputTextComp',
                    position: {
                      spanNum: 12,
                    },
                    elmentConfig:{
                    },
                    eventConf:{
                      isOn:true,
                      blur:function(node, _this){
                        console.log(node,_this)
                      }
                    }
                  },
                   {
                    name:'name',
                    label:'',
                    comp:'tag',
                    position: {
                      spanNum: 12,
                    },
                    elmentConfig:{
                      text:'我是标签'
                    },
                    eventConf:{
                    }
                  },
                  {
                    comp:'dividerComp',
                    position: {
                      spanNum: 24,
                    },
                    elmentConfig:{
                      title:'我是分割线',
                      contentPosition:'left'
                    },
                    eventConf:{
                      isOn:true,
                      blur:function(node, _this){
                        console.log(node,_this)
                      }
                    }  
                  },
                  {
                    name:"age",
                    label:'年龄',
                    comp:'inputNumberComp',
                    position: {
                      spanNum: 24,
                    },
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
            },
            {
                tabpanel: { //各个分页的tabpanel配置
                    title: "其他信息", //标题
                    disabled:false,  //是否可用
                },
                formConfig:[
                  {
                    name:'name1',
                    label:'名称xxx',
                    comp:'inputTextComp',
                    position: {
                      spanNum: 24,
                    },
                    elmentConfig:{
                    },
                    eventConf:{
                      isOn:true,
                      blur:function(node, _this){
                        console.log(node,_this)
                      }
                    }
                  },
                  {
                    name:"age1",
                    label:'年龄xxx',
                    comp:'inputNumberComp',
                    position: {
                      spanNum: 24,
                    },
                    elmentConfig:{
                    },
                    eventConf:{
                      isOn:true,
                      blur:function(node, _this){
                        console.log(node,_this)
                      }
                    }
                  },
                  {
                    name:"flag",
                    label:'禁用',
                    comp:'checkBoxComp',
                    position: {
                      spanNum: 24,
                    },
                    elmentConfig:{
                    },
                    eventConf:{
                      isOn:true,
                      change:function(node, _this){
                        console.log(node,_this)
                      }
                    }
                  }
                ]
            }
           ]
           
         }
       }
     },
   }
   </script>
   <style lang="css" >
   </style>
  ```
:::

**通用型示例：**
<!-- 
:::demo

  ```html
 <template>
 <div>
 <form-layout
    :formOption="config"
    :model="model"
  />
 </div>
 
 </template>
   <script>
   export default {
     data(){
       return {
        model:{
              name:'',
              age:0
            },
         config:{
           pageConf:{
             tab:false,
             style:"height:300px;"
           },
           formConfig:[
             {
              name:'name',
              label:'名称',
              comp:'inputTextComp',
              position: {
                spanNum: 24,
              },
              elmentConfig:{
              },
              eventConf:{
                isOn:true,
                blur:function(node, _this){
                  console.log(node,_this)
                }
              }
             },
             {
              name:"age",
              label:'年龄',
              comp:'inputNumberComp',
              position: {
                spanNum: 24,
              },
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
   }
   </script>
   <style lang="css" >
   </style>
  ```
::: -->

**Form配置示例**

---
