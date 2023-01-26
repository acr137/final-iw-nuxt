<template>
  <div class="px-10 py-6 h-186">
    <div class="mx-2 mb-10">
      <div class="flex items-center">
        <svg-icon name="pay" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">
          Pago: {{ pago.devolucionId }}
        </h1>
        <custom-button
          style-button="bg-blue-400 hover:bg-blue-500 px-3 py-2 text-white rounded-lg font-bold ml-4"
          text="Volver"
          @click="returnToPaymentsList"
        ></custom-button>
      </div>
    </div>

    <div class="flex items-center mx-2">
      <div class="w-1/2 px-4 mr-2 bg-white rounded-lg h-108">
        <h2 class="mt-4 mb-12 text-2xl font-bold underline font-oswald">
          Datos del pago
        </h2>

        <div class="text-2xl">
          <p class="mb-4">
            <span class="font-bold">Referencia:</span>
            {{ pago.referencia }}
          </p>
          <p class="mb-4">
            <span class="font-bold">Total:</span> {{ pago.total }} €
          </p>
          <p class="mb-4">
            <span class="font-bold">Concepto:</span> {{ pago.concepto }}
          </p>
          <p class="mb-">
            <span class="font-bold">Fecha:</span> {{ pago.fecha }}
          </p>
          <p
            class="px-4 py-1 mt-10 font-bold text-white uppercase bg-yellowIw w-fit rounded-xl"
          >
            {{ pago.estado }}
          </p>
        </div>
      </div>
      <div class="w-1/2 ml-2 bg-white rounded-lg h-108">
        <h1
          class="mt-4 mb-20 text-3xl font-bold text-center underline font-oswald"
        >
          DETALLES
        </h1>
        <p class="mx-10 text-xl font-bold">{{ pago.detallesEstado }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'DetallesPago',
  components: {
    CustomButton,
  },
  data() {
    return {
      isLogin: true,
      pago: {
        id: 1,
        devolucionId: 22,
        total: 120.32,
        concepto: 'Compra memoria ram',
        referencia: '2342342',
        fecha: '09-12-2022 09:55:23',
        estado: 'PAGADO',
        detallesEstado: 'Pago efectuado correctamente',
      },
    }
  },
  // async created() {
  //   this.pago = await this.$store.dispatch(
  //     'payments/getPayment',
  //     this.token
  //     this.$route.params.id
  //   )
  // },
  methods: {
    returnToPaymentsList() {
      this.$router.push('/pagos')
    },
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
