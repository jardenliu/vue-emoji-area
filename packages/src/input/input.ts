/**
 * @name input
 * @author jardenliu jarden@qq.com
 * @createDate 3/13/2019, 5:32:47 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './input.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Input extends Vue {}
