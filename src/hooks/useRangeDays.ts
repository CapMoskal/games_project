const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export const useRangeDays = (sub: number) => {
  const today = new Date()
  const prevDate = new Date()

  prevDate.setDate(today.getDate() + sub)

  return `${formatDate(prevDate)},${formatDate(today)}`
}
