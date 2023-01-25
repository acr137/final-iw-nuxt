<template>
  <div>
    <h1 class="text-lg font-bold font-oswald">Envía un mensaje</h1>
    <div class="flex items-center justify-center mb-5">
      <input
        v-model="message"
        class="w-full p-2 mt-5 border rounded-lg"
        type="text"
        placeholder="Escribe un mensaje"
      />
    </div>
    <div class="flex items-center justify-center mt-2">
      <custom-button
        text="Borrar"
        style-button="bg-red-400 hover:bg-red-500 px-4 py-2 text-white rounded-md font-bold mr-1"
        @click="deleteMessage"
      >
      </custom-button>
      <custom-button
        text="Enviar"
        style-button="bg-green-400 hover:bg-green-500 px-4 py-2 text-white rounded-md font-bold ml-1"
        @click="$emit('sendMessage', message)"
      >
      </custom-button>
    </div>
  </div>
</template>
<script>
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'MessagesSender',
  components: {
    CustomButton,
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    deleteMessage() {
      this.message = ''
    },
  },
}
</script>
