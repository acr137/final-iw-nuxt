<template>
  <div class="w-full text-center bg-white h-186">
    <div v-if="error.statusCode === 404">
      <lottie-charger :width="500" :height="500" :lottie-name="'error404'" />
      <h1 class="mb-5 text-4xl font-bold text-gray-800 font-oswald">
        No hemos encontrado lo que buscabas :(
      </h1>
      <nuxt-link
        to="/"
        class="px-6 py-3 text-xl font-bold text-white rounded-md cursor-pointer bg-yellowIw hover:bg-yellowIwHover hover:shadow-lg"
        >Volver</nuxt-link
      >
    </div>
    <div v-else>
      <lottie-charger :width="500" :height="500" :lottie-name="'error500'" />
      <h1 class="mb-5 text-4xl font-bold text-gray-800 font-oswald">
        Ha ocurrido un error :(
      </h1>
      <nuxt-link
        to="/"
        class="px-6 py-3 text-xl font-bold text-white rounded-md cursor-pointer bg-yellowIw hover:bg-yellowIwHover hover:shadow-lg"
        >Volver</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import LottieCharger from '~/components/lottie/lottieCharger.vue'

export default {
  name: 'Error',
  components: {
    LottieCharger,
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
