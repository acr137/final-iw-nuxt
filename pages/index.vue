<template>
  <div class="flex">
    <menu-index
      class="w-1/5 pr-3"
      :current-label="currentLabel"
      @clickLabel="changeCurrentLabel"
    />
    <div class="w-4/5 bg-gray-100 block-shadow">
      <component :is="currentPanel" class="h-186"></component>
    </div>
  </div>
</template>

<script>
import MenuIndex from '@/components/menu/menu.vue'
import DashboardPanel from '~/components/panelboards/dashboardPanel.vue'
import UsersPanel from '~/components/panelboards/usersPanel.vue'
import TicketsPanel from '~/components/panelboards/ticketsPanel.vue'
import PaymentsPanel from '~/components/panelboards/paymentsPanel.vue'
import RefoundsPanel from '~/components/panelboards/refoundsPanel.vue'

export default {
  name: 'Index',
  components: {
    MenuIndex,
    DashboardPanel,
    UsersPanel,
    TicketsPanel,
    PaymentsPanel,
    RefoundsPanel,
  },
  data() {
    return {
      currentPanel: 'users-panel',
      currentLabel: 'home',
    }
  },
  methods: {
    changeCurrentLabel(label) {
      this.currentLabel = label
      switch (label) {
        case 'home': {
          this.currentPanel = 'dashboard-panel'
          break
        }

        case 'users': {
          this.currentPanel = 'users-panel'
          break
        }

        case 'ticket': {
          this.currentPanel = 'tickets-panel'
          break
        }

        case 'pay': {
          this.currentPanel = 'payments-panel'
          break
        }

        case 'refound': {
          this.currentPanel = 'refounds-panel'
          break
        }
      }
    },
  },
}
</script>

<style scoped>
.block-shadow {
  -webkit-box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
  -moz-box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
  box-shadow: -4px 0px 5px 0px rgba(158, 158, 158, 0.6);
}
</style>
