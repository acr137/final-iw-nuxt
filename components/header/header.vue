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
      <h1 class="text-2xl font-bold bg-blue">TPV Virtual</h1>
    </div>
    <custom-button
      v-if="!isLogin"
      text="Iniciar Sesión"
      style-button="bg-yellowIw rounded-md font-bold text-white px-3"
      @click="toggleLoginModal"
    >
      <template #icon>
        <svg-icon
          name="login"
          class="w-5 h-5 text-white stroke-current fill-transparent"
        /> </template
    ></custom-button>

    <modal-base
      :open="showLoginModal"
      :has-close-icon="true"
      @closedModal="toggleLoginModal"
    >
      <template #mainContent>
        <login-form
          @closeForm="toggleLoginModal"
          @openRegisterModal="toggleRegisterModal"
        />
      </template>
    </modal-base>

    <modal-base
      :open="showRegisterModal"
      :has-close-icon="true"
      @closedModal="toggleRegisterModal"
    >
      <template #mainContent>
        <register-form @closeForm="toggleRegisterModal"></register-form>
      </template>
    </modal-base>
  </div>
</template>

<script>
import LottieCharger from '@/components/lottie/lottieCharger.vue'
import CustomButton from '@/components/button/CustomButton.vue'
import LoginForm from '@/components/forms/loginForm.vue'
import RegisterForm from '@/components/forms/registerForm.vue'

export default {
  name: 'TheHeader',
  components: {
    LottieCharger,
    CustomButton,
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      isLogin: false,
      showLoginModal: false,
      showRegisterModal: true,
    }
  },
  methods: {
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal
    },
    toggleRegisterModal() {
      if (this.showLoginModal) this.showLoginModal = false

      this.showRegisterModal = !this.showRegisterModal
    },
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
