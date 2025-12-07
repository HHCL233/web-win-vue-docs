<script setup lang="ts">
import { winbutton } from 'web-win-vue'
import 'web-win-vue/style.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 20px">主页</h1>
      <h2 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 10px;font-size: 24px;">Web-Win-Vue</h2>
      <p style="font-size: 15px;">基于 Vue3 开发的 Windows10 风格 Web 组件库</p>
    </div>
  </div>
</template>
<style scoped>
@media (prefers-color-scheme: dark) {

  h1,
  h2,
  p {
    color: #ffffff;
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 16px;
  background-color: #e6e6e6;
}

::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #ffffff00;
}

::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: #818181;
}
</style>