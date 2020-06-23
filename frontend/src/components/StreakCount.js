import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

export const StreakCount = ({ timeStamp, category }) => {
  // Start & End for category === week 
  const weekStart = moment().startOf('isoweek').format('ll')
  const weekEnd = moment().endOf('isoweek').format('ll')

  // Start & End for category === month 
  const monthStart = moment().startOf('month').format('ll')
  const monthEnd = moment().endOf('month').format('ll')

  // Array of the days marked as done in same format as start & end
  const habitDone = timeStamp.map((time) => {
    return moment.unix(time).format('ll')
  })

  // checks the category and returns the filitered arrays 
  const filterStreak = (category) => {
    if (category === 'weekly') {
      return habitDone.filter(habit => habit > weekStart && habit < weekEnd)
    } else {
      return habitDone.filter(habit => habit > monthStart && habit < monthEnd)
    }
  }

  const filteredHabits = filterStreak()

  return (
    <Streak filteredHabits={filteredHabits}>
      {category === 'weekly' ? filteredHabits.length + "/7 days completed" : filteredHabits.length + "/30 days completed"}
    </Streak>
  )
}


export const Streak = styled.p`
  font-size: 18px;
  align-self: center;
  color: white;
  text-transform: uppercase; 
  margin-bottom: 10px;
`