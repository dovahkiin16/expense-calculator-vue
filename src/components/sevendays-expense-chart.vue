<script>
  import {Line} from 'vue-chartjs'
  import {endOfDay, format, startOfDay, sub} from 'date-fns'
  import {mapActions} from 'vuex'


  export default {
    extends: Line,
    name: 'sevendays-expense-chart',
    data() {
      const today = Date.now()
      const days = []

      for (let i = 6; i >= 0; i--) {
        days.push(sub(today, {days: i}))
      }

      return {
        days
      }
    },
    async mounted() {
      const options = {
        tooltips: {
          intersect: false,
          mode: 'x-axis',
        },
        animation: {
          duration: 700,
        },
        responsive: true,
        maintainAspectRatio: false,
      }
      console.log(options)
      const labels = []
      let d1p = [] // data request holder for dataset 1
      let d2p = [] // data request holder for dataset 2

      this.days.forEach(day => {
        labels.push(format(day, 'ccc, LLL dd'))
        const p1 = {
          exp_type: 'food',
          from: format(startOfDay(day), 'yyyy-MM-dd\'T\'HH:mm:ss'),
          until: format(endOfDay(day), 'yyyy-MM-dd\'T\'HH:mm:ss'),
        }
        const p2 = Object.assign({}, p1)
        p2.need = false

        d1p.push(this.getExpensesSum(p1))
        d2p.push(this.getExpensesSum(p2))

      })

      let d1 = await Promise.all(d1p)
      let d2 = await Promise.all(d2p)
      d1 = d1.map(r => r.data.total_expense)
      d2 = d2.map(r => r.data.total_expense)

      const chartData = {
        labels,
        datasets: [
          {
            label: 'Excess expenses',
            backgroundColor: '#EF5350',
            lineTension: 0,
            data: d2
          },
          {
            label: 'All',
            backgroundColor: '#9CCC65',
            lineTension: 0,
            data: d1
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

<style scoped>

</style>