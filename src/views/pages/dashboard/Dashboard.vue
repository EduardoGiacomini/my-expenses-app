<template>
  <div>
    <section class="flex justify-between mb-4">
      <Heading>
        {{ $t('pages.dashboard.title') }}
      </Heading>
      <button-primary>
        {{ $t('pages.dashboard.actions.newExpense') }}
      </button-primary>
    </section>

    <div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
      <section class="space-y-4">
        <section class="space-y-4">
          <sub-heading :title="$t('pages.dashboard.sections.expensesChart.title')"
                       :subtitle="$t('pages.dashboard.sections.expensesChart.subtitle')"/>
          <expense-bar-chart style="height: 30vh"/>
        </section>
        <section class="space-y-4">
          <sub-heading :title="$t('pages.dashboard.sections.lastExpenses.title')"/>
          <card type="food" :price="14.99" :created-at="new Date()"/>
          <card type="transport" :price="5" :created-at="new Date()"/>
          <card type="education" :price="105" :created-at="new Date()"/>
        </section>
      </section>

      <section class="space-y-4">
        <sub-heading :title="$t('pages.dashboard.sections.expensesDetail.title')"/>
        <div class="space-y-3">
          <progress-bar label="Comida e bebida" :total="10000" :value="4500"/>
          <progress-bar label="Educação" :total="10000" :value="2000"/>
          <progress-bar label="Roupas e sapatos" :total="10000" :value="1800"/>
          <progress-bar label="Transporte" :total="10000" :value="1000"/>
          <progress-bar label="Saúde" :total="10000" :value="700"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Heading from '../components/generic/typography/Heading'
import SubHeading from '../components/generic/typography/SubHeading'
import ButtonPrimary from '../components/generic/button/ButtonPrimary'
import ExpenseBarChart from './components/ExpenseBarChart'
import Card from '../components/specific/expenseCard/ExpenseCard'
import ProgressBar from './components/ExpenseProgressBar'

export default {
  name: 'dashboard',
  components: { Heading, SubHeading, ButtonPrimary, ExpenseBarChart, Card, ProgressBar }
}
</script>
