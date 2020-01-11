import Vue from 'vue'

Vue.filter('toMoneyFmt', function (value) {
  return Intl.NumberFormat('en-US', { style: 'currency', currency: 'PHP'}).format(value).toString();
})