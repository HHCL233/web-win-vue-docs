<script setup lang="ts">
import { wincard, winbutton } from 'web-win-vue'
import 'web-win-vue/style.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="margin-bottom: 20px">关于</h1>
      <h2>Web-Win-Vue</h2>
      <p class="docs-text">基于 Vue3 开发的 Windows10 风格 Web 组件库。</p>
      <h2>Web-Win-Vue-Docs</h2>
      <p class="docs-text"> Web-Win-Vue 的使用文档，基于 Web-Win-Vue 与 Vue3 。</p>
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