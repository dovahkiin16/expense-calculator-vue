<template>
    <v-list two-line>
        <v-list-item
                v-for="expense in expenses"
                :key="expense.id"
        >
            <v-list-item-icon>{{getIcon(expense.type)}}</v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{expense.amount}} - {{expense.type}}</v-list-item-title>
                <v-list-item-subtitle>{{expense.created_at}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
  export default {
    name: 'expenses-list',
    data() {
      return {
        expenses: []
      }
    },
    computed: {},
    methods: {
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
      }
    }
  }
</script>

<style scoped>

</style>