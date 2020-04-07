export const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(month: number, year: number) {
  return 32 - new Date(year, month, 32).getDate()
}

export function getCalendar(month: number, year: number) {
  const firstDay = new Date(year, month).getDay()
  const weeksInMonth: Array<Array<Date | null>> = []
  let date = 0
  for (let i = 0; i < 6; i++) {
    const _weekdays: Array<Date | null> = []
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        
        _weekdays.push(null)
      } else if (date > daysInMonth(month, year)) {
        break
      } else {
        date++
        _weekdays.push(new Date(year, month, date))
      }
    }
    weeksInMonth.push(_weekdays)
  }
  return weeksInMonth
}
