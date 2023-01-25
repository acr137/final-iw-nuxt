<template>
  <div class="px-10 py-6 h-186">
    <div class="flex items-center justify-between mx-2 mb-4">
      <div class="flex items-center">
        <svg-icon name="users" class="mr-3 w-9 h-9" />
        <h1 class="text-3xl font-bold font-oswald">Mi Cuenta</h1>
      </div>
    </div>

    <div class="flex items-center">
      <div class="w-1/2 mx-2 text-center bg-white rounded-xl">
        <div class="flex justify-center mt-10">
          <div class="flex justify-center w-40 h-40 bg-black rounded-full">
            <p class="flex items-center text-6xl font-bold text-white">
              {{ user.nombre.substr(0, 1) }}
            </p>
          </div>
        </div>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Nombre:</span>{{ user.nombre }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Email:</span>{{ user.email }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Password:</span>{{ user.password }}
        </p>
        <p class="mt-8 text-xl font-nunito">
          <span class="mr-2 font-bold">Empresa:</span>{{ user.nombreEmpresa }}
        </p>
        <div class="flex justify-center">
          <p
            class="px-4 py-2 mt-5 mb-4 font-bold text-white bg-blue-500 rounded-lg"
          >
            {{ user.tipoUsuario }}
          </p>
        </div>
      </div>
      <div class="w-1/2 mx-2 bg-white rounded-xl">
        <edit-form @editUser="editUser" />
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '@/components/forms/editForm.vue'

export default {
  name: 'UserDetails',
  components: {
    EditForm,
  },
  data() {
    return {
      user: {
        id: 1,
        nombre: 'Alejandro Company',
        email: 'alerinua@gmail.com',
        password: '223',
        nombreEmpresa: 'Alejandro S.L',
        tipoUsuario: 'normal',
      },
    }
  },
  computed: {
    maskedPassword() {
      return (
        '*'.repeat(this.user.password.length - 2) + this.user.password.slice(-2)
      )
    },
  },
  methods: {
    async editUser(data) {
      try {
        await this.$store.dispatch(
          'users/editUser',
          this.token,
          this.user.id,
          data
        )
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
