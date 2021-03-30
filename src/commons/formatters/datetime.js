class Datetime {
  format (date) {
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.getMonth().toString().padStart(2, '0')
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${day}/${month}/${year}, ${hours}:${minutes}`
  }
}

export default new Datetime()
