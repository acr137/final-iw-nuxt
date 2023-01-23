<template>
  <div>
    <div class="flex items-center mx-1.5 mb-5">
      <h1 class="ml-16 text-4xl font-bold text-gray-800 font-oswald">
        Mis datos
      </h1>
    </div>
    <div class="flex items-center justify-center mb-4">
      <div
        :class="[
          'mx-16 relative w-full px-6 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:p-6',
        ]"
      >
        <edit-form />
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
      users: [
        {
          name: 'Alejandro',
          surname: 'Company',
        },
        {
          name: 'Hola',
          surname: 'Company',
        },
      ],
    }
  },
}
</script>
