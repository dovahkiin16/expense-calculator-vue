export default {
  namespaced: true,
  state: {
    id: '',
    name: '',
    username: '',
  },

  mutations: {
    updateUser: (state, data) => {
      state.id = data.id
      state.name = data.name
      state.username = data.username
    }
  }
}