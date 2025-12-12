<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  name: { type: String, required: true }
})

const src = ref(null)

onMounted(async () => {
  try {
    const mod = await import(`~/assets/icons/${props.name}.svg`)
    src.value = mod.default
  } catch {
    src.value = null
  }
})
</script>

<template>
  <img v-if="src" :src="src" :alt="props.name" />
</template>
