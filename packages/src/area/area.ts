/**
 * @name area
 * @author jardenliu jarden@qq.com
 * @createDate 3/13/2019, 5:28:55 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './area.vue'
import EmojiInput from 'vue-emoji-area/src/input'
import EmojiPicker from 'vue-emoji-area/src/picker'

@Component({
  mixins: [template],
  components: {
    EmojiInput,
    EmojiPicker
  }
})
export default class Area extends Vue {}
