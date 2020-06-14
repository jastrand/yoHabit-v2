import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HabitSettings } from '../components/HabitSettings'
import { BackIcon } from '../assets/BackIcon'
import { HabitInput } from '../components/HabitInput'

// this component is the users settings page 

export const Settings = () => {
  return (
    <SettingsPage>
      <StyledLink style={{ color: "#48c9b0" }} to="/profile"><BackIcon />Back to Dashboard</StyledLink>
      <Text>Please select your habits</Text>

      <HabitSettings />
    </SettingsPage>
  )
}

const Text = styled.h1`
  color: #48c9b0;
  margin: 10px;  
`

const SettingsPage = styled.section`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: whitesmoke;
`

const StyledLink = styled(Link)`
  margin-bottom: 10px;  
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;

  &: hover {
    text-decoration: underline;
  }
`
