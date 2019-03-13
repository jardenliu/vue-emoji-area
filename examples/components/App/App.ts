/**
 * @name App
 * @author
 * @createDate 3/8/2019, 5:14:19 PM
 */

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import template from './App.vue'
import EmojiArea from 'vue-emoji-area'

@Component({
  mixins: [template],
  components: {
    EmojiArea
  }
})
export default class App extends Vue {}
