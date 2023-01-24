<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="refound" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Devoluciones</h1>
      </div>
      <custom-button
        v-if="isLogin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Gestionar devolución"
      ></custom-button>
    </div>

    <div class="flex items-center justify-between mb-4">
      <div v-for="(data, index) in panelData" :key="index" class="w-full">
        <div class="p-3 mx-2 bg-white rounded-lg labelShadow">
          <p class="text-lg text-gray-600 font-nunito">{{ data.label }}</p>
          <p class="text-3xl font-bold">{{ data.value }}</p>
        </div>
      </div>
    </div>

    <div class="mx-2 bg-white rounded-lg h-108 labelShadow">
      <div class="flex justify-end mb-1">
        <search-input class="mt-3 mb-1 mr-2"></search-input>
      </div>
      <table class="w-full">
        <thead class="bg-gray-200 border border-gray-300 shadow-md">
          <tr>
            <th>Id</th>
            <th>Concepto</th>
            <th>Referencia</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr
            v-for="(refound, index) in refounds"
            :key="index"
            class="border-b"
          >
            <td>{{ refound.id }}</td>
            <td>{{ refound.concepto }}</td>
            <td>
              <span
                class="text-blue-500 cursor-pointer hover:underline"
                @click="goToRefound(refound.id)"
                >{{ refound.referencia }}</span
              >
            </td>
            <td>{{ refound.fecha }}</td>
            <td>{{ refound.total }} €</td>
            <td>{{ refound.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'
import SearchInput from '@/components/search/searchInput.vue'

export default {
  name: 'RefoundsPanel',
  components: {
    CustomButton,
    SearchInput,
  },
  data() {
    return {
      search: '',
      isLogin: true,
      panelData: [
        {
          label: 'Total',
          value: 134,
        },
        {
          label: 'En proceso',
          value: 70,
        },
        {
          label: 'Finalizadas',
          value: 60,
        },
      ],
      refounds: [
        {
          id: 1,
          devolucionId: 22,
          total: 120.3,
          concepto: 'Compra memoria Ram',
          referencia: '515adfas54',
          fecha: '09-12-2022 09:55:23',
          estado: 'DENEGADO',
          detallesEstado: 'TARJETA DENEGADA',
        },
        {
          id: 1,
          devolucionId: 22,
          total: 120.3,
          concepto: 'Compra memoria Ram',
          referencia: '515adfas54',
          fecha: '09-12-2022 09:55:23',
          estado: 'DENEGADO',
          detallesEstado: 'TARJETA DENEGADA',
        },
        {
          id: 1,
          devolucionId: 22,
          total: 120.3,
          concepto: 'Compra memoria Ram',
          referencia: '515adfas54',
          fecha: '09-12-2022 09:55:23',
          estado: 'DENEGADO',
          detallesEstado: 'TARJETA DENEGADA',
        },
      ],
    }
  },
  methods: {
    goToRefound(id) {
      this.$router.push('/devoluciones/' + parseInt(id))
    },
  },
  // computed: {
  //   ...mapGetters({
  //     isLogin: 'auth/isLogin',
  //   }),
  // },
}
</script>

<style scoped>
.labelShadow {
  -webkit-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  -moz-box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
  box-shadow: 3px 3px 3px 0px rgba(87, 87, 87, 0.4);
}
</style>
