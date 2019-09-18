<!--
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-09-18 08:46:30
 * @LastEditTime: 2019-09-18 14:51:34
 -->

  #### formItemsRander

  > 标签： `<form-items-rander />` 


  **功能：**  只提供一个单据显示的表格组建

  **示例：**

:::demo

  ```html
 <template>
 <div>
  第一个
  <form-items-rander
    :option="config"
    :model="model"
    comp="selectComp"
  />
  第二个
   <form-items-rander
    :option="config1"
    :model="model"
    comp="inputTextComp"
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
         config1:{
           name:"test",
           elmentConfig:{
           },
           eventConf:{
             isOn:true,
             blur:function(node, _this){
               console.log(node,_this)
             }
           }
         },
         model:{
           name:2,
           test:1
         }
       }
     },
   }
   </script>
   <style lang="css" >
   </style>
  ```
:::

**属性**

```js
 tableloading:true/false  // 数据加载遮罩层
 tableData:[  // 数据
     {}  // data项结构
 ]  
 configs：{ //table结构配置 参照例子

 } 


```



 **slot**
   
  | 名称        | 说明             |
  | ------------- |:-------------:|
  | 自定义| 表格列显然的插槽块 | 


---
