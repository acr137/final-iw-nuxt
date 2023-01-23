<template>
  <div class="flex items-center px-1 border rounded-lg">
    <svg-icon
      name="search"
      class="mr-2 text-gray-400 stroke-current fill-transparent w-7 h-7"
    />
    <input v-model="searchUser" class="p-2" type="text" placeholder="Buscar" />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
}
</script>
