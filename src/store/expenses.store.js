import axios from 'axios'

export default {
  namespaced: true,
  state: {
    expenses: [],
    error: '',
  },

  mutations: {
    updateExpenses: (state, expenses) => {
      state.expenses = expenses
    },
    updateError: (state, error) => {
      state.error = error
    },
  },

  actions: {
    fetchExpenses: async context => {
      const user_id = context.rootState.user.id

      try {
        const response = await axios.get(`users/${user_id}/expenses`)

        context.commit('updateExpenses', response.data)
      } catch (e) {
        // check if response received
        if (e.response) {
          context.commit('updateError', e.response.data.message)
        } else if (e.request) {
          context.commit('updateError', 'Please check your internet connection')
        }
      }
    },

    getExpensesSum: async (context, payload) => {
      const user_id = context.rootState.user.id
      let url = `users/${user_id}/expenses/sum?`

      return axios.get(url, {params: payload})
    }
  },
}