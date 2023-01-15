<template>
  <div class="container mx-auto mt-4">
    <the-header />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/header/header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
  },
}
</script>
