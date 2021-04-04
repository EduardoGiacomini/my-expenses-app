import { shallowMount } from '@vue/test-utils'
import i18n from '../../../src/commons/plugins/i18n'
import Logout from '../../../src/views/pages/components/Logout'

describe('Logout.vue', () => {
  describe('On component button click', () => {
    test('Should throw not implemented error', () => {
      const logoutWatcher = jest.spyOn(Logout.methods, 'logout')
      const wrapper = shallowMount(Logout, { i18n })

      wrapper.find('button').trigger('click')

      expect(logoutWatcher).toHaveBeenCalled()
    })
  })
})
