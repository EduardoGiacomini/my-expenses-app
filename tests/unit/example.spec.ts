import { shallowMount } from '@vue/test-utils';
import Card from '@/views/pages/components/Card.vue';

describe('Card.vue', () => {
  it('Should render props when passed', () => {
    const type = 'Comidas e bebidas';
    const createdAt = '01 de janeiro de 2021, 12:00';
    const price = '5,00';

    const expectedPrice = '- R$ 5,00';

    const wrapper = shallowMount(Card, {
      propsData: { type, createdAt, price },
    });

    expect(wrapper.text()).toMatch(type);
    expect(wrapper.text()).toMatch(createdAt);
    expect(wrapper.text()).toMatch(expectedPrice);
  });
});
