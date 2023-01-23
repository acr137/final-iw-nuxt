<template>
  <nuxt-link
    class="flex items-center cursor-pointer"
    :class="{ 'bg-yellowIw px-2 py-1 rounded-lg': isSelected }"
    :to="label.link"
  >
    <svg-icon
      class="mr-2 w-7 h-7"
      :name="label.icon"
      :class="{ 'fill-white': isSelected }"
    />
    <p class="text-lg" :class="{ 'text-white font-bold': isSelected }">
      {{ label.name }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'LabelMenu',
  props: {
    label: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
