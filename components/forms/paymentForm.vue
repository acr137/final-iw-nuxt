<template>
  <div class="p-10">
    <div class="flex items-center mx-1.5 mb-5">
      <h1 class="mr-2 text-4xl font-bold text-gray-800 uppercase font-oswald">
        Crear pago
      </h1>
      <lottie-charger
        :width="150"
        :height="150"
        :lottie-name="'pago'"
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
        <p class="font-bold uppercase">Concepto</p>
        <input
          id="concepto"
          v-model="dataForm.concepto"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="concepto"
        />
      </div>

      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Referencia</p>
        <input
          id="referencia"
          v-model="dataForm.referencia"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="referencia"
        />
      </div>

      <div class="w-full p-1.5 mb-1.5">
        <p class="font-bold uppercase">Total</p>
        <input
          id="total"
          v-model="dataForm.total"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="number"
          name="total"
        />
      </div>

      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Estado</p>
        <input
          id="estado"
          v-model="dataForm.estado"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="estado"
        />
      </div>
      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Detalles estado</p>
        <input
          id="desc"
          v-model="dataForm.detallesEstado"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="text"
          name="desc"
        />
      </div>
      <div class="w-full p-1.5 mb-3">
        <p class="font-bold uppercase">Fecha</p>
        <input
          id="fecha"
          v-model="dataForm.fecha"
          class="w-full p-2 bg-gray-200 border border-gray-300 rounded"
          type="date"
          name="fecha"
        />
      </div>
      <div class="px-1.5">
        <div class="flex items-center justify-end mb-4">
          <p>
            <button
              type="submit"
              class="px-4 py-2 text-lg font-bold text-gray-800 rounded cursor-pointer hover:shadow-md bg-yellowIw hover:bg-yellowIwHover"
            >
              Crear Pago
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
  name: 'PaymentForm',
  components: {
    LottieCharger,
  },
  data() {
    return {
      dataForm: {
        concepto: null,
        total: null,
        devolucionId: 0,
        referencia: null,
        fecha: null,
        estado: null,
        detallesEstado: null,
      },
      errors: [],
    }
  },
  methods: {
    checkForm() {
      this.errors = []
      if (
        !this.dataForm.concepto ||
        !this.dataForm.total ||
        !this.dataForm.referencia ||
        !this.dataForm.fecha ||
        !this.dataForm.estado ||
        !this.dataForm.detallesEstado
      ) {
        this.errors.push('Rellena todos los campos para continuar.')
      }
      if (
        this.dataForm.concepto &&
        this.dataForm.total &&
        this.dataForm.referencia &&
        this.dataForm.fecha &&
        this.dataForm.estado &&
        this.dataForm.detallesEstado
      ) {
        this.$emit('crearPago', this.dataForm)
        this.dataForm = {
          concepto: null,
          total: null,
          referencia: null,
          fecha: null,
          estado: null,
          detallesEstado: null,
        }
        this.errors = []
        this.$emit('closeForm')
      }
    },
  },
}
</script>
