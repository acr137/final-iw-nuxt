<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="users" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Usuarios</h1>
      </div>
      <custom-button
        v-if="isLogin && isAdmin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Nuevo usuario"
        @click="toggleCreateUserModal"
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
            <th>Nombre</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(user, index) in searches" :key="index" class="border-b">
            <td>{{ user.id }}</td>
            <td>
              <span
                class="text-blue-500 cursor-pointer hover:underline"
                @click="goToUser(user.id)"
                >{{ user.nombre }}</span
              >
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.nombreEmpresa }}</td>
            <td>{{ user.tipoUsuario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-base
      :open="showCreateUserModal"
      :has-close-icon="true"
      @closedModal="toggleCreateUserModal"
    >
      <template #mainContent>
        <user-form
          @crearUsuario="crearUsuario"
          @closeForm="toggleCreateUserModal"
        />
      </template>
    </modal-base>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomButton from '@/components/button/CustomButton.vue'
import SearchInput from '@/components/search/searchInput.vue'
import UserForm from '@/components/forms/userForm.vue'
import ModalBase from '@/components/modal/ModalBase.vue'

export default {
  name: 'UsersPanel',
  components: {
    CustomButton,
    SearchInput,
    UserForm,
    ModalBase,
  },
  data() {
    return {
      showCreateUserModal: false,
      search: '',
      isLogin: true,
      panelData: [
        {
          label: 'Total',
          value: 134,
        },
        {
          label: 'Admins',
          value: 70,
        },
        {
          label: 'Offline',
          value: 60,
        },
      ],
      users: [],
    }
  },
  computed: {
    ...mapGetters({
      token: 'auth/getToken',
      isAdmin: 'auth/isAdmin',
    }),
    searches() {
      if (this.users) {
        return this.users.filter((user) => {
          return (
            user.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
            user.email.toLowerCase().includes(this.search.toLowerCase()) ||
            user.nombreEmpresa
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            user.tipoUsuario.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      } else {
        return {}
      }
    },
  },
  async created() {
    await this.getUsers()
  },
  methods: {
    toggleCreateUserModal() {
      this.showCreateUserModal = !this.showCreateUserModal
    },
    async getUsers() {
      try {
        this.users = await this.$store.dispatch('users/getAllUsers', this.token)
      } catch (error) {
        console.log(error)
      }
    },
    goToUser(id) {
      this.$router.push('/usuarios/' + parseInt(id))
    },
    setInput(inputValue) {
      this.search = inputValue
    },
    async crearUsuario(user) {
      const data = {
        token: this.token,
        user,
      }

      try {
        await this.$store.dispatch('users/createUser', data)
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
