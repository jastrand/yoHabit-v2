import React from 'react'
import { ItemText } from '../components/ItemStyle'
import moment from 'moment'


export const HabitStreak = ({ timeStamp, category }) => {

  const weekStart = moment().startOf('week').fromNow()
  const weekEnd = moment().endOf('week').fromNow()
  const monthStart = moment().startOf('month').fromNow()
  const monthEnd = moment().endOf('month').fromNow()
  const habitDone = timeStamp

  const filterStreak = () => {
    if (category === 'weekly') {
      habitDone.filter(a => a > weekStart && a < weekEnd)
    } else if (category === 'monthly') {
      habitDone.filter(a => a > monthStart && a < monthEnd)
    }
  }

  filterStreak()

  return (
    <ItemText habitDone={habitDone} color="white">
      {category === 'weekly' ? "This week: " : "This month: "} {habitDone.length} times
    </ItemText>
  )
}
