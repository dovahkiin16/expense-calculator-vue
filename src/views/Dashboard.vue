<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <expense-tile
                        :need="false"
                        title="Extra Expenses"/>
            </v-col>

            <v-col cols="2">
                <expense-tile
                        :from="startOfMonthFmt"
                        :until="endOfMonthFmt"
                        title="Food Expenses"
                        type="food"/>
            </v-col>

            <v-col cols="2">
                <expense-tile
                        :from="startOfMonthFmt"
                        :until="endOfMonthFmt"
                        title="Utility Expense"
                        type="utility"/>
            </v-col>

            <v-col cols="2">
                <expense-tile
                        :from="startOfMonthFmt"
                        :until="endOfMonthFmt"
                        title="Transportation Expenses"
                        type="transportation"/>
            </v-col>

            <v-col cols="2">
                <expense-tile
                        :from="startOfMonthFmt"
                        :until="endOfMonthFmt"
                        title="Total Expenses"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <sevendays-expense-card/>
            </v-col>
            <v-col cols="4">
                <expense-pie-card/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import {endOfMonth, format, startOfMonth} from 'date-fns'
  import ExpenseTile from '../components/expense-tile'
  import SevendaysExpenseCard from '../components/sevendays-expense-card'
  import ExpensePieCard from '../components/expense-pie-card'

  export default {
    name: 'dashboard',
    components: {ExpensePieCard, SevendaysExpenseCard, ExpenseTile},
    created() {
    },
    computed: {
      startOfMonthFmt() {
        return format(startOfMonth(Date.now()), 'yyyy-MM-dd\'T\'HH:mm:ss')
      },
      endOfMonthFmt() {
        return format(endOfMonth(Date.now()), 'yyyy-MM-dd\'T\'HH:mm:ss')
      }
    },
  }
</script>
