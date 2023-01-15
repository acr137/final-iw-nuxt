<template>
  <div class="flex justify-between mb-6 font-oswald">
    <div class="flex items-center">
      <div class="p-2 mr-3 bg-gray-500 rounded-full">
        <lottie-charger
          class="bg-white rounded-full"
          :width="40"
          :height="40"
          :lottie-name="'hearthbeat'"
        />
      </div>
      <h1 class="text-2xl font-bold">TPV Virtual</h1>
    </div>
    <custom-button
      v-if="!isLogin"
      text="Iniciar Sesión"
      style-button="bg-yellowIw rounded-md font-bold text-white px-3"
    >
      <template #icon>
        <svg-icon
          name="login"
          class="w-5 h-5 text-white stroke-current fill-transparent"
        /> </template
    ></custom-button>
  </div>
</template>

<script>
import LottieCharger from '@/components/lottie/lottieCharger.vue'
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'TheHeader',
  components: {
    LottieCharger,
    CustomButton,
  },
  data() {
    return {
      isLogin: false,
    }
  },
}
</script>

<style lang="postcss" scoped>
.bg-yellowIw {
  background-color: #fdd835;
}

.bg-yellowIw:hover {
  background-color: #d8b727;
}
</style>
