<template>
  <div class="flex items-center px-1 border rounded-lg">
    <svg-icon
      name="search"
      class="mr-2 text-gray-400 stroke-current fill-transparent w-7 h-7"
    />
    <input
      :value="value"
      class="p-2"
      type="text"
      placeholder="Buscar"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: [String, Number],
      default: '',
      required: false,
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'text',
          'password',
          'email',
          'number',
          'tel',
          'search',
        ].includes(value)
      },
    },
  },
}
</script>
