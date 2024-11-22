<script setup lang="ts">
import { center } from '@styled/patterns'
import { css } from '@styled/css'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { inc } = counter
</script>

<template>
  <div :class="center({ h: '30vh' })">
    <button
      :class="
        css({
          w: '120px',
          h: '40px',
          bgColor: 'blue.500',
          rounded: 'full',
          cursor: 'pointer',
          color: 'white'
        })
      "
      @click="() => inc()"
    >
      count is: {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
