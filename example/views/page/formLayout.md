<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-09-18 14:51:34
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
              age:0,
              name1:'',
              age1:0
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
:::

**支持控件以及配置**

#### inputNumber 

:::tip
number类型数据输入框，`.number`修饰符修饰
:::

*配置如下：*
```js
{
  name: "propname", // 对应属性名
  elmentConfig: {  // 对应控件属性配置
    type: "text",  
    size: "small",
    disabled: false
  },   
  eventConf: {
    isOn: true, //是否开启事件
    init: function(_this){  //初始化事件
    },
    blur:function(node,_this){ //blur事件
    }
  }
},

```

#### inputText

:::tip
文本类型数据输入框 `.trim`修饰符修饰
:::

*配置如下：*
```js
{
  name: "propname", // 对应属性名
  elmentConfig: {  // 对应控件属性配置
    type: "text",  
    size: "small",
    disabled: false
  },   
  eventConf: {
    isOn: true, //是否开启事件
    init: function(_this){  //初始化事件
    },
    blur:function(node,_this){ //blur事件
    }
  }
},

```

#### select

:::tip
选择项控件，配置data提供选项组
:::

*配置如下：*
```js
{
  name: "propname", // 对应属性名
  elmentConfig: {  // 对应控件属性配置
      size: "", //大小
      placeholder: "", //输入提示
      disabled: false, // 是否禁用
      clearable: false, // 是否清除预选值
    },   
  eventConf: {
    isOn: true, //是否开启事件
    init: function(_this){  //初始化事件
    },
    change:function(node,_this){ // 控件对应事件
    }
  }
},

```

---
