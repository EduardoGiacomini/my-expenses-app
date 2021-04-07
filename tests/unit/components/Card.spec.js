import { createLocalVue, shallowMount } from '@vue/test-utils'
import i18n from '../../../src/commons/plugins/i18n'
import currency from '../../../src/views/filters/currency'
import datetime from '../../../src/views/filters/datetime'
import Card from '../../../src/views/pages/components/Card'

describe('Card.vue', () => {
  describe('On component render', () => {
    test('Should use props, i18n and and formatters', () => {
      const expense = {
        type: 'education',
        createdAt: new Date(2021, 0, 1, 12, 0, 0),
        price: 4.99
      }
      const expectedExpense = {
        type: 'Educação',
        createdAt: '01/01/2021, 12:00',
        price: 'R$ 4,99'
      }
      const localVue = createLocalVue()
      localVue.filter('currency', currency)
      localVue.filter('datetime', datetime)
      const wrapper = shallowMount(Card, {
        localVue,
        propsData: {
          type: expense.type,
          createdAt: expense.createdAt,
          price: expense.price
        },
        i18n
      })

      expect(wrapper.text()).toMatch(expectedExpense.type)
      expect(wrapper.text()).toMatch(expectedExpense.createdAt)
      expect(wrapper.text()).toMatch(expectedExpense.price)
    })
  })
})
