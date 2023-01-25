<template>
  <div>
    <div class="flex items-center justify-center mb-2">
      <svg-icon name="alert" class="w-12 h-12" />
    </div>
    <div class="text-lg font-semibold text-center text-gray-800 font-nunito">
      <h1 class="mb-3">¿Seguro que quieres borrar este elemento?</h1>
      <div class="flex items-center justify-center">
        <custom-button
          style-button="bg-green-500 px-4 py-2 text-white rounded-lg mr-1"
          text="Sí, estoy seguro"
          @click="$emit('delete')"
        ></custom-button>
        <custom-button
          style-button="bg-red-500 px-8 py-2 text-white rounded-lg ml-1"
          text="No, cancelar"
          @click="$emit('toggleDeleteModal')"
        ></custom-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'DeleteForm',
  components: {
    CustomButton,
  },
}
</script>
