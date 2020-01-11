import Vue from 'vue'

Vue.filter('toMoneyFmt', function (value) {
  return Intl.NumberFormat('en-US', {style: 'currency', currency: 'PHP'}).format(value).toString()
})

Vue.filter('capitalize', function (value) {
  const v = value.toString().toLowerCase()
  v[0] = v.toUpperCase()
  return v
})