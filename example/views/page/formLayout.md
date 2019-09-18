<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-09-18 14:51:34
 -->
  ### formLayout
  
  > 标签： `<form-layout />` 


  **功能：**  控件布局组件

  **示例：**

:::demo

  ```html
 <template>
 <div>
  <form-items-rander
    :option="config"
    :model="model"
    comp="selectComp"
  />
 </div>
 
 </template>
   <script>
   export default {
     data(){
       return {
         config:{
           name:"name",
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
         model:{
           name:2,
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
