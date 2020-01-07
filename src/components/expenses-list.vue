<template>
    <v-list two-line dense>
        <v-list-item
                v-for="expense in expenses"
                :key="expense.id"
        >
            <v-list-item-icon>
                <v-icon>mdi-{{getIcon(expense.expense_type)}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{expense.amount}} - {{expense.expense_type}}</v-list-item-title>
                <v-list-item-subtitle>{{expense.created_at}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'expenses-list',
    async mounted() {
      await this.fetchExpenses()
    },
    computed: {
      ...mapState('expenses', ['expenses', 'error'])
    },
    methods: {
      ...mapActions('expenses', ['fetchExpenses']),

      getIcon(expenseType) {
        switch (expenseType) {
          case 'rent':
            return 'home'
          case 'food':
            return 'food'
          case 'utilities':
            return 'flash'
          case 'transportation':
            return 'motorbike'
          case 'loan':
            return 'coin'
          case 'savings':
            return 'piggy-bank'
        }
      },

    }
  }
</script>

<style scoped>

</style>