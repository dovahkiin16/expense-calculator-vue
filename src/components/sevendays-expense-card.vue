<template>
    <v-card>
        <v-card-text>
            <sevendays-expense-chart :height="400"/>
        </v-card-text>
    </v-card>
</template>

<script>
  import SevendaysExpenseChart from './sevendays-expense-chart'

  export default {
    name: 'sevendays-expense-card',
    components: {SevendaysExpenseChart},
  }
</script>
