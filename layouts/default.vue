<template>
  <div>
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
