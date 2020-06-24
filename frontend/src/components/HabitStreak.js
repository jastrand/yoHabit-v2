import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

// This component filters the timeStamp based on the selection from the user "monthly" or "weekly"

export const HabitStreak = ({ timeStamp, category }) => {

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
    <ItemText habitDone={habitDone} color="white">
      {category === 'weekly' ? "This week: " : "This month: "} {filteredHabits.length} times
    </ItemText>

  )
}

export const ItemText = styled.p`
  color: ${props => props.color || "white"};
  margin: 0;
  font-size: ${props => props.fontSize || "20px"};
  text-transform: uppercase;
`


