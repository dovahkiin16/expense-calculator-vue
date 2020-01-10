<template>
    <v-container>
        <v-card>
            <v-card-title>Expenses</v-card-title>
            <v-divider/>
            <v-card-text class="pa-0">
                <expenses-list/>
            </v-card-text>
        </v-card>
        <v-btn bottom color="secondary" fab fixed right :to="form">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </v-container>
</template>

<script>
  import ExpensesList from '../components/expenses-list'

  export default {
    name: 'expenses',
    components: {ExpensesList},
    data() {
      return {
        form: {name: 'expense-form'}
      }
    }
  }
</script>

<style scoped>

</style>