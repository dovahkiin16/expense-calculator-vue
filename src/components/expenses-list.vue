<template>
    <v-list two-line dense>
        <v-list-item
                v-for="expense in expenses"
                :key="expense.id"
        >
            <v-list-item-icon>
                <v-icon :color="expense.need ? 'success' : 'error'">mdi-{{getIcon(expense.expense_type)}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title v-text="`${expense.amount} - ${expense.expense_type}`"/>
                <v-list-item-subtitle v-text="formatDate(expense.created_at)"/>
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
          case 'utility':
            return 'flash'
          case 'transportation':
            return 'motorbike'
          case 'loan':
            return 'coin'
          case 'savings':
            return 'piggy-bank'
        }
      },
      formatDate: function (date) {
        const baseDate = new Date(`${date}`)
        const monthNames = [
          'January', 'February', 'March',
          'April', 'May', 'June', 'July',
          'August', 'September', 'October',
          'November', 'December'
        ]

        const day = baseDate.getDate()
        const monthIndex = baseDate.getMonth()
        const year = baseDate.getFullYear()

        return `${monthNames[monthIndex]} ${day}, ${year}`
      }
    },
  }
</script>

<style scoped>

</style>