import React, { useState } from 'react'
import styled from 'styled-components'
import { AddHabit } from '../components/AddHabit'

export const ToggleButton = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Container>
      <TodayButton className="toggle-button" onClick={handleToggle}>{`${!toggle ? "Add todays habits" : "-"}`}</TodayButton>
      {toggle && <AddHabit />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TodayButton = styled.button`
  font-size: 15px;
  background-color: #48c9b0;
  border-radius: 12px;
  margin: 10px 0 0 0;
  color: white;
  border: none;
  padding: 14px;

  &:hover {
    font-size: 20px;
    transform: scale(1.1);
    cursor: pointer;
  }
`