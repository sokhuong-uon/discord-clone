<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue'
import { Button } from '@discord-clone/vue'

const count = ref(0)
onMounted(() => {
  console.log(`initial value of count is ${count.value}`);
})
watch(count, (value, oldValue) => {
  console.log(value);
})
const increment = () => {
  count.value++
}
</script>

<template>
  <Button class="ring-2 ring-pink-800" @click="increment"></Button>
</template>