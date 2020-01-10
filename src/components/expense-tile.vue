<template>
    <v-card>
        <v-card-title>{{title}}</v-card-title>
        <v-card-text>{{value}}</v-card-text>
    </v-card>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'expense-tile',
    props: ['type', 'need', 'from', 'until', 'title'],
    data() {
      return {
        value: '',
      }
    },
    async mounted() {
      const payload = {}

      if (this.type) {
        payload.exp_type = this.type
      }

      if (this.need !== undefined) {
        payload.need = this.need
      }

      if (this.from) {
        payload.from = this.from
      }

      if (this.until) {
        payload.until = this.until
      }

      try {
        const result = await this.getExpensesSum(payload)
        this.value = result.data.total_expense
      } catch (e) {
        this.value = e.response.data.message
      }
    },
    methods: {
      ...mapActions('expenses', ['getExpensesSum'])
    },
  }
</script>

<style scoped>

</style>