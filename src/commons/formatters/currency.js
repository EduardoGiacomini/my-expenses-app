class Currency {
  constructor () {
    this.formatter = new Intl.NumberFormat('pt', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  format (value) {
    return this.formatter.format(value)
  }
}

export default new Currency()
