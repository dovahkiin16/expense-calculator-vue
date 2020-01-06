<template>
    <v-container>
        <v-card>
            <v-card-title>Expenses</v-card-title>
            <v-card-text>
                <expenses-list/>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
  import ExpensesList from '../components/expenses-list'

  export default {
    name: 'expenses',
    components: {ExpensesList}
  }
</script>

<style scoped>

</style>