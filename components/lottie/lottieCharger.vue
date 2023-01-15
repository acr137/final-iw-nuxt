<template>
  <div>
    <lottie
      :width="width"
      :height="height"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'LottieCharger',
  components: {
    lottie,
  },
  props: {
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    lottieName: {
      type: String,
      default: 'hearthbeat',
    },
  },
  data() {
    return {
      animationData: null,
      anim: null, // for saving the reference to the animation
      lottieOptions: null,
    }
  },
  created() {
    this.animationData = require(`@/assets/lotties/${this.lottieName}.json`)
    this.lottieOptions = { animationData: this.animationData }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>
