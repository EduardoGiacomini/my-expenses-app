import { shallowMount } from '@vue/test-utils'
import '@/views/filters/index'

import Card from '@/views/pages/components/Card.vue'

describe('Card.vue', () => {
  it('Should renders props when passed', () => {
    const expense = {
      type: 'Comidas de bebidas',
      createdAt: new Date(2021, 0, 1, 12, 0, 0),
      price: 22.5
    }
    const expectedExpense = {
      type: 'Comidas de bebidas',
      createdAt: '01/01/2021, 12:00',
      price: 'R$ 22,50'
    }

    const wrapper = shallowMount(Card, {
      propsData: {
        type: expense.type,
        createdAt: expense.createdAt,
        price: expense.price
      }
    })

    expect(wrapper.text()).toMatch(expectedExpense.type)
    expect(wrapper.text()).toMatch(expectedExpense.createdAt)
    expect(wrapper.text()).toMatch(expectedExpense.price)
  })
})
