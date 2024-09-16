<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import Counter from '@/components/Counter.vue'
import { center, divider } from '@styled/patterns'
</script>

<template>
  <Counter />
  <ul
    :class="
      center({
        gap: '10px',
        p: '10px',
        m: '10px',
        border: '1px solid #ccc',
        rounded: 'md',
        bgColor: 'white'
      })
    "
  >
    <li>
      <RouterLink to="/">主页</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">关于</RouterLink>
    </li>
  </ul>
  <div :class="divider()"></div>
  <div>
    <RouterView />
  </div>
  <VueQueryDevtools />
</template>

<style scoped></style>
