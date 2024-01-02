<template>
  <div>
    远程数据:
    {{ res.name }}
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';
import userPinia from '~/pinia/user';
const usersStore = usePinia();
const { userName } = toRefs(usersStore);

const { data: res } = await useAsyncData('user', () => $fetch('/api/userInfo'))
</script>
