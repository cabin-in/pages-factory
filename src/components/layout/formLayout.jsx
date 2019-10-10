import formItemsRander from '../../renders/formItemsRander.vue'
export default {
  name: 'FormLayout',
  components: {
    formItemsRander
  },
  props: {
    formOption: {
      type: Object,
      require: true,
      default: function () {
        return {}
      }
    },
    formModel: {
      type: Object,
      require: true,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    renderItem (h, formConfig) {
      return formConfig.map((formData, index) => {
        if (formData.label) {
          return (
            <el-col span={formData.position.spanNum}>
              <el-form-item
                key={index}
                label={formData.label}
                prop={formData.name}
                rules={formData.rules}
              >
                <formItemsRander
                  ref='formItemsRander'
                  option={formData}
                  comProps={this.formModel}
                />
              </el-form-item>
            </el-col>
          )
        } else {
          return (
            <el-col span={formData.position.spanNum}>
              <formItemsRander
                ref="formItemsRander"
                option={formData}
                comProps={this.formModel}
              />
            </el-col>
          )
        }
      })
    }
  },
  render: function (h) {
    let pageConf = this.formOption.pageConf
    if (pageConf && pageConf.tab) {
      // tabpanel形式
      let tabConfigs = this.formOption.tabConfigs
      return (
        <el-form
          label-width="100px"
          style="height: 100%;width: 100%;overflow: hidden;"
          model={this.formModel}>
          <el-tabs
            type={pageConf.type}
            style="height: 100%;display: flex;flex-direction: column;"
            tab-position={pageConf.tabPosition}>
            { tabConfigs.map((item) => {
              return (
                <el-tab-pane
                  style={pageConf.style}
                  label={item.tabpanel.title}
                  disabled={item.tabpanel.disabled}
                >
                  { // 循环开始
                    this.renderItem(h, item.formConfig)}
                </el-tab-pane>
              )
            })}
          </el-tabs>
        </el-form>
      )
    } else {
      // 经典的form表单形式
      return (
        <el-form
          label-width="100px"
          model={this.formModel}>
          <div style={this.formOption.pageConf.style}>
            {this.renderItem(h, this.formOption.formConfig)}
          </div>
        </el-form>
      )
    }
  }
}
