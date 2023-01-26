<template>
  <div>
    <div v-if="ticket" class="px-10 py-6 h-186">
      <div class="flex items-center mx-2 mb-4">
        <div class="flex items-center">
          <svg-icon name="ticket" class="mr-3 w-9 h-9" />
          <h1 class="text-3xl font-bold font-oswald">
            Ticket: {{ ticket.id }}
          </h1>
          <custom-button
            style-button="bg-blue-400 hover:bg-blue-500 px-3 py-2 text-white rounded-lg font-bold ml-4"
            text="Volver"
            @click="returnToTicketsList"
          ></custom-button>
        </div>
      </div>

      <div class="flex items-center mx-2">
        <div class="w-1/2 px-4 mr-2 bg-white rounded-lg h-108">
          <h2
            class="mt-4 mb-20 text-3xl font-bold text-center underline font-oswald"
          >
            DATOS
          </h2>

          <div class="text-2xl">
            <p class="mb-4">
              <span class="font-bold">Referencia:</span>
              {{ ticket.referenciaPago }}
            </p>
            <p class="mb-4">
              <span class="font-bold">Usuario:</span>
              {{ ticket.usuarioEncoder }}
            </p>
            <p class="mb-4">
              <span class="font-bold">Admin:</span>
              {{ ticket.administradorDecoder }}
            </p>
            <p class="mb-4">
              <span class="font-bold">Valoración:</span>
              {{ ticket.valoracion }}
            </p>
            <p
              class="px-4 py-1 mt-10 font-bold text-white uppercase bg-yellowIw w-fit rounded-xl"
            >
              {{ ticket.status }}
            </p>
          </div>
        </div>
        <div class="w-1/2 ml-2 bg-white rounded-lg h-108">
          <h1
            class="mt-4 mb-20 text-3xl font-bold text-center underline font-oswald"
          >
            ASUNTO
          </h1>
          <p class="mx-10 text-xl font-bold">{{ ticket.asunto }}</p>
        </div>
      </div>

      <div class="flex items-center justify-between mx-2 mt-6">
        <custom-button
          v-if="isAdmin"
          text="Eliminar ticket"
          style-button="bg-red-400 hover:bg-red-500 px-4 py-2 text-white rounded-md mr-2 font-bold"
          @click="toggleDeleteModal"
        >
          <template #icon>
            <svg-icon
              name="x"
              class="w-5 h-5 text-white fill-white stroke-white"
            />
          </template>
        </custom-button>
        <div v-else></div>
        <div class="flex items-center">
          <custom-button
            text="Valorar ticket"
            style-button="bg-blue-400 hover:bg-blue-500 px-4 py-2 text-white rounded-md font-bold mr-3"
            @click="toggleRatingModal"
          >
            <template #icon>
              <svg-icon name="rate" class="w-7 h-7" />
            </template>
          </custom-button>
          <custom-button
            text="Enviar mensaje"
            style-button="bg-yellowIw hover:bg-yellowIwHover px-4 py-2 text-white rounded-md font-bold"
            @click="toggleMessageModal"
          >
            <template #icon>
              <svg-icon name="send" class="w-7 h-7" />
            </template>
          </custom-button>
        </div>
      </div>

      <modal-base
        :open="showDeleteModal"
        :has-close-icon="true"
        @closedModal="toggleDeleteModal"
      >
        <template #mainContent>
          <delete-form
            @delete="deleteTicket"
            @toggleDeleteModal="toggleDeleteModal"
          />
        </template>
      </modal-base>

      <modal-base
        :open="showMessageModal"
        :has-close-icon="true"
        @closedModal="toggleMessageModal"
      >
        <template #mainContent>
          <messages-sender @sendMessage="sendMessage"></messages-sender>
        </template>
      </modal-base>

      <modal-base
        :open="showRatingModal"
        :has-close-icon="true"
        @closedModal="toggleRatingModal"
      >
        <template #mainContent>
          <star-rate @rateTicket="rateTicket"></star-rate>
        </template>
      </modal-base>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalBase from '@/components/modal/ModalBase.vue'
import CustomButton from '@/components/button/CustomButton.vue'
import DeleteForm from '@/components/forms/deleteForm.vue'
import StarRate from '@/components/stars/starRate.vue'
import MessagesSender from '@/components/messages/messagesSender.vue'

export default {
  name: 'TicketDetails',
  components: {
    CustomButton,
    ModalBase,
    DeleteForm,
    StarRate,
    MessagesSender,
  },
  data() {
    return {
      showDeleteModal: false,
      showMessageModal: false,
      showRatingModal: false,
      isLogin: true,
      ticket: {},
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/getToken',
      isAdmin: 'auth/isAdmin',
    }),
  },
  async created() {
    await this.getTicket()
  },
  methods: {
    returnToTicketsList() {
      this.$router.push('/tickets')
    },
    toggleDeleteModal() {
      this.showDeleteModal = !this.showDeleteModal
    },
    toggleMessageModal() {
      this.showMessageModal = !this.showMessageModal
    },
    toggleRatingModal() {
      this.showRatingModal = !this.showRatingModal
    },
    async getTicket() {
      const params = {
        token: this.token,
        idTicket: parseInt(this.$route.params.id),
      }

      try {
        this.ticket = await this.$store.dispatch('tickets/getTicket', params)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTicket() {
      const params = {
        token: this.token,
        idTicket: this.ticket.id,
      }

      try {
        await this.$store.dispatch('tickets/deleteTicket', params)
        this.$router.push('/tickets')
      } catch (error) {
        this.toggleDeleteModal()
        console.log(error)
      }
    },
    async sendMessage(message) {
      const data = {
        token: this.token,
        idTicket: this.ticket.id,
        message,
      }

      try {
        await this.$store.dispatch('tickets/sendMessage', data)
        this.toggleMessageModal()
      } catch (error) {
        this.toggleMessageModal()
        console.log(error)
      }
    },
    async rateTicket(rating) {
      const data = {
        token: this.token,
        idTicket: this.ticket.id,
        numero: rating,
      }

      try {
        await this.$store.dispatch('tickets/rateTicket', data)
        location.reload()
        this.toggleRatingModal()
      } catch (error) {
        this.toggleRatingModal()
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
