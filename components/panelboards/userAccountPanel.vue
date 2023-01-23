<template>
<div>
    <div v-for="(user, index) in users" :key="index">
    <p>castañas</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'UserAccountPanel',
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
  