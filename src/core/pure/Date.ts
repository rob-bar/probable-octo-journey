const oneDayInMs = 86400000

export function incrementDate(dateInput: Date, increment: number): Date {
  const dateToTime = new Date(dateInput).getTime()
  return new Date(dateToTime + increment * oneDayInMs)
}
