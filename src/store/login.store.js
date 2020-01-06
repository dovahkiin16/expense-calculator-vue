import axios from 'axios'

export default {
  namespaced: true,
  state: {
    username: '',
    password: '',
    isLoggingIn: false,
    error: '',
  },

  mutations: {
    updateUsername: (state, username) => {
      state.username = username
    },
    updatePassword: (state, password) => {
      state.password = password
    },
    updateLoggingInState: (state, loginState) => {
      state.isLoggingIn = loginState
    },
    updateErrorMessage: (state, errorMessage) => {
      console.log(`error message: ${errorMessage}`)
      state.error = errorMessage
    }
  },

  actions: {
    sendLogin: async (context) => {
      context.commit('updateLoggingInState', true)
      const user = {
        username: context.state.username,
        password: context.state.password,
      }

      try {
        const response = await axios.post(`/users/login`, user)

        context.commit('user/updateUser', response.data, {root: true})
      } catch (e) {
        // Check if have response
        console.log(e)
        if (e.response) {
          context.commit('updateErrorMessage', e.response.data.message)
        } else if (e.request) {
          context.commit('updateErrorMessage', 'Please check your internet connection')
        }
      }

      context.commit('updateLoggingInState', false)
    }
  },
}