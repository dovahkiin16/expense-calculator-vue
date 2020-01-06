import store from '../store/index'

export const authOnly = (to, from, next) => {
  if (!store.state.user.id) {
    next('/login')

    return
  }

  next()
}

export const noAuth = (to, from, next) => {
  if (store.state.user.id) {
    next('/')

    return
  }

  next()
}