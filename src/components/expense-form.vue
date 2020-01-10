<template>
    <v-card>
        <v-card-title>New Expense</v-card-title>
        <v-divider/>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-alert dismissible :type="alertType" v-model="showAlert">{{alertMsg}}</v-alert>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10">
                    <v-select
                            :items="items"
                            color="secondary"
                            item-text="text"
                            item-value="value"
                            label="Expense type"
                            v-model="form.expense_type"/>
                </v-col>
                <v-col cols="2">
                    <v-checkbox color="secondary" label="Need" v-model="form.need"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col col="12">
                    <v-text-field
                            color="secondary"
                            label="Amount"
                            type="number"
                            v-model="form.amount"/>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                            color="secondary"
                            label="Description (optional)"
                            v-model="form.description"/>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
            <v-spacer/>
            <v-btn color="secondary" @click="submit">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'expense-form',
    data() {
      const initialForm = {
        expense_type: '',
        amount: 0,
        need: '',
        description: '',
      }

      return {
        initialForm,
        form: Object.assign({}, initialForm),
        items: [
          {text: 'Food', value: 'food'},
          {text: 'Transportation', value: 'transportation'},
          {text: 'Loan', value: 'loan'},
          {text: 'Rent', value: 'rent'},
          {text: 'Utilities', value: 'utilities'},
        ],
        alertMsg: '',
        showAlert: false,
        alertType: 'success',
      }
    },
    methods: {
      ...mapActions('expenses', ['postNewExpense']),
      async submit() {
        this.form.amount = parseFloat(this.form.amount)

        if (!this.form.description) {
          delete this.form.description
        }

        if (!this.form.need) {
          this.form.need = false
        }

        try {
          await this.postNewExpense(this.form)

          this.alertMsg = 'New Expense created!'
          this.alertType = 'success'
          this.form = this.initialForm
        } catch (e) {
          this.alertMsg = e.response.data.message
          this.alertType = 'error'
        }

        this.showAlert = true
      }
    }
  }
</script>

<style scoped>
    .col {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
