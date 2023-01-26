<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="pay" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Pagos</h1>
      </div>
      <custom-button
        v-if="isLogin && isAdmin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Crear pago"
        @click="toggleCreatePaymentModal"
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
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(pay, index) in searches" :key="index" class="border-b">
            <td>{{ pay.id }}</td>
            <td>{{ pay.concepto }}</td>
            <td>
              <span
                class="text-blue-500 cursor-pointer hover:underline"
                @click="goToPayment(pay.id)"
                >{{ pay.referencia }}</span
              >
            </td>
            <td>{{ pay.fecha }}</td>
            <td>{{ pay.total }} €</td>
            <td>{{ pay.estado }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <modal-base
      :open="showCreatePaymentModal"
      :has-close-icon="true"
      @closedModal="toggleCreatePaymentModal"
    >
      <template #mainContent>
        <payment-form
          @crearPago="crearPago"
          @closeForm="toggleCreatePaymentModal"
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
import PaymentForm from '@/components/forms/paymentForm.vue'

export default {
  name: 'PaymentsPanel',
  components: {
    CustomButton,
    SearchInput,
    ModalBase,
    PaymentForm,
  },
  data() {
    return {
      showCreatePaymentModal: false,
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
          label: 'Finalizados',
          value: 60,
        },
      ],
      payments: [],
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/getToken',
      isAdmin: 'auth/isAdmin',
      isLogin: 'auth/isLogin',
    }),
    searches() {
      if (this.payments) {
        return this.payments.filter((payment) => {
          return (
            payment.concepto
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            payment.referencia
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            payment.estado.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      } else {
        return {}
      }
    },
  },
  async created() {
    await this.getPayments()
  },
  methods: {
    toggleCreatePaymentModal() {
      this.showCreatePaymentModal = !this.showCreatePaymentModal
    },
    goToPayment(id) {
      this.$router.push('/pagos/' + parseInt(id))
    },
    setInput(inputValue) {
      this.search = inputValue
    },
    async getPayments() {
      try {
        this.payments = await this.$store.dispatch(
          'payments/getAllPayments',
          this.token
        )
      } catch (error) {
        console.log(error)
      }
    },
    async crearPago(payment) {
      const data = {
        token: this.token,
        payment,
      }

      try {
        await this.$store.dispatch('payments/makePayment', data)
        location.reload()
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
