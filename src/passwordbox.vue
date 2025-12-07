<script setup lang="ts">
import { wincard, winpasswordbox } from 'web-win-vue'
import 'web-win-vue/style.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="margin-bottom: 20px">Passwordbox 密码框</h1>
      <h2>使用方法</h2>
      <p class="docs-text">导入：</p>
      <wincard class="docs-code">
        <p style="margin: 0;">import { winpasswordbox } from 'web-win-vue'</p>
      </wincard>
      <p class="docs-text">使用示例：</p>
      <winpasswordbox />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winpasswordbox /&gt;</p>
      </wincard>
      <h2>属性</h2>
      <p class="docs-text">value 属性可以更改 Passwordbox 的内容：</p>
      <winpasswordbox value="Passwordbox" />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winpasswordbox value="Passwordbox" /&gt;</p>
      </wincard>
      <p class="docs-text">placeholder 属性可以更改 Passwordbox 的占位文本：</p>
      <winpasswordbox placeholder="Passwordbox" />
      <wincard class="docs-code" style="margin-top: 6px;">
        <p style="margin: 0;">&lt;winpasswordbox placeholder="Passwordbox" /&gt;</p>
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