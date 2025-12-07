<script setup lang="ts">
import { wincard } from 'web-win-vue'
import 'web-win-vue/style.css'
import { ref } from 'vue'


</script>
<template>
  <div class="background">
    <div style="margin-left: 24px;margin-top: 70px;">
      <h1 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 20px">安装</h1>
      <h2 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 10px;font-size: 24px;">npm 安装</h2>
      <p style="font-size: 15px;"></p>
      <wincard style="padding:10px 10px;height: auto;width: 600px;">
        <p style="margin: 0;">npm install web-win-vue</p>
      </wincard>
      <h1 style="font-weight: normal; margin-top: 50px; margin-bottom: 20px">导入</h1>
      <h2 style="font-weight: normal; margin-top: -2.5px; margin-bottom: 10px;font-size: 24px;">使用部分组件</h2>
      <p style="font-size: 15px;">例如，要导入 wincard 组件 ，可以：</p>
      <wincard style="padding:10px 10px;height: auto;width: 600px;">
        <p style="margin: 0;">import 'web-win-vue/style.css'</p>
        <p style="margin: 0;">import { wincard } from 'web-win-vue'</p>
      </wincard>
      <p style="font-size: 15px;"></p>
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