import React from 'react'
import { ItemText } from '../components/ItemStyle'
import moment from 'moment'


export const HabitStreak = ({ timeStamp, category }) => {
  const weekStart = moment().startOf('isoweek').format('ll')
  const weekEnd = moment().endOf('isoweek').format('ll')
  const monthStart = moment().startOf('month').format('ll')
  const monthEnd = moment().endOf('month').format('ll')
  const habitDone = timeStamp.map((time) => {
    return moment.unix(time).format('ll')
  })

  const filterStreak = (category) => {
    if (category === 'weekly') {
      return habitDone.filter(habit => habit > weekStart && habit < weekEnd)
    } else {
      return habitDone.filter(habit => habit > monthStart && habit < monthEnd)
    }
  }

  const filteredHabits = filterStreak()

  return (
    <ItemText habitDone={habitDone} color="white">
      {category === 'weekly' ? "This week: " : "This month: "} {filteredHabits.length} times
    </ItemText>
  )
}