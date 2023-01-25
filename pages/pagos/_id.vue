<template>
  <div class="px-10 py-6 h-186">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="pay" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">
          Pago: {{ pago.devolucionId }}
        </h1>
      </div>
      <custom-button
        v-if="isLogin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Gestionar pago"
      ></custom-button>
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
            class="px-4 py-1 mt-10 font-bold text-white uppercase bg-blue-400 w-fit rounded-xl"
          >
            {{ pago.estado }}
          </p>
        </div>
      </div>
      <div class="w-1/2 ml-2 bg-white rounded-lg h-108">a</div>
    </div>

    <div class="flex items-center mx-2 mt-6">
      <custom-button
        text="Denegar"
        style-button="bg-gray-400 hover:bg-gray-500 px-4 py-2 text-white rounded-md mr-2 font-bold"
      >
        <template #icon>
          <svg-icon
            name="x"
            class="w-5 h-5 text-white fill-white stroke-white"
          />
        </template>
      </custom-button>
      <custom-button
        text="Confirmar pago"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-4 py-2 text-white rounded-md font-bold"
      >
        <template #icon>
          <svg-icon
            name="right-arrow"
            class="w-5 h-5 text-white fill-white stroke-white"
          />
        </template>
      </custom-button>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
.labelShadow {
  -webkit-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  -moz-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
}
</style>
