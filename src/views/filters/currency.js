import { currency as currencyFormatter } from '@/commons/formatters'

export default function currency (value) {
  return currencyFormatter.format(value)
}
