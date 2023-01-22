<template>
  <div>
    <div v-for="(user, index) in users" :key="index">
      <p>{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersPanel',
  data() {
    return {
      users: [
        {
          name: 'Alejandro',
          surname: 'Company',
        },
        {
          name: 'Hola',
          surname: 'Company',
        },
      ],
    }
  },
}
</script>
