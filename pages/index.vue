<template>
  <div class="h-186">
    <div class="p-2 mx-56 mt-6 bg-white rounded-xl">
      <h1 class="mt-5 text-4xl font-bold text-center font-oswald">
        ¡Bienvenido al sistema!
      </h1>
      <h2 class="mb-6 text-2xl font-bold text-center font-oswald">
        <p v-if="!isLogin">¡Inicia sesión para comenzar a navegar!</p>
        <p v-else>
          Gracias por seguir confiando en nosotros
          <span class="text-yellowIw">{{ user.nombre }}</span>
        </p>
      </h2>
    </div>

    <div class="flex items-center justify-center w-full mt-4">
      <lottie-charger
        :width="460"
        :height="440"
        :lottie-name="'graphics'"
        class="mr-4 bg-white rounded-xl"
      />
      <lottie-charger
        :width="460"
        :height="440"
        :lottie-name="'diagram'"
        class="ml-4 bg-white rounded-xl"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LottieCharger from '@/components/lottie/lottieCharger.vue'

export default {
  name: 'DashboardPanel',
  components: {
    LottieCharger,
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin',
      user: 'auth/getUser',
    }),
  },
}
</script>
