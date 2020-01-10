<template>
    <v-container>
        <expense-form class="the-form"/>
    </v-container>
</template>

<script>
  import ExpenseForm from '../components/expense-form'

  export default {
    name: 'expense-form-view',
    components: {ExpenseForm},
  }
</script>

<style scoped>
    .the-form {
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
    }
</style>