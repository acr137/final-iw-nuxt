<template>
  <div class="h-186">
    <h1 class="mt-5 text-4xl font-bold text-center font-oswald">
      ¡Bienvenido al sistema!
    </h1>
    <h2 class="text-2xl font-bold text-center font-oswald">
      ¡Inicia sesión para comenzar a navegar!
    </h2>
    <div class="flex items-center justify-center w-full mt-4">
      <lottie-charger
        :width="520"
        :height="500"
        :lottie-name="'graphics'"
        class="mr-4 bg-white rounded-xl"
      />
      <lottie-charger
        :width="520"
        :height="500"
        :lottie-name="'diagram'"
        class="ml-4 bg-white rounded-xl"
      />
    </div>
  </div>
</template>

<script>
import LottieCharger from '@/components/lottie/lottieCharger.vue'

export default {
  name: 'DashboardPanel',
  components: {
    LottieCharger,
  },
}
</script>
