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
      <nuxt-link to="/"
        ><h1 class="text-2xl font-bold bg-blue">TPV Virtual</h1></nuxt-link
      >
    </div>
    <custom-button
      v-if="!isLogin"
      text="Iniciar Sesión"
      style-button="bg-yellowIw hover:bg-yellowIwHover rounded-md font-bold text-white px-3"
      @click="toggleLoginModal"
    >
      <template #icon>
        <svg-icon
          name="login"
          class="w-5 h-5 text-white stroke-current fill-transparent"
        /> </template
    ></custom-button>

    <div v-else class="flex items-center">
      <custom-button
        text="Logout"
        style-button="bg-red-400 hover:bg-red-500 rounded-md font-bold text-white px-3 py-1"
        @click="logout"
      >
        <template #icon>
          <svg-icon
            name="login"
            class="w-5 h-5 text-white stroke-current fill-transparent"
          /> </template
      ></custom-button>
      <nuxt-link to="/my-account" class="ml-2">
        <div class="p-4 bg-black rounded-full">
          <svg-icon :name="userIcon" class="w-6 h-6 fill-white" />
        </div>
      </nuxt-link>
    </div>

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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LottieCharger from '@/components/lottie/lottieCharger.vue'
import CustomButton from '@/components/button/CustomButton.vue'
import LoginForm from '@/components/forms/loginForm.vue'

export default {
  name: 'TheHeader',
  components: {
    LottieCharger,
    CustomButton,
    LoginForm,
  },
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'auth/isLogin',
      isAdmin: 'auth/isAdmin',
    }),
    userIcon() {
      return this.isAdmin ? 'admin' : 'user'
    },
  },
  methods: {
    async logout() {
      try {
        this.$router.push('/')
        await this.$store.dispatch('auth/logout')
      } catch (error) {
        console.log(error)
      }
    },
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
