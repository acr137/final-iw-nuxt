<template>
  <div class="px-10 py-6 h-186">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="refound" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">
          Devolución: {{ devolucion.devolucionId }}
        </h1>
      </div>
      <custom-button
        v-if="isLogin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Gestionar devolución"
      ></custom-button>
    </div>

    <div class="flex items-center w-full">
      <div class="w-1/2 px-4 mr-2 bg-white rounded-lg h-128">
        <h2 class="mt-2 mb-10 text-xl font-bold underline font-oswald">
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
          <p class="mb-4">
            <span class="font-bold">Fecha:</span> {{ devolucion.fecha }}
          </p>
          <p
            class="px-4 py-1 text-white uppercase bg-blue-400 w-fit rounded-xl"
          >
            {{ devolucion.estado }}
          </p>
        </div>
      </div>
      <div class="w-1/2 ml-2 bg-white rounded-lg h-128">a</div>
    </div>
  </div>

  <!-- <div class="px-10 py-6 h-186">

    <div class="mx-2 mb-4">
      <div class="flex items-center">
        <h1 class="text-3xl font-bold font-oswald">Devolución de: #1234</h1>
      </div>
    </div>


    <div class="flex items-center justify-between mb-4">
      <div v-for="(data, index) in panelData" :key="index" class="w-full">
        <div class="p-3 mx-2 bg-white rounded-lg labelShadow">
          <p class="text-xl font-bold text-black font-nunito">
            {{ data.label }}
          </p>
          <p class="text-lg text-grey-600">{{ data.value }}</p>
        </div>
      </div>
    </div>


    <div class="flex justify-between mb-4">
      <div class="w-full">
        <div class="p-3 mx-2 bg-white rounded-lg labelShadow">
          <p class="text-xl font-bold text-black font-nunito">
            {{ refoundData.label }}
          </p>

          <div class="w-full mt-3 border-t border-gray-300"></div>
          <p class="text-lg text-grey-600">{{ refoundData.value.id }}</p>
          <br />
          <p class="text-lg text-grey-600">{{ refoundData.value.importe }}</p>
          <br />
          <p class="text-lg text-grey-600">
            {{ refoundData.value.description }}
          </p>
          <br />
          <p class="text-lg text-grey-600">{{ refoundData.value.date }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="p-3 mx-2 bg-white rounded-lg labelShadow">
          <p class="text-xl font-bold text-black font-nunito">
            {{ operarioData.label }}
          </p>

          <div class="w-full mt-3 border-t border-gray-300"></div>
          <p class="text-lg text-grey-600">{{ operarioData.value }}</p>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'DetallesDevolucion',
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
      panelData: [
        {
          label: 'Cliente',
          value: 'Eugenio Benit',
        },
        {
          label: 'Teléfono de contacto',
          value: '+34 653 234 764',
        },
        {
          label: 'Email',
          value: 'ebl29@alu.ua.es',
        },
      ],
      refoundData: {
        label: 'Detalles de la devolucion',
        value: {
          id: '#1234',
          importe: '$38.99',
          description: 'El producto se ha entregado en mal estado',
          date: '29 de diciembre de 2022',
        },
      },
      operarioData: {
        label: 'Observaciones del operario',
        value:
          'El producto ha sido recibido en su correcto y parece en correcto estado para efectuar la devolución.',
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
