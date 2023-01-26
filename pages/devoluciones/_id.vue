<template>
  <div class="px-10 py-6 h-186">
    <div class="mx-2 mb-10">
      <div class="flex items-center">
        <svg-icon name="refound" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">
          Devolución: {{ devolucion.devolucionId }}
        </h1>
        <custom-button
          style-button="bg-blue-400 hover:bg-blue-500 px-3 py-2 text-white rounded-lg font-bold ml-4"
          text="Volver"
          @click="returnToRefoundsList"
        ></custom-button>
      </div>
    </div>

    <div class="flex items-center mx-2">
      <div class="w-1/2 px-4 mr-2 bg-white rounded-lg h-108">
        <h2 class="mt-4 mb-12 text-2xl font-bold underline font-oswald">
          Datos de la devolución
        </h2>

        <div class="text-2xl">
          <p class="mb-4">
            <span class="font-bold">Referencia:</span>
            {{ devolucion.referencia }}
          </p>
          <p class="mb-4">
            <span class="font-bold">Total:</span> {{ devolucion.total }} €
          </p>
          <p class="mb-4">
            <span class="font-bold">Concepto:</span> {{ devolucion.concepto }}
          </p>
          <p class="mb-">
            <span class="font-bold">Fecha:</span> {{ devolucion.fecha }}
          </p>
          <p
            class="px-4 py-1 mt-10 font-bold text-white uppercase bg-yellowIw w-fit rounded-xl"
          >
            {{ devolucion.estado }}
          </p>
        </div>
      </div>
      <div class="w-1/2 ml-2 bg-white rounded-lg h-108">
        <h1
          class="mt-4 mb-20 text-3xl font-bold text-center underline font-oswald"
        >
          DETALLES
        </h1>
        <p class="mx-10 text-xl font-bold">{{ devolucion.detallesEstado }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'DetallesDevolucion',
  components: {
    CustomButton,
  },
  data() {
    return {
      isLogin: true,
      devolucion: {
        id: 1,
        devolucionId: 22,
        total: 120.32,
        concepto: 'Compra memoria ram',
        referencia: '2342342',
        fecha: '09-12-2022 09:55:23',
        estado: 'DEVOLUCION',
        detallesEstado: 'Tarjeta denegada',
      },
    }
  },
  // async created() {
  //   this.devolucion = await this.$store.dispatch(
  //     'refounds/getRefound',
  //     this.token
  //     this.$route.params.id
  //   )
  // },
  methods: {
    returnToRefoundsList() {
      this.$router.push('/devoluciones')
    },
    async getRefound() {},
  },
}
</script>

<style scoped>
.labelShadow {
  -webkit-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  -moz-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
}
</style>
