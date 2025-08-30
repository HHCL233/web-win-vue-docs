<script setup lang="ts">
import { wincard, winprogressbar } from 'web-win-vue'
import 'web-win-vue/web-win-vue.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="margin-bottom: 20px">Progressbar 进度条</h1>
      <h2>使用方法</h2>
      <p class="docs-text">导入：</p>
      <wincard class="docs-code"><p style="margin: 0;">import { winprogressbar } from 'web-win-vue'</p></wincard>
      <p class="docs-text">使用示例：</p>
      <winprogressbar />
      <wincard class="docs-code" style="margin-top: 6px;"><p style="margin: 0;">&lt;winprogressbar /&gt;</p></wincard>
      <h2>属性</h2>
      <p class="docs-text">progress 属性可以更改 progressbar 的进度，需要填写一个 0-100 的数字作为百分比：</p>
      <winprogressbar progress="50"/>
      <wincard class="docs-code" style="margin-top: 6px;"><p style="margin: 0;">&lt;winprogressbar progress="50" /&gt;</p></wincard>
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
  padding:10px 10px;
  height: auto;
  width: 600px;
}
</style>