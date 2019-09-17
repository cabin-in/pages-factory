import inputNumber from '../components/form-items/input-number.vue'
export default {
  name: 'formItemsRander',
  components:{
    inputNumber
  },
  props:{
    option: {
      type: Object,
      require: true,
      default: function () {
        return {}
      }
    },
    model: {
      type: Object,
      require: false,
      default: function () {
        return {}
      }
    }
  },
  render (h){
    return (
      <input-number
        option={this.option}
        model={this.model}
      />
    )
  }
}
