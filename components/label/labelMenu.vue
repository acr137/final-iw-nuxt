<template>
  <div class="flex items-center cursor-pointer">
    <svg-icon class="mr-2 w-7 h-7" :name="icon" />
    <p class="text-lg">{{ name }}</p>
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
  },
}
</script>
