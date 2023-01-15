<template>
  <div class="text-gray-900">
    <label-menu name="Dashboard" icon="home" />
    <hr class="my-1 border" />
    <div class="flex items-center justify-between mb-1">
      <p class="font-bold text-gray-600">CMS</p>
      <svg-icon
        :name="iconMenu"
        class="cursor-pointer w-7 h-7"
        @click="toggleMenu"
      />
    </div>
    <div v-if="openMenu" class="mb-4">
      <div v-for="(line, index) in lines" :key="index">
        <label-menu class="mb-2" :name="line.name" :icon="line.icon" />
      </div>
    </div>
    <hr class="border" />
  </div>
</template>

<script>
import LabelMenu from '@/components/label/labelMenu.vue'

export default {
  name: 'MenuIndex',
  components: {
    LabelMenu,
  },
  data() {
    return {
      openMenu: true,
      lines: [
        {
          name: 'Usuarios',
          icon: 'user-card',
        },
        {
          name: 'Pagos',
          icon: 'pay',
        },
        {
          name: 'Tickets',
          icon: 'ticket',
        },
        {
          name: 'Devoluciones',
          icon: 'refound',
        },
      ],
    }
  },
  computed: {
    iconMenu() {
      return this.openMenu ? 'arrow-up' : 'arrow-down'
    },
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu
    },
  },
}
</script>
