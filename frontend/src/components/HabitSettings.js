import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { HabitItem } from '../components/HabitItem'

// this component is where the user sets the habits to track under the page "settings"

export const HabitSettings = () => {
  const habits = useSelector((store) => store.habits)
  return (
    <Section>
      <Link style={{ color: "black" }} to="/profile">Back</Link>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 30px 0;
`