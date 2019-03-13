/**
 * @name picker
 * @author jardenliu jarden@qq.com
 * @createDate 3/13/2019, 5:33:10 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './picker.vue'

@Component({
  mixins: [template],
  components: {
  }
})
export default class Picker extends Vue {}
