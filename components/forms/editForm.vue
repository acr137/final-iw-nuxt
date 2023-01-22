<template>
  <div>
    <div class="flex items-center mx-1.5">
      <lottie-charger
        :width="40"
        :height="40"
        :lottie-name="'modify'"
      ></lottie-charger>
      <h1 class="ml-2 text-xl text-gray-800 uppercase font-oswald">
        Modificar usuario
      </h1>
    </div>
    <hr class="mt-4 mb-2 mx-1.5 border border-gray-800" />
    <form class="text-sm text-gray-800 font-nunito" @submit.prevent="checkForm">
      <div v-if="errors.length > 0" class="px-1.5 text-md text-red-500">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">> {{ error }}</li>
        </ul>
      </div>
      <div class="flex justify-between">
        <!-- USER NAME -->
        <div class="w-1/2 p-1.5">
          <p class="font-bold uppercase">Nombre</p>
          <input
            id="name"
            v-model="dataForm.name"
            class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
            type="text"
            name="name"
          />
        </div>
        <div class="w-1/2 p-1.5">
          <p class="font-bold uppercase">Apellidos</p>
          <input
            id="surname"
            v-model="dataForm.surname"
            class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
            type="text"
            name="surname"
          />
        </div>
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
      <!-- USER PHONE -->
      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Teléfono</p>
        <input
          id="phone"
          v-model="dataForm.phone"
          placeholder="Ejemplo: 658393821"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="number"
          name="phone"
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
              class="p-2 text-lg font-bold text-white bg-green-600 rounded cursor-pointer hover:bg-green-700"
            >
              Confirmar
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
  props: {
    user: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      userId: null,
      dataForm: {
        id: null,
        name: null,
        surname: null,
        email: null,
        password: null,
        phone: null,
        fechaNac: null,
        admin: false,
      },
      errors: [],
    }
  },
  created() {
    this.dataForm.id = this.user.id
    this.dataForm.name = this.user.name
    this.dataForm.surname = this.user.surname
    this.dataForm.email = this.user.email
    this.dataForm.admin = this.user.admin
    this.dataForm.password = this.user.password
    this.dataForm.phone = this.user.phone
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
      if (!this.dataForm.phone) {
        this.errors.push('El teléfono es obligatorio.')
      }
      if (
        this.dataForm.name &&
        this.dataForm.phone &&
        this.dataForm.email &&
        this.dataForm.password
      ) {
        this.editUser(this.dataForm)
        this.dataForm = {
          id: null,
          name: null,
          surname: null,
          email: null,
          password: null,
          phone: null,
          admin: false,
        }
        this.errors = []
        this.$emit('closeForm')
      }
    },

    async editUser(user) {
      try {
        await this.$store.dispatch('users/editUser', user)
        location.reload()
      } catch (error) {
        this.$log.error(error)
      }
    },
  },
}
</script>
