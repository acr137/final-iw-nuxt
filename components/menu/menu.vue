<template>
  <div class="text-gray-900">
    <label-menu
      :label="dashboardLabel"
      :is-selected="'home' === currentLabel"
    />
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
        <label-menu
          class="mb-2"
          :label="line"
          :is-selected="line.icon === currentLabel"
        />
      </div>
    </div>
    <hr class="my-1 border" />
    <div>
      <p class="mb-1 font-bold text-gray-600">SETTINGS</p>
      <label-menu
        :label="userConfigLabel"
        :is-selected="'config' === currentLabel"
      />
    </div>
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
      dashboardLabel: {
        name: 'Dashboard',
        icon: 'home',
        link: '/',
      },
      userConfigLabel: {
        name: 'My config',
        icon: 'config',
        link: '/my-account',
      },
      openMenu: true,
      lines: [
        {
          name: 'Usuarios',
          icon: 'users',
          link: '/usuarios',
        },
        {
          name: 'Pagos',
          icon: 'pay',
          link: '/pagos',
        },
        {
          name: 'Tickets',
          icon: 'ticket',
          link: '/tickets',
        },
        {
          name: 'Devoluciones',
          icon: 'refound',
          link: '/devoluciones',
        },
      ],
    }
  },
  computed: {
    iconMenu() {
      return this.openMenu ? 'arrow-up' : 'arrow-down'
    },
    currentLabel() {
      let currentLabel = 'home'
      if (this.$route.path === '/usuarios') currentLabel = 'users'
      if (this.$route.path === '/pagos') currentLabel = 'pay'
      if (this.$route.path === '/tickets') currentLabel = 'ticket'
      if (this.$route.path === '/devoluciones') currentLabel = 'refound'
      if (this.$route.path === '/my-account') currentLabel = 'config'

      return currentLabel
    },
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu
    },
  },
}
</script>
