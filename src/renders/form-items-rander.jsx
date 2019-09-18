import inputNumber from '../components/form-items/inputNumber.vue'
import inputText from '../components/form-items/inputText.vue'
export default {
  name: 'FormItemsRander',
  components: {
    inputNumber,
    inputText
  },
  props: {
    name: {
      type: String,
      require: true,
      default: 'inputText'
    },
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
  methods: {
  },
  render (h) {
    return (
      <component
        is={this.name}
        option={this.option}
        model={this.model}
      />
    )
  }
}
