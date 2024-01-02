<template>
  home
  <div @click="printHelloWorld">打印全局方法</div>
  =============== 获取环境配置数据 ==============================
  <use-env-data-example />
  ================== 使用store demo ============================
  <use-store-example />
  ======================= 获取远程数据demo =======================
  <fetch-remote-data />
  ============= 路由跳转 ==================
  <use-route-example />
</template>

<script lang="ts" setup>
import FetchRemoteData from '~/components/fetch-remote-data-example/index.vue';
import UseStoreExample from '~/components/use-store-example/index.vue';
import UseEnvDataExample from '~/components/env-data-example/index.vue';
import UseRouteExample from '~/components/use-route-example/index.vue';
</script>
