/**
 * @name App
 * @author  
 * @createDate 3/8/2019, 5:14:19 PM
 */
 
<template>
  <div class="emoji-area-example">
    <div class="title">EmojiArea <span class="subtitle">表情输入框</span></div>
    <div class="column-container">
      <div class="column-name">快速使用</div>
      <code class="column-code">
        &#60;emoji-area v-model="value" &#62;&#60;/emoji-area&#62;
      </code>
      <div class="column-demo">
        <emoji-area></emoji-area>
      </div>
    </div>
  </div>
</template>

<style lang="stylus"  src="./App.styl" scoped></style>