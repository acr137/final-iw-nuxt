<template>
  <div class="p-10">
    <div class="flex items-center mx-1.5 mb-5">
      <h1 class="mr-2 text-4xl font-bold text-gray-800 uppercase font-oswald">
        Crear ticket
      </h1>
      <lottie-charger
        :width="80"
        :height="80"
        :lottie-name="'ticket'"
      ></lottie-charger>
    </div>

    <form class="text-sm text-gray-800 font-nunito" @submit.prevent="checkForm">
      <div v-if="errors.length > 0" class="px-1.5 text-md text-red-500">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">> {{ error }}</li>
        </ul>
      </div>

      <div class="w-full p-1.5">
        <p class="font-bold uppercase">Usuario</p>
        <input
          id="user"
          v-model="dataForm.usuarioEncoder"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="email"
        />
      </div>

      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Admin</p>
        <input
          id="admin"
          v-model="dataForm.administradorDecoder"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="email"
          name="admin"
        />
      </div>

      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Referencia</p>
        <input
          id="referencia"
          v-model="dataForm.referenciaPago"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="text"
        />
      </div>

      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Asunto</p>
        <input
          id="asunto"
          v-model="dataForm.asunto"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="asunto"
        />
      </div>
      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Descripcion</p>
        <input
          id="desc"
          v-model="dataForm.descripcion"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="desc"
        />
      </div>
      <div class="px-1.5">
        <div class="flex items-center justify-end mb-4">
          <p>
            <button
              type="submit"
              class="px-4 py-2 text-lg font-bold text-gray-800 rounded cursor-pointer hover:shadow-md bg-yellowIw hover:bg-yellowIwHover"
            >
              Crear Ticket
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
  name: 'TicketForm',
  components: {
    LottieCharger,
  },
  data() {
    return {
      dataForm: {
        usuarioEnconder: null,
        administradorDecoder: null,
        valoracion: 0,
        referenciaPago: null,
        asunto: null,
        descripcion: null,
        status: 'Recién Creado',
      },
      errors: [],
    }
  },
  methods: {
    checkForm() {
      this.errors = []
      if (
        !this.dataForm.usuarioEnconder ||
        !this.dataForm.administradorDecoder ||
        !this.dataForm.administradorDecoder ||
        !this.dataForm.valoracion ||
        !this.dataForm.referenciaPago ||
        !this.dataForm.asunto ||
        !this.dataForm.descripcion ||
        !this.dataForm.status
      ) {
        this.errors.push('Rellena todos los campos para continuar.')
      }
      if (
        this.dataForm.usuarioEnconder &&
        this.dataForm.administradorDecoder &&
        this.dataForm.administradorDecoder &&
        this.dataForm.valoracion &&
        this.dataForm.referenciaPago &&
        this.dataForm.asunto &&
        this.dataForm.descripcion &&
        this.dataForm.status
      ) {
        this.$emit('crearTicket', this.dataForm)
        this.dataForm = {
          usuarioEnconder: null,
          administradorDecoder: null,
          valoracion: null,
          referenciaPago: null,
          asunto: null,
          descripcion: null,
          status: null,
        }
        this.errors = []
        this.$emit('closeForm')
      }
    },
  },
}
</script>
