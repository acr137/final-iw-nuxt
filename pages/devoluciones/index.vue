<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="refound" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Devoluciones</h1>
      </div>
      <custom-button
        v-if="isLogin && isAdmin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Crear devolución"
        @click="toggleCreateRefoundModal"
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
        <search-input
          type="text"
          :value="search"
          class="mt-3 mb-1 mr-2"
          @input="setInput"
        />
      </div>
      <table class="w-full">
        <thead class="bg-gray-200 border border-gray-300 shadow-md">
          <tr>
            <th>Id</th>
            <th>Concepto</th>
            <th>Referencia</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr
            v-for="(refound, index) in searches"
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
            <td>{{ refound.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-base
      :open="showCreateRefoundModal"
      :has-close-icon="true"
      @closedModal="toggleCreateRefoundModal"
    >
      <template #mainContent>
        <refound-form
          @crearDevolucion="crearDevolucion"
          @closeForm="toggleCreateRefoundModal"
        />
      </template>
    </modal-base>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'
import SearchInput from '@/components/search/searchInput.vue'
import ModalBase from '@/components/modal/ModalBase.vue'
import RefoundForm from '@/components/forms/refoundForm.vue'

export default {
  name: 'RefoundsPanel',
  components: {
    CustomButton,
    SearchInput,
    ModalBase,
    RefoundForm,
  },
  data() {
    return {
      showCreateRefoundModal: false,
      search: '',
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
          concepto: 'Compra memoria rom',
          referencia: 'asdasd',
          fecha: '09-12-2022 09:55:23',
          estado: 'FINALIZADO',
          detallesEstado: 'TARJETA APROBADA',
        },
        {
          id: 1,
          devolucionId: 22,
          total: 120.3,
          concepto: 'Compra disco duro',
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
  // async created() {
  //   await this.getPayments()
  // },
  computed: {
    ...mapGetters({
      token: 'auth/getToken',
      isLogin: 'auth/isLogin',
      isAdmin: 'auth/isAdmin',
    }),
    searches() {
      if (this.refounds) {
        return this.refounds.filter((refound) => {
          return (
            refound.concepto
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            refound.referencia
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            refound.estado.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      } else {
        return {}
      }
    },
  },
  // async created() {
  //   await this.getRefounds()
  // },
  methods: {
    goToRefound(id) {
      this.$router.push('/devoluciones/' + parseInt(id))
    },
    toggleCreateRefoundModal() {
      this.showCreateRefoundModal = !this.showCreateRefoundModal
    },
    setInput(inputValue) {
      this.search = inputValue
    },
    async getRefounds() {
      try {
        this.refounds = await this.$store.dispatch(
          'refounds/getAllRefounds',
          this.token
        )
      } catch (error) {
        console.log(error)
      }
    },
    async crearDevolucion(devolucion) {
      try {
        await this.$store.dispatch(
          'refounds/makeRefound',
          this.token,
          devolucion
        )
        this.$router.push('/devoluciones')
      } catch (error) {
        console.log(error)
      }
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
