import { shallowMount } from '@vue/test-utils'
import i18n from '../../../src/commons/plugins/i18n'
import Avatar from '../../../src/views/pages/components/Avatar'

describe('Avatar.vue', () => {
  describe('On component render', () => {
    test('Should use props', () => {
      const user = {
        name: 'Carlos',
        email: 'carloseduardo.diasgiacomini@gmail.com',
        photo: 'photo.jpg'
      }
      const wrapper = shallowMount(Avatar, {
        propsData: {
          user
        },
        i18n
      })

      expect(wrapper.text()).toMatch(user.name)
      expect(wrapper.text()).toMatch(user.email)
    })
  })
})
