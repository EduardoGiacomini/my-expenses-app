import currency from '../../../src/views/filters/currency'

describe('Currency Formatter', () => {
  test('Should format positive values correctly', () => {
    const value = 5.50
    const expectedValue = 'R$ 5,50'
    expect(currency(value)).toEqual(expectedValue)
  })

  test('Should format negative values correctly', () => {
    const value = -5.50
    const expectedValue = 'R$ -5,50'
    expect(currency(value)).toEqual(expectedValue)
  })

  test('Should format thousands values correctly', () => {
    const value = 9_999_999_999
    const expectedValue = 'R$ 9.999.999.999,00'
    expect(currency(value)).toEqual(expectedValue)
  })

  test('Should round values correctly', () => {
    const value = 1.999
    const expectedValue = 'R$ 2,00'
    expect(currency(value)).toEqual(expectedValue)
  })
})
