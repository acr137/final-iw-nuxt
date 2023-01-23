<template>
  <div
    class="flex items-center cursor-pointer"
    :class="{ 'bg-yellowIw px-2 py-1 rounded-lg': isSelected }"
    @click="clickEmit"
  >
    <svg-icon
      class="mr-2 w-7 h-7"
      :name="icon"
      :class="{ 'fill-white': isSelected }"
    />
    <p class="text-lg" :class="{ 'text-white font-bold': isSelected }">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LabelMenu',
  props: {
    name: {
      type: String,
      default: 'Label',
    },
    icon: {
      type: String,
      default: 'alert',
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickEmit() {
      this.$emit('clickLabel', this.icon)
    },
  },
}
</script>
