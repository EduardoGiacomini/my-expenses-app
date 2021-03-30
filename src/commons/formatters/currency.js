class Currency {
  format (value) {
    const formattedValue = value
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    return `R$ ${formattedValue}`
  }
}

export default new Currency()
