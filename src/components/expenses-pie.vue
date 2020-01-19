<script>
  import {Pie} from 'vue-chartjs'
  import {endOfMonth, format, startOfMonth} from 'date-fns'
  import {mapActions} from 'vuex'

  export default {
    extends: Pie,
    name: 'expenses-pie',
    data() {
      return {
        categories: [
          {text: 'Loan', value: 'loan', color: '#E57373'},
          {text: 'Food', value: 'food', color: '#81C784'},
          {text: 'Utility', value: 'utility', color: '#DCE775'},
          {text: 'Rent', value: 'rent', color: '#BA68C8'},
          {text: 'Transportation', value: 'transportation', color: '#FFF176'},
          {text: 'Home and Lifestyle', value: 'new item', color: '#4DD0E1'},
          {text: 'Toiletries', value: 'toiletries', color: '#7986CB'},
        ]
      }
    },
    async mounted() {
      const options = {
        animation: {
          duration: 700,
        },
        legend: {
          position: 'right',
        },
        responsive: true,
        maintainAspectRatio: false,
      }
      let labels = []
      let reqs = []
      let colors = []
      const today = Date.now()

      this.categories.forEach(category => {
        labels.push(category.text)
        colors.push(category.color)
        const req = {
          exp_type: category.value,
          from: format(startOfMonth(today), 'yyyy-MM-dd\'T\'HH:mm:ss'),
          to: format(endOfMonth(today), 'yyyy-MM-dd\'T\'HH:mm:ss'),
        }

        reqs.push(this.getExpensesSum(req))
      })
      let data = await Promise.all(reqs)
      data = data.map(r => r.data.total_expense)

      const chartData = {
        labels,
        datasets: [
          {
            backgroundColor: colors,
            data,
            borderWidth: 0
          }
        ]
      }

      this.renderChart(chartData, options)
    },
    methods: {
      ...mapActions('expenses', ['getExpensesSum']),
    }
  }
</script>
