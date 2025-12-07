<script setup lang="ts">
import { wincard, winricheditbox } from 'web-win-vue'
import 'web-win-vue/style.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="margin-bottom: 20px">Richeditbox 多行输入框</h1>
      <h2>使用方法</h2>
      <p class="docs-text">导入：</p>
      <wincard class="docs-code">
        <p style="margin: 0;">import { winricheditbox } from 'web-win-vue'</p>
      </wincard>
      <p class="docs-text">使用示例：</p>
      <winricheditbox />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winricheditbox /&gt;</p>
      </wincard>
      <h2>属性</h2>
      <p class="docs-text">value 属性可以更改 Richeditbox 的内容：</p>
      <winricheditbox value="richeditbox" />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winricheditbox value="inputbox" /&gt;</p>
      </wincard>
      <p class="docs-text">placeholder 属性可以更改 Richeditbox 的占位文本：</p>
      <winricheditbox placeholder="richeditbox" />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winricheditbox placeholder="inputbox" /&gt;</p>
      </wincard>
    </div>
  </div>
</template>
<style scoped>
h1 {
  font-weight: normal;
  margin-top: -2.5px;
}

h2 {
  font-weight: normal;
  margin-bottom: 10px;
  font-size: 24px;

}

.docs-text {
  font-size: 15px;
}

.docs-code {
  padding: 10px 10px;
  height: auto;
  width: 600px;
}
</style>