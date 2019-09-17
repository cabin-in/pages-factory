
  #### formItemsRander

  > 标签： `<form-items-rander />` 


  **功能：**  只提供一个单据显示的表格组建

  **示例：**

:::demo

  ```html
 <template>
  <form-items-rander
    :option="config"
    :model="model"
  />
 </template>
   <script>
   export default {
     data(){
       return {
         config:{
           name:"name",
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
           name:2
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
