import Vue from 'vue';

import currency from './currency';
import dateTime from './dateTime';

Vue.filter('currency', currency);
Vue.filter('dateTime', dateTime);

export default {};
