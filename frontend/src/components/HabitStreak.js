import React, { useState } from 'react'
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
      const filterWeekly = habitDone.filter(habit => habit > weekStart && habit < weekEnd)
      console.log(filterWeekly + "7 days")
    } else {
      const filterMonthly = habitDone.filter(habit => habit > monthStart && habit < monthEnd)
      console.log(filterMonthly + "30 days")
    }
  }

  filterStreak()

  return (
    <ItemText habitDone={habitDone} color="white">
      {category === 'weekly' ? "This week: " : "This month: "} {habitDone.length} times
    </ItemText>
  )
}
