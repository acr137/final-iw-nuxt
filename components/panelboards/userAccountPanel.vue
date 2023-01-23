<template>
  <div>
    <div class="flex items-center mx-1.5 mb-5">
      <h1 class="ml-16 text-4xl font-bold text-gray-800 font-oswald">
        Mis datos
      </h1>
    </div>
    <div class="flex justify-center mb-4">
      <div
        class="relative flex items-center justify-center w-full px-6 pt-5 pb-4 mx-16 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:p-6"
      >
        <div class="w-full p-10">
          <div
            class="flex items-center w-40 h-40 m-auto bg-black rounded-full shadow-md "
          >
            <p class="m-auto text-6xl font-medium text-center text-white">{{initial}}</p>
          </div>

          <!-- line divider -->
          <div class="w-full mt-3 border-t border-gray-300"></div>
          <!-- USER NAME -->
          <div class="flex w-full p-1.5">
            <p class="text-base font-medium uppercase">Nombre:</p>
            <p class="ml-2">{{ user.name }}</p>
          </div>
          <!-- USER EMAIL -->
          <div class="flex w-full p-1.5 mb-1.5">
            <p class="text-base font-medium uppercase">Email:</p>
            <p class="ml-2">{{ user.email }}</p>
          </div>
          <!-- USER PASSWORD -->
          <div class="flex w-full p-1.5 mb-1.5">
            <p class="text-base font-medium uppercase">Contraseña:</p>
            <p class="ml-2">{{ maskedPassword }}</p>
          </div>
          <!-- USER COMPANY -->
          <div class="flex w-full p-1.5 mb-3">
            <p class="text-base font-medium uppercase">Mi Empresa:</p>
            <p class="ml-2">{{ user.company }}</p>
          </div>
        </div>
      </div>

      <div
        :class="[
          'mx-16 relative w-full px-6 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:p-6',
        ]"
      >
        <edit-form />
      </div>
    </div>
  </div>
</template>

<script>
import EditForm from '@/components/forms/editForm.vue'

export default {
  name: 'UserAccountPanel',
  components: {
    EditForm,
  },
  data() {
    return {
      user: {
        name: 'Alejandro',
        company: 'Company',
        email: 'alejandro@example.com',
        password: '123456789',
      },
    }
  },
  computed: {
    maskedPassword() {
      return (
        '*'.repeat(this.user.password.length - 2) + this.user.password.slice(-2)
      )
    },
    initial() {
      return this.user.name.match(/^[A-Z]/)[0]
    },
  },
}
</script>
