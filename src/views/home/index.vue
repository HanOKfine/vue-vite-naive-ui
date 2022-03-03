<template>
  <div>首页</div>
  <n-input
    v-model:value="value"
    type="text"
    placeholder="基本的 Input"
    @change="inputChangeValue"
  ></n-input>
  <n-button @click="inputChangeValue">按钮</n-button>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
const value = ref(111);
function inputChangeValue(event: Event) {
  console.log('event', event);
  window.$message.info(value.value)
  console.log('value', value.value);
}
</script>

<style scoped></style>
