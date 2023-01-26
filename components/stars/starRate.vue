<template>
  <div>
    <h1 class="text-2xl font-bold font-oswald">¡Valora el ticket!</h1>
    <div class="flex items-center justify-center my-5">
      <div v-for="(star, index) in stars" :key="index">
        <svg-icon
          name="star"
          class="w-20 h-20 cursor-pointer fill-white text-yellowIw hover:fill-current"
          :class="[{ 'text-yellowIw fill-current': star <= rating }]"
          @click="styleStars(star)"
        />
      </div>
    </div>
    <div class="flex items-center justify-center mt-2">
      <custom-button
        text="Borrar"
        style-button="bg-red-400 hover:bg-red-500 px-7 py-2 text-white rounded-md font-bold mr-1"
        @click="deleteRate"
      >
      </custom-button>
      <custom-button
        text="Confirmar"
        style-button="bg-green-400 hover:bg-green-500 px-4 py-2 text-white rounded-md font-bold ml-1"
        @click="$emit('rateTicket', rating)"
      >
      </custom-button>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/button/CustomButton.vue'

export default {
  name: 'StarRate',
  components: {
    CustomButton,
  },
  data() {
    return {
      rating: 0,
      stars: [1, 2, 3, 4, 5],
      noneSelectedColor: 'fill-white',
      selectedColor: 'text-yellowIw',
    }
  },
  methods: {
    styleStars(star) {
      this.rating = star
    },
    deleteRate() {
      this.rating = 0
    },
  },
}
</script>
