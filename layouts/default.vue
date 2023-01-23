<template>
  <div class="container mx-auto mt-4">
    <the-header />

    <div class="flex">
      <menu-index class="w-1/5 pr-3" />
      <Nuxt class="w-full bg-gray-200 block-shadow" />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/header/header.vue'
import MenuIndex from '@/components/menu/menu.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    MenuIndex,
  },
}
</script>

<style scoped>
.block-shadow {
  -webkit-box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
  -moz-box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
  box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
}
</style>
