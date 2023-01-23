<template>
  <div class="p-10">
    <div class="flex items-center mx-1.5 mb-5">
      <h1 class="mr-2 text-4xl font-bold text-gray-800 uppercase font-oswald">
        ¡Regístrate!
      </h1>
      <lottie-charger
        :width="80"
        :height="80"
        :lottie-name="'register'"
      ></lottie-charger>
    </div>

    <form class="text-sm text-gray-800 font-nunito" @submit.prevent="checkForm">
      <div v-if="errors.length > 0" class="px-1.5 text-md text-red-500">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">> {{ error }}</li>
        </ul>
      </div>
      <!-- USER NAME -->
      <div class="w-full p-1.5">
        <p class="font-bold uppercase">Nombre</p>
        <input
          id="name"
          v-model="dataForm.name"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="name"
        />
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
      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Contraseña</p>
        <input
          id="password"
          v-model="dataForm.password"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="password"
          name="password"
        />
      </div>
      <!-- USER COMPANY -->
      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Empresa</p>
        <input
          id="company"
          v-model="dataForm.company"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="company"
        />
      </div>
      <div class="px-1.5">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <input
              id="default-checkbox"
              v-model="dataForm.admin"
              type="checkbox"
              class="w-6 h-6 bg-gray-100 border-gray-300 rounded hover:ring-2 hover:shadow-xl"
            />
            <label
              for="default-checkbox"
              class="ml-2 font-medium text-gray-900 text-md"
              >ADMIN</label
            >
          </div>
          <p>
            <button
              type="submit"
              class="px-4 py-2 text-lg font-bold text-gray-800 rounded cursor-pointer hover:shadow-md bg-yellowIw hover:bg-yellowIwHover"
            >
              Registrarse
            </button>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LottieCharger from '~/components/lottie/lottieCharger.vue'

export default {
  name: 'RegisterForm',
  components: {
    LottieCharger,
  },
  data() {
    return {
      dataForm: {
        name: null,
        email: null,
        password: null,
        company: null,
        admin: false,
      },
      errors: [],
    }
  },
  methods: {
    checkForm() {
      this.errors = []
      if (!this.dataForm.name) {
        this.errors.push('El nombre es obligatorio.')
      }
      if (!this.dataForm.email) {
        this.errors.push('El email es obligatorio.')
      }
      if (!this.dataForm.password) {
        this.errors.push('La contraseña es obligatoria.')
      }
      if (!this.dataForm.company) {
        this.errors.push('La empresa es obligatoria.')
      }
      if (
        this.dataForm.name &&
        this.dataForm.company &&
        this.dataForm.email &&
        this.dataForm.password
      ) {
        this.registrarUsuario(this.dataForm)
        this.dataForm = {
          name: null,
          email: null,
          password: null,
          company: null,
          admin: false,
        }
        this.errors = []
        this.$emit('closeForm')
      }
    },
    async registrarUsuario(user) {
      try {
        await this.$store.dispatch('auth/register', user)
        location.reload()
      } catch (error) {
        this.$log.error(error)
      }
    },
  },
}
</script>
