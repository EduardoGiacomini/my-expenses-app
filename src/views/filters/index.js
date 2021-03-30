import Vue from 'vue'

import currency from './currency'
import dateTime from './datetime'

Vue.filter('currency', currency)
Vue.filter('datetime', dateTime)

export default {}
