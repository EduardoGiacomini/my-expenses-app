import { shallowMount } from '@vue/test-utils';
import Card from '@/views/components/Card.vue';

describe('Card.vue', () => {
  it('Should renders props when passed', () => {
    // Configuração
    const type = 'Comidas e bebidas';
    const createdAt = new Date();
    const price = 5;

    // Ação
    const wrapper = shallowMount(Card, { propsData: { type, createdAt, price } });

    // Resultado
    expect(wrapper.text()).toMatch(type);
  });
});
