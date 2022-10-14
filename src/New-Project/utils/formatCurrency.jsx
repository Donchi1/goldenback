const interFormate = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
})

export default function formatCurrency(number) {
  return interFormate.format(number)
}
