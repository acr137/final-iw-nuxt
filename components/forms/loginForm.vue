<template>
  <div>
    <lottie-charger
      class="mt-10 mb-10"
      :width="300"
      :height="100"
      :lottie-name="'welcome'"
    ></lottie-charger>
    <form
      class="mx-10 text-sm text-gray-800 font-nunito"
      @submit.prevent="checkForm"
    >
      <div v-if="errors.length > 0" class="px-1.5 text-md text-red-500">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">> {{ error }}</li>
        </ul>
      </div>
      <!-- USER EMAIL -->
      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Email</p>
        <input
          id="email"
          v-model="dataForm.email"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="email"
          name="email"
        />
      </div>
      <!-- USER PASSWORD -->
      <div class="w-full p-1.5 mb-5">
        <p class="font-bold uppercase">Contraseña</p>
        <input
          id="password"
          v-model="dataForm.password"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="password"
          name="password"
        />
      </div>
      <div class="px-1.5">
        <button
          type="submit"
          class="flex items-center w-full py-3 mb-3 text-lg font-bold text-white rounded cursor-pointer bg-yellowIw"
        >
          <div class="flex items-center mx-auto">
            <p>Iniciar Sesión</p>
            <svg-icon
              name="login"
              class="w-5 h-5 ml-2 text-white stroke-current fill-transparent"
            />
          </div>
        </button>
      </div>
      <div class="text-lg text-center text-blue-500 cursor-pointer">
        <p
          class="mb-16 hover:underline hover:text-blue-700"
          @click="openRegisterModal"
        >
          ¿No estás registrado? Hazlo aquí
        </p>
        <p class="hover:underline hover:text-blue-700">
          ¿Has olvidado tu contraseña?
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import LottieCharger from '~/components/lottie/lottieCharger.vue'

export default {
  name: 'LoginForm',
  components: {
    LottieCharger,
  },
  data() {
    return {
      dataForm: {
        email: null,
        password: null,
      },
      errors: [],
    }
  },
  methods: {
    checkForm(e) {
      this.errors = []
      if (!this.dataForm.email) {
        this.errors.push('El email es obligatorio.')
      }
      if (!this.dataForm.password) {
        this.errors.push('La contraseña es obligatoria.')
      }
      if (this.dataForm.email && this.dataForm.password) {
        this.iniciarSesion(this.dataForm)
        this.dataForm = {
          email: null,
          password: null,
        }
        this.errors = []
        this.$emit('closeForm')
      }

      e.preventDefault()
    },
    async iniciarSesion(user) {
      try {
        await this.$store.dispatch('auth/login', user)
      } catch (error) {
        this.$log.error(error)
      }
    },
    openRegisterModal() {
      this.$emit('openRegisterModal')
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
