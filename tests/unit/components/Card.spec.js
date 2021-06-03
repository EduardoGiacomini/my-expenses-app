import { createLocalVue, shallowMount } from '@vue/test-utils'
import Card from '../../../src/views/pages/components/specific/expenseCard/ExpenseCard'

describe('ExpenseCard.vue', () => {
  describe('On component render', () => {
    test('Should use props, i18n and formatters mocks', () => {
      const expense = {
        type: 'education',
        createdAt: new Date(2021, 0, 1, 12, 0, 0),
        price: 4.99
      }
      const expectedExpense = {
        color: 'pages.components.card.color.education',
        alt: 'pages.components.card.alt.education',
        icon: 'pages.components.card.icon.education',
        type: 'pages.components.card.type.education',
        createdAt: '01/01/2021, 12:00',
        price: 'R$ 4,99'
      }
      const vueMock = createLocalVue()
      vueMock.filter('datetime', (datetime) => '01/01/2021, 12:00')
      vueMock.filter('currency', (value) => 'R$ 4,99')
      const i18nMock = (key) => key
      const wrapper = shallowMount(Card, {
        localVue: vueMock,
        mocks: {
          $t: i18nMock
        },
        propsData: {
          type: expense.type,
          createdAt: expense.createdAt,
          price: expense.price
        }
      })

      expect(wrapper.find('figure').classes().includes(expectedExpense.color)).toBeTruthy()
      expect(wrapper.find('figure').attributes().alt).toEqual(expectedExpense.alt)
      expect(wrapper.find('span').text()).toEqual(expectedExpense.icon)
      expect(wrapper.findAll('p').at(0).text()).toEqual(expectedExpense.type)
      expect(wrapper.findAll('p').at(1).text()).toEqual(expectedExpense.createdAt)
      expect(wrapper.findAll('p').at(2).text()).toEqual(expectedExpense.price)
    })
  })
})
