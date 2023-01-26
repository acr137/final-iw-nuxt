<template>
<div>
  <div v-if="user" class="px-10 py-6 h-186">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="users" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Usuario: {{ user.id }}</h1>
        <custom-button
          style-button="bg-blue-400 hover:bg-blue-500 px-3 py-2 text-white rounded-lg font-bold ml-4"
          text="Volver"
          @click="returnToUserList"
        ></custom-button>
      </div>
      <custom-button
        v-if="isAdmin"
        style-button="bg-red-400 hover:bg-red-500 px-3 py-2 text-white rounded-lg font-bold"
        text="Eliminar usuario"
        @click="toggleDeleteModal"
      ></custom-button>
    </div>

    <div class="flex items-center">
      <div
        class="mx-2 text-center bg-white rounded-xl"
        :class="[{ 'w-1/2': isAdmin }, { 'w-full': !isAdmin }]"
      >
        <div class="flex justify-center mt-10">
          <div class="flex justify-center w-40 h-40 bg-black rounded-full">
            <p class="flex items-center text-6xl font-bold text-white">
              {{ user.nombre.substr(0, 1) }}
            </p>
          </div>
        </div>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Identificación:</span>{{ user.id }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Nombre:</span>{{ user.nombre }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Email:</span>{{ user.email }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Empresa:</span>{{ user.nombreEmpresa }}
        </p>
        <div class="flex justify-center">
          <p
            class="flex items-center px-4 py-2 mt-5 mb-4 font-bold text-white uppercase rounded-lg"
            :class="[
              { 'bg-yellowIw': userIcon === 'admin' },
              { 'bg-blue-500': userIcon !== 'admin' },
            ]"
          >
            {{ user.tipoUsuario
            }}<svg-icon :name="userIcon" class="w-6 h-6 ml-2 fill-white" />
          </p>
        </div>
      </div>
      <div v-if="isAdmin" class="w-1/2 mx-2 bg-white rounded-xl">
        <edit-form @editUser="editUser" />
      </div>
    </div>

    <modal-base
      :open="showDeleteModal"
      :has-close-icon="true"
      @closedModal="toggleDeleteModal"
    >
      <template #mainContent>
        <delete-form
          @delete="deleteUser"
          @toggleDeleteModal="toggleDeleteModal"
        />
      </template>
    </modal-base>
  </div>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import EditForm from '@/components/forms/editForm.vue'
import CustomButton from '~/components/button/CustomButton.vue'
import DeleteForm from '@/components/forms/deleteForm.vue'

export default {
  name: 'UserDetails',
  components: {
    EditForm,
    CustomButton,
    DeleteForm,
  },
  data() {
    return {
      showDeleteModal: false,
      user: null
    }
  },
  computed: {
    ...mapGetters({
      isAdmin: 'auth/isAdmin',
      token: 'auth/getToken'
    }),
    userIcon() {
      return this.user.tipoUsuario === 'admin' ? 'admin' : 'user'
    },
  },
  async created() {
    await this.getUser()
  },
  methods: {
    async getUser() {
      const params = {
        token: this.token,
        idUsuario: parseInt(this.$route.params.id)
      }

      try {
        this.user = await this.$store.dispatch('users/getUser', params)
      } catch (error) {
        console.log(error)
      }
    },
    returnToUserList() {
      this.$router.push('/usuarios')
    },
    toggleDeleteModal() {
      this.showDeleteModal = !this.showDeleteModal
    },
    async deleteUser() {
      const params = {
        token: this.token,
        idUsuario: parseInt(this.user.id)
      }

      try {
        await this.$store.dispatch('users/deleteUser', params)
        this.toggleDeleteModal()
        this.$router.push('/usuarios')
      } catch (error) {
        this.toggleDeleteModal()
        console.log(error)
      }
    },
    async editUser(user) {
      const data = {
        token: this.token,
        idUsuario: this.user.id,
        user
      }

      try {
        await this.$store.dispatch('users/editUser', data)
        location.reload()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
