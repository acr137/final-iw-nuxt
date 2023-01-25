<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="ticket" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Tickets</h1>
      </div>
      <custom-button
        v-if="isLogin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Crear ticket"
        @click="toggleCreateTicketModal"
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
        ></search-input>
      </div>
      <table class="w-full">
        <thead class="bg-gray-200 border border-gray-300 shadow-md">
          <tr>
            <th>Usuario</th>
            <th>Tipo</th>
            <th>Referencia</th>
            <th>Asunto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(ticket, index) in searches" :key="index" class="border-b">
            <td>{{ ticket.usuarioEncoder }}</td>
            <td>{{ ticket.administradorEncoder }}</td>
            <td>
              <span
                class="text-blue-500 cursor-pointer hover:underline"
                @click="goToTicket(ticket.referenciaPago)"
                >{{ ticket.referenciaPago }}</span
              >
            </td>
            <td>{{ ticket.asunto }}</td>
            <td>{{ ticket.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <modal-base
      :open="showCreateTicketModal"
      :has-close-icon="true"
      @closedModal="toggleCreateTicketModal"
    >
      <template #mainContent>
        <ticket-form
          @crearTicket="crearTicket"
          @closeForm="toggleCreateTicketModal"
        />
      </template>
    </modal-base>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'
import SearchInput from '@/components/search/searchInput.vue'
import TicketForm from '@/components/forms/ticketForm.vue'
import ModalBase from '@/components/modal/ModalBase.vue'

export default {
  name: 'TicketsPanel',
  components: {
    CustomButton,
    SearchInput,
    TicketForm,
    ModalBase,
  },
  data() {
    return {
      showCreateTicketModal: false,
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
          label: 'Finalizados',
          value: 60,
        },
      ],
      tickets: [
        {
          id: 1,
          usuarioEncoder: 'juan@gmail.com',
          administradorEncoder: 'admin@gmail.com',
          referenciaPago: '56asdasd',
          asunto: 'Problema con la transacción',
          status: 'ESPERA',
        },
        {
          id: 1,
          usuarioEncoder: 'gabriel@gmail.com',
          administradorEncoder: 'admin@gmail.com',
          referenciaPago: '56asdasd',
          asunto: 'Problema con la transacción',
          status: 'EN MARCHA',
        },
        {
          id: 1,
          usuarioEncoder: 'alejandro@gmail.com',
          administradorEncoder: 'admin@gmail.com',
          referenciaPago: '56asdasd',
          asunto: 'Problema con la transacción',
          status: 'ESPERA',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/getToken',
    }),
    searches() {
      if (this.tickets) {
        return this.tickets.filter((ticket) => {
          return (
            ticket.usuarioEncoder
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            ticket.administradorEncoder
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            ticket.referenciaPago
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            ticket.status.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      } else {
        return {}
      }
    },
  },
  // async created() {
  //   await this.getAllTickets()
  // },
  methods: {
    setInput(inputValue) {
      this.search = inputValue
    },
    goToTicket(referencia) {
      this.$router.push('/tickets/' + parseInt(referencia))
    },
    toggleCreateTicketModal() {
      this.showCreateTicketModal = !this.showCreateTicketModal
    },
    async crearTicket(ticket) {
      try {
        await this.$store.dispatch('tickets/crearTicket', this.token, ticket)
        this.$router.push('/tickets')
      } catch (error) {
        console.log(error)
      }
    },
    async getAllTickets() {
      try {
        this.tickets = await this.$store.dispatch(
          'tickets/getAllTickets',
          this.token
        )
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
