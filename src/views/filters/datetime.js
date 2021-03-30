import { datetime as dateTimeFormatter } from '@/commons/formatters'

export default function datetime (dateToFormat) {
  return dateTimeFormatter.format(dateToFormat)
}
