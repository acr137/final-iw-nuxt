<template>
  <div class="px-10 py-6">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="users" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Usuarios</h1>
      </div>
      <custom-button
        v-if="isLogin"
        style-button="bg-yellowIw hover:bg-yellowIwHover px-3 py-2 text-white rounded-lg font-bold"
        text="Nuevo usuario"
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
            <th>Nombre</th>
            <th>Email</th>
            <th>Empresa</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(user, index) in users" :key="index" class="border-b">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.nombreEmpresa }}</td>
            <td>{{ user.tipoUsuario }}</td>
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
  name: 'UsersPanel',
  components: {
    CustomButton,
    SearchInput,
  },
  data() {
    return {
      search: '',
      isLogin: true,
      users: [],
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

      usersMock: [
        {
          id: 1,
          name: 'Alejandro Company',
          email: 'alerinua@gmail.com',
          nombreEmpresa: 'Alejandro S.L',
          tipoUsuario: 'normal',
        },
        {
          id: 1,
          name: 'Alejandro Company',
          email: 'alerinua@gmail.com',
          nombreEmpresa: 'Alejandro S.L',
          tipoUsuario: 'normal',
        },
        {
          id: 1,
          name: 'Alejandro Company',
          email: 'alerinua@gmail.com',
          nombreEmpresa: 'Alejandro S.L',
          tipoUsuario: 'normal',
        },
      ],
    }
  },
  async created() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      try {
        // haz un login con postman y pilla el token y lo pones aquí abajo
        await this.$store.dispatch('users/getAllUsers', 'tokenaqui')
      } catch (error) {
        console.log(error)
      }
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
