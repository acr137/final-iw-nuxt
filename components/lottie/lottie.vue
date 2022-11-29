<template>
  <div>
    <lottie
      :width="50"
      :height="50"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'LottieFiles',
  components: {
    lottie,
  },
  props: {
    lottieName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      animationData: null,
      anim: null, // for saving the reference to the animation
      lottieOptions: null,
    }
  },
  async mounted() {
    this.animationData = await import(
      '@/assets/lotties/' + this.lottieName + '.json'
    )
    this.lottieOptions = { animationData: this.animationData.default }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>
