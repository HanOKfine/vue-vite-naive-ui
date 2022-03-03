<template>
  <n-message-provider>
    <MessageApi />
  </n-message-provider>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import  MessageApi  from "@/components/MessageApi.vue"
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>