<template>
  <div>
    请求前缀: {{ apiPrefix }}
  </div>
</template>

<script lang="ts" setup>
const apiPrefix = import.meta.env.VITE_API_PREFIX;

console.log('env data', import.meta.env);
</script>
