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
            :class="[{ 'bg-yellowIw': isAdmin }, { 'bg-blue-500': !isAdmin }]"
          >
            {{ user.tipoUsuario
            }}<svg-icon :name="userIcon" class="w-6 h-6 ml-2 fill-white" />
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
import { mapGetters } from 'vuex'
import EditForm from '@/components/forms/editForm.vue'

export default {
  name: 'UserDetails',
  components: {
    EditForm,
  },
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      isAdmin: 'auth/isAdmin',
    }),
    userIcon() {
      return this.isAdmin ? 'admin' : 'user'
    },
  },
  methods: {
    async editUser(user) {
      const data = {
        token: this.token,
        idUsuario: this.user.id,
        user,
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
