<template>
  <div class="h-186">
    <h1 class="mt-5 text-4xl font-bold text-center font-oswald">
      ¡Bienvenido al sistema!
    </h1>
    <div class="flex items-center">
      <lottie-charger :width="300" :height="300" :lottie-name="'graphics'">
      </lottie-charger>
      <lottie-charger :width="300" :height="300" :lottie-name="'diagram'">
      </lottie-charger>
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
