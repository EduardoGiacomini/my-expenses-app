import { createLocalVue, shallowMount } from '@vue/test-utils'
import ProgressBar from '../../../src/views/pages/components/ProgressBar'

describe('ProgressBar.vue', () => {
  describe('On component render', () => {
    test('Should use props and calculate value in percentage', () => {
      const progress = {
        label: 'Comida e bebida',
        total: 100,
        value: 45
      }
      const expectedProgress = {
        label: 'Comida e bebida',
        valueInPercentage: 45,
        textValue: '45% - R$ 45,00'
      }
      const vueMock = createLocalVue()
      vueMock.filter('currency', (value) => 'R$ 45,00')
      const wrapper = shallowMount(ProgressBar, {
        localVue: vueMock,
        propsData: {
          label: progress.label,
          total: progress.total,
          value: progress.value
        }
      })

      expect(wrapper.findAll('p').at(0).text()).toEqual(expectedProgress.label)
      expect(wrapper.findAll('p').at(1).text()).toEqual(expectedProgress.textValue)
      expect(wrapper.vm.getValueInPercentage).toEqual(expectedProgress.valueInPercentage)
    })
  })
})
