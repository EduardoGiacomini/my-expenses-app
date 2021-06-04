<template>
  <div>
    <section class="flex justify-between mb-4">
      <Heading>
        {{ $t('pages.dashboard.title') }}
      </Heading>
      <button-primary>
        {{ $t('pages.dashboard.actions.newTransaction') }}
      </button-primary>
    </section>

    <div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
      <section class="space-y-4">
        <section class="space-y-4">
          <sub-heading :title="$t('pages.dashboard.sections.transactionsChart.title')"
                       :subtitle="$t('pages.dashboard.sections.transactionsChart.subtitle')"/>
          <dashboard-transactions-bar-chart style="height: 30vh"/>
        </section>
        <section class="space-y-4">
          <sub-heading :title="$t('pages.dashboard.sections.lastTransactions.title')"/>
          <transaction-card type="food" :price="14.99" :created-at="new Date()"/>
          <transaction-card type="transport" :price="5" :created-at="new Date()"/>
          <transaction-card type="education" :price="105" :created-at="new Date()"/>
        </section>
      </section>

      <section class="space-y-4">
        <sub-heading :title="$t('pages.dashboard.sections.transactionsDetail.title')"/>
        <div class="space-y-3">
          <dashboard-transactions-progress-bar label="Comida e bebida" :total="10000" :value="4500"/>
          <dashboard-transactions-progress-bar label="Educação" :total="10000" :value="2000"/>
          <dashboard-transactions-progress-bar label="Roupas e sapatos" :total="10000" :value="1800"/>
          <dashboard-transactions-progress-bar label="Transporte" :total="10000" :value="1000"/>
          <dashboard-transactions-progress-bar label="Saúde" :total="10000" :value="700"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Heading from '../components/generic/typography/Heading'
import SubHeading from '../components/generic/typography/SubHeading'
import ButtonPrimary from '../components/generic/button/ButtonPrimary'
import DashboardTransactionsBarChart from './components/DashboardTransactionsBarChart'
import DashboardTransactionsProgressBar from './components/DashboardTransactionsProgressBar'
import TransactionCard from '../components/specific/transactionCard/TransactionCard'

export default {
  name: 'dashboard',
  components: { Heading, SubHeading, ButtonPrimary, DashboardTransactionsBarChart, DashboardTransactionsProgressBar, TransactionCard }
}
</script>
