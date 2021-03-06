import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { HabitItem } from '../components/HabitItem'

export const HabitSettings = () => {
  const habits = useSelector((store) => store.habits.habitData)
  return (
    <Section>
      {habits.map((habit, index) => (
        <HabitItem key={index} habit={habit} />
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
