<template>
    <v-card class="full-height">
        <v-card-title>7 days Food expenses</v-card-title>
        <v-divider/>
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

<style scoped>
    .full-height {
        height: 100%;
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
    }
</style>
