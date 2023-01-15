<template>
  <button
    class="flex items-center font-nunito"
    :class="styleButton"
    @click="clickButton"
  >
    <span class="mr-1">{{ text }}</span
    ><slot name="icon"></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    styleButton: {
      type: String,
      default: 'bg-blue-500 border text-white p-2 rounded-lg',
    },
    text: {
      type: String,
      default: 'MyButton',
    },
  },
  methods: {
    clickButton() {
      this.$emit('click')
    },
  },
}
</script>
