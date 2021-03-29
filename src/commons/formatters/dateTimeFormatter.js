class DateTimeFormatter {
  constructor() {
    this.formatter = new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  format(date) {
    return this.formatter.format(date);
  }
}

export default new DateTimeFormatter();
