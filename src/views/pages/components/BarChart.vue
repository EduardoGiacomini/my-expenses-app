<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'bar-chart',
  data () {
    return {
      data: {
        labels: ['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar', 'Abr'],
        datasets: [
          {
            data: [750, 760, 650, 815, 890, 610, 590, 590, 613, 712, 810, 948],
            backgroundColor: 'rgba(59, 130, 246, 0.25)',
            borderColor: '#3B82F6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              maxTicksLimit: 10,
              min: 0,
              callback: function (label, index, labels) {
                return `R$ ${label}`
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: (item, data) => ` R$ ${data.datasets[item.datasetIndex].data[item.index]}`
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods: {
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>
