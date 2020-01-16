<template>
    <v-card>
        <v-card-title>This month's expenses</v-card-title>
        <v-divider/>
        <v-card-text>
            <expenses-pie/>
        </v-card-text>
    </v-card>
</template>

<script>
  import ExpensesPie from './expenses-pie'

  export default {
    name: 'expense-pie-card',
    components: {ExpensesPie}
  }
</script>

<style scoped>

</style>