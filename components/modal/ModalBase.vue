<template>
  <div :class="modalOpened">
    <!-- Background overlay -->
    <div class="fixed inset-0 transition-opacity">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div
      :class="[
        'relative w-full px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:p-6',
        customContainerClass,
      ]"
    >
      <!-- svg icon close modal -->
      <div
        v-show="hasCloseIcon"
        class="absolute cursor-pointer top-5 right-5"
        @click="externalClick"
      >
        <svg-icon
          name="x"
          class="w-6 h-6 text-gray-500 stroke-current fill-transparent"
        />
      </div>

      <!-- Slot to insert different content if desired -->
      <slot name="mainContent"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    customContainerClass: {
      type: String,
      default: '',
    },
    hasCloseIcon: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      layoutStyle: [],
    }
  },
  computed: {
    modalOpened() {
      if (this.open)
        return 'z-50 fixed inset-x-0 px-4 pb-6 inset-0 sm:p-0 flex items-center justify-center'
      return 'hidden'
    },
  },
  methods: {
    externalClick() {
      this.$emit('closedModal')
    },
  },
}
</script>
