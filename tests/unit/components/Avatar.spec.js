import { shallowMount } from '@vue/test-utils'
import i18n from '../../../src/commons/plugins/i18n'
import Avatar from '../../../src/views/pages/components/Avatar'

describe('Avatar.vue', () => {
  let user = null

  beforeAll(() => {
    user = {
      name: 'Carlos',
      email: 'carloseduardo.diasgiacomini@gmail.com',
      photo: 'photo.jpg'
    }
  })

  test('Deve renderizar o componente na tela', () => {
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
