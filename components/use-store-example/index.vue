<template>
  <div>
    store里的数据: {{ store.userName }}
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import userPinia from '~/pinia/user';

const store = userPinia();
console.log('usersStore', store);
</script>
