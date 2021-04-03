import { shallowMount } from '@vue/test-utils'
import NavBarItem from '../../../src/views/pages/components/NavBarItem'

describe('NavBarItem.vue', () => {
  describe('On component render', () => {
    test('Should be active with current route given', () => {
      const currentRoute = {
        path: '/',
        name: 'home'
      }
      const navBarItem = {
        route: 'home',
        name: 'Home',
        icon: 'home'
      }

      const wrapper = shallowMount(NavBarItem, {
        mocks: { $route: currentRoute },
        propsData: {
          route: navBarItem.route,
          name: navBarItem.name,
          icon: navBarItem.icon
        }
      })

      expect(wrapper.text()).toMatch(navBarItem.name)
      expect(wrapper.vm.isCurrentRouteSelected()).toBeTruthy()
    })

    test('Should be inactive with other route given', () => {
      const currentRoute = {
        path: '/',
        name: 'home'
      }
      const navBarItem = {
        route: 'profile',
        name: 'Profile',
        icon: 'profile'
      }
      const wrapper = shallowMount(NavBarItem, {
        mocks: { $route: currentRoute },
        propsData: {
          route: navBarItem.route,
          name: navBarItem.name,
          icon: navBarItem.icon
        }
      })

      expect(wrapper.text()).toMatch(navBarItem.name)
      expect(wrapper.vm.isCurrentRouteSelected()).toBeFalsy()
    })
  })

  describe('On NavbarItem click', () => {
    test('Should call goToSelectedRoute method and change current route', async () => {
      const currentRoute = {
        path: '/',
        name: 'home'
      }
      const navBarItem = {
        route: 'profile',
        name: 'Profile',
        icon: 'profile'
      }
      const routerMock = { push: jest.fn() }
      const goToSelectedRouteWatcher = jest.spyOn(NavBarItem.methods, 'goToSelectedRoute')

      const wrapper = shallowMount(NavBarItem, {
        mocks: { $route: currentRoute, $router: routerMock },
        propsData: {
          route: navBarItem.route,
          name: navBarItem.name,
          icon: navBarItem.icon
        }
      })
      await wrapper.find('li').trigger('click')

      expect(goToSelectedRouteWatcher).toHaveBeenCalled()
      expect(routerMock.push).toHaveBeenCalledWith({ name: navBarItem.route })
    })

    test('Should call goToSelectedRoute method and must not change current route', async () => {
      const currentRoute = {
        path: '/',
        name: 'home'
      }
      const navBarItem = {
        route: 'home',
        name: 'Home',
        icon: 'home'
      }
      const routerMock = { push: jest.fn() }
      const goToSelectedRouteWatcher = jest.spyOn(NavBarItem.methods, 'goToSelectedRoute')

      const wrapper = shallowMount(NavBarItem, {
        mocks: { $route: currentRoute, $router: routerMock },
        propsData: {
          route: navBarItem.route,
          name: navBarItem.name,
          icon: navBarItem.icon
        }
      })
      await wrapper.find('li').trigger('click')

      expect(goToSelectedRouteWatcher).toHaveBeenCalled()
      expect(routerMock.push).not.toHaveBeenCalled()
    })
  })
})
